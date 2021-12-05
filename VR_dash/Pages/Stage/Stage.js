import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button, 
  Linking, 
} from "react-native";

import db, { auth } from "../../firebase";

const gameServerURL = "http://localhost:5000";

const StageScreen = ({ route, navigation }) => {
  const[state, setState] = useState({
    stages: null,
  })

  const getStage = () => {
    db.collection(auth.currentUser.uid)
    .doc("StageList")
    .collection("Stage")
      .get()
      .then((querySnapshot) => {
        const stages1 = []
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            stages1.push(data)
        });
        setState({ stages: stages1})
    })
  };  

  const onScreenLoad = () => {
    getStage();
  };

  useEffect(() => {
    onScreenLoad();
  }, []);

  const navigate = useNavigation();
  
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  const onLoadGameStageCred = async (event) => {
    student_name = route.params.selectedStudent;
    try {
      const response = await axios.post(`${gameServerURL}/user`, {
        student_name, 
        stagelevel, 
      });
      if (response.status === 201){
        alert(` Let's Play!`);
        setIsLoading(false);
      }
      else {
        throw new Error("An error has occured");
      }
    }
    catch (error) {
      alert("An error has occured");
      setIsLoading(false);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headingText}>Stage</Text>
      </View>
      <View style={styles.topContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("CreateStageScreen")}>
          <View style={styles.logoutContainer}>
            <Text style={styles.logoutText}>Create Stage</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.stage_container}>
          <View style={styles.stage_header_container}>
            <View style={styles.stage_id}><Text style={styles.font}>No.</Text></View>
            <View style={styles.stage_name}><Text style={styles.font}>Name</Text></View>
            <View style={styles.stage_view}><Text style={styles.font}>Select</Text></View>
          </View>         
            {              
              state.stages &&
              state.stages.map( stage =>{
                return (
                  <View style={styles.stage_inner}>
                  <View style={styles.stage_id}><Text style={styles.font}>{stage.id}</Text></View>
                  <View style={styles.stage_name}><Text style={styles.font}>{stage.name}</Text></View>
                 
                  <View style={styles.stage_view}>
                    <Text style={styles.font}>
                      <Button 
                      title="Let's Play"
                      style={styles.playButton}
                      onPress={() => Linking.openURL('http://localhost:8888')}
                      />
                    </Text>
                  </View>
                  </View>
                )
              })
            }
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen", {
              selectedStudent: route.params.selectedStudent,
            })}
          >
          <View style={styles.homeContainer}>
            <Text style={styles.homeText}>Back to Homepage</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignOut}>
          <View style={styles.logoutContainer}>
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000",
  },
  topContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  middleContainer: {
    flex: 6,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
  },
  headingText: {
    fontFamily: "sans-serif-light",
    fontSize: 50,
    color: "#FFF",
    textDecorationLine:"underline",
  },
  timeText:{
    fontFamily: "sans-serif-light",
    fontSize: 20,
    color: "#FFF",
  },
  stage_container: {
    width: "50%",
    height: "90%",
    borderWidth: 1,
    borderColor: "#FFF",
    justifyContent: "center",
    flexDirection: "column",
  },
  stage_header_container: {
    flexDirection:"row",
    justifyContent:"space-between",
    borderWidth: 1,
    borderColor: "#FFF",
    flex: 1,
  },
  stage_inner: {
    width: "100",
    flexDirection:"row",
    flex: 2,
  },
  stage_id: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#777",
  },
  stage_name: {
    flex:4,
    justifyContent:"center",
    borderWidth:1,
    borderColor:"#777",
    paddingLeft:10,
  },
  stage_view: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#777",
  },
  homeContainer: {
    height: 50,
    width: 500,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    backgroundColor:"#444",
    borderRadius:10,
  },
  homeText: {
    fontFamily: "sans-serif-light",
    fontSize: 30,
    color: "#fff",
  },
  logoutContainer: {
    height: 50,
    width: 500,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  logoutText: {
    fontFamily: "sans-serif-light",
    fontSize: 30,
    color: "#fff",
  },
  stage_play: {
    height: 24,
    width: 100,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#808080",
  },
  stagetext: {
    fontFamily: "sans-serif-light",
    fontSize: 18,
    color: "#fff",
  },
  playButton: {
    padding: 10,
  },
  font: {
    fontFamily: "sans-serif-light",
    fontSize:30,
    color:"#fff",
  },
});

export default StageScreen;
