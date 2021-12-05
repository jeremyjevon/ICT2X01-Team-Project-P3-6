import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

import { auth } from "../firebase";

/* 
TODO: 
2) Style this ugly ass page - LOW
*/
const HomeScreen = ({ route, navigation }) => {
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
        <Text style={styles.headingText}>
          Hello {route.params.selectedStudent} !
        </Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.buttonImagesContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("TutorialScreen", {
              selectedStudent: route.params.selectedStudent,
            })}
          >
            <Image
              style={styles.buttonImages}
              source={require("../assets/HomepageImg/manual.png")}
            />
            <View style={styles.buttonTextContainer}><Text style={styles.buttonText}>Tutorial</Text></View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonImagesContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("StageScreen", {
              selectedStudent: route.params.selectedStudent,
            })}
          >
            <Image
              style={styles.buttonImages}
              source={require("../assets/HomepageImg/level-up.png")}
            />
            <View style={styles.buttonTextContainer}><Text style={styles.buttonText}>Stages</Text></View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonImagesContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("LeaderboardScreen", {
              selectedStudent: route.params.selectedStudent,
            })}
          >
            <Image
              style={styles.buttonImages}
              source={require("../assets/HomepageImg/leaderboard.png")}
            />
            <View style={styles.buttonTextContainer}><Text style={styles.buttonText}>Leaderboard</Text></View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonImagesContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProgressionScreen", {
              selectedStudent: route.params.selectedStudent,
            })}
          >
            <Image
              style={styles.buttonImages}
              source={require("../assets/HomepageImg/goal.png")}
            />
            <View style={styles.buttonTextContainer}><Text style={styles.buttonText}>Progression</Text></View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonImagesContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("DashboardScreen", {
              selectedStudent: route.params.selectedStudent,
            })}
          >
            <Image
              style={styles.buttonImages}
              source={require("../assets/HomepageImg/dumbbell.png")}
            />
            <View style={styles.buttonTextContainer}><Text style={styles.buttonText}>Dashboard</Text></View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
       <TouchableOpacity onPress={() => Linking.openURL('http://localhost:8888')}>
          <View style={styles.logoutContainer}>
            <Text style={styles.logoutText}>Start Game</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <View style={styles.logoutContainer}>
            <Text style={styles.logoutText}>Switch User</Text>
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
    flex: 2,
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
  buttonImagesContainer:{
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    borderWidth:1,
    borderColor:"#FFF",
  },
  buttonImages: {
    height: 250,
    width: 250,
    tintColor:"#FFF",
  },
  buttonText:{
    fontFamily: "sans-serif-light",
    fontSize: 30,
    color: "#FFF",
  },
  buttonTextContainer:{
    marginTop:10,
    alignItems: "center",
  },
});

export default HomeScreen;
