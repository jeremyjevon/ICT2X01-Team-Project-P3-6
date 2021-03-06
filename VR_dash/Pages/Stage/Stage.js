import React, { useState, useEffect } from "react";
import Modal from './Modal';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import db, { auth } from "../../firebase";

/* Stage Page
This page display a table of stage from the db.
A detailed popup view is available at the last column.
Creation of stage is available at the top of the page.
*/

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
  
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedStage, setSelectedStage] = useState(null);

  const expandModal = (stage) => {
    setSelectedStage(stage);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setSelectedStage(null);
    setModalIsOpen(false);
  }
  const user = route.params.selectedUser

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headingText}>Stage</Text>
      </View>
      <View style={styles.topContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("CreateStageScreen", {
              selectedStudent: user
            })}>
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
            <View style={styles.stage_view}><Text style={styles.font}>Details</Text></View>
          </View>         
            {              
              state.stages &&
              state.stages.map( stage =>{
                return (
                  <View style={styles.stage_inner}>
                    <View style={styles.stage_id}><Text style={styles.font}>{stage.id}</Text></View>
                    <View style={styles.stage_name}><Text style={styles.font}>{stage.name}</Text></View>
                    <View style={styles.stage_view}>
                      <TouchableOpacity onPress={() => expandModal(stage)}>
                          <View style={styles.detailsContainer}>
                            <Text style={styles.detailsText}>View Details</Text>
                          </View> 
                      </TouchableOpacity>  
                        <Modal open={modalIsOpen} onRequestClose={closeModal}>
                            <View style={styles.container}>
                              <View style={styles.topContainer}>
                                <Text style={styles.headingText}>Stage Details</Text>
                              </View>                     
                                <View style={styles.stage_inner}>
                                  <View style={styles.stage_name}><Text style={styles.font}>ID: {selectedStage && selectedStage.id}</Text></View>
                                  <View style={styles.stage_name}><Text style={styles.font}>Name: {selectedStage && selectedStage.name}</Text></View>
                                </View>
                                <View style={styles.stage_inner}>
                                  <View style={styles.stage_name}><Text style={styles.font}>EXP: {selectedStage && selectedStage.exp}</Text></View>
                                  <View style={styles.stage_name}><Text style={styles.font}>Difficulty: {selectedStage && selectedStage.difficulty}</Text></View>
                                </View>
                                <TouchableOpacity>
                                  <View style={styles.logoutContainer}>
                                    <Text style={styles.logoutText}>Play</Text>
                                  </View>
                                </TouchableOpacity>
                            </View>
                          </Modal>
                    </View>
                  </View>
                )
              })
            }
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen", {
              selectedUser: user
            })}>
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
  detailsContainer: {
    height: 50,
    width: 100,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsText: {
    fontFamily: "sans-serif-light",
    fontSize: 15,
    color: "#fff",
  },
  font: {
    fontFamily: "sans-serif-light",
    fontSize:30,
    color:"#fff",
  },
  StageImg: {
    height: 250,
    width: 250,
  },
});

export default StageScreen;
