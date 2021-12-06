import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { auth } from "../firebase";

/* 
TODO: 
3) Style this ugly ass page - LOW
*/
const ProfileScreen = ({ navigation }) => {
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
        <Text style={styles.headingText}>Who's playing?</Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.profileImgContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("AuthenticateSwitchUserScreen", {
              selectedUser: "RickSanchez",
            })}>
            <Image
              style={styles.profileImg}
              source={require("../assets/ProfileImg/rick.png")}
            />
            <View style={styles.profileNameContainer}>
              <Text style={styles.profileName}>Rick Sanchez</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.profileImgContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("AuthenticateSwitchUserScreen", {
              selectedUser: "MortySmith",
            })}>
            <Image
              style={styles.profileImg}
              source={require("../assets/ProfileImg/morty.png")}
            />
            <View style={styles.profileNameContainer}>
              <Text style={styles.profileName}>Morty Smith</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.profileImgContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("AuthenticateSwitchUserScreen", {
              selectedUser: "Proctor",
            })}>
            <Image
              style={styles.profileImg}
              source={require("../assets/ProfileImg/cry.jpg")}
            />
            <View style={styles.profileNameContainer}>
              <Text style={styles.profileName}>Proctor</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.profileImgContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("AuthenticateSwitchUserScreen", {
              selectedUser: "SummerSmith",

            })}>
            <Image
              style={styles.profileImg}
              source={require("../assets/ProfileImg/summer.png")}
            />
            <View style={styles.profileNameContainer}>
              <Text style={styles.profileName}>Summer Smith</Text>
            </View>
          </TouchableOpacity>
        </View>
    
        <View style={styles.profileImgContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("AuthenticateSwitchUserScreen", {
              selectedUser: "BethSmith",
            })}>
            <Image
              style={styles.profileImg}
              source={require("../assets/ProfileImg/beth.png")}
            />
            <View style={styles.profileNameContainer}>
              <Text style={styles.profileName}>Beth Smith</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
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
  profileImgContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
  },
  profileImg: {
    height: 250,
    width: 250,
  },
  profileName: {
    fontFamily: "sans-serif-light",
    fontSize: 30,
    color: "#FFF",
  },
  profileNameContainer: {
    alignItems: "center",
  },
  logoutContainer: {
    height: 50,
    width: 500,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutText: {
    fontFamily: "sans-serif-light",
    fontSize:30,
    color:"#fff",
      
  },
});

export default ProfileScreen;
