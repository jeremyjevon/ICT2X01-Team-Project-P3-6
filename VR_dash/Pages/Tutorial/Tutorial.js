import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { auth } from "../../firebase";

/* 
TODO: 
Are we going to actually come up with a video?
-   Placeholder Image here works fine too
1) Style this ugly af page - MEDIUM
*/
const TutorialScreen = ({ route, navigation }) => {
  const navigate = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headingText}>Tutorial Page</Text>
      </View>
      <View style={styles.middleContainer}>
          <View style = {styles.embeddedVideoContainer}> <Text style = {{color:"#fff"}}>Embedded Video HERE</Text></View>
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
    flex: 4,
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
  },
  embeddedVideoContainer:{
    width:960,
    height:540,
    borderWidth:1,
    borderColor:"#FFF",
    justifyContent:"center",
    alignItems:"center",
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
});

export default TutorialScreen;
