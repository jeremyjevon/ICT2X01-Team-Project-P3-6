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
Retrieve values and put them into the following variables
  {firstPositionName}, {firstPositionEXP};
  {secondPositionName}, {secondPositionEXP};
  {thirdPositionName}, {thirdPositionEXP};
  {fourthPositionName}, {fourthPositionEXP};
*/
const LeaderboardScreen = ({  route, navigation }) => {
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
        <Text style={styles.headingText}>Leaderboard</Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.leaderboardContainer}>
          <View style={styles.leaderboardHeaderContainer}>
            <View style={styles.rankContainer}><Text style={styles.font}>Rank</Text></View>
            <View style={styles.nameContainer}><Text style={styles.font}>Name</Text></View>
            <View style={styles.expContainer}><Text style={styles.font}>Exp</Text></View>
          </View>
          <View style={styles.leaderboardRankContainer}>
            <View style={styles.rankContainer}><Text style={styles.font}>1</Text></View>
            <View style={styles.nameContainer}><Text style={styles.font}>Name</Text></View>
            <View style={styles.expContainer}><Text style={styles.font}>Exp</Text></View>
          </View>
          <View style={styles.leaderboardRankContainer}>
            <View style={styles.rankContainer}><Text style={styles.font}>2</Text></View>
            <View style={styles.nameContainer}><Text style={styles.font}>Name</Text></View>
            <View style={styles.expContainer}><Text style={styles.font}>Exp</Text></View>
          </View>
          <View style={styles.leaderboardRankContainer}>
            <View style={styles.rankContainer}><Text style={styles.font}>3</Text></View>
            <View style={styles.nameContainer}><Text style={styles.font}>Name</Text></View>
            <View style={styles.expContainer}><Text style={styles.font}>Exp</Text></View>
          </View>
          <View style={styles.leaderboardRankContainer}>
            <View style={styles.rankContainer}><Text style={styles.font}>4</Text></View>
            <View style={styles.nameContainer}><Text style={styles.font}>Name</Text></View>
            <View style={styles.expContainer}><Text style={styles.font}>Exp</Text></View>
          </View>
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
  leaderboardContainer: {
    width: "50%",
    height: "90%",
    borderWidth: 1,
    borderColor: "#FFF",
    justifyContent: "center",
    flexDirection: "column",
  },
  leaderboardHeaderContainer: {
    flexDirection:"row",
    justifyContent:"space-between",
    borderWidth: 1,
    borderColor: "#FFF",
    flex: 1,
  },
  leaderboardRankContainer: {
    width: "100",
    flexDirection:"row",
    flex: 2,
  },
  rankContainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#777",
  },
  nameContainer: {
    flex:4,
    justifyContent:"center",
    borderWidth:1,
    borderColor:"#777",
    paddingLeft:10,
  },
  expContainer: {
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
  font: {
    fontFamily: "sans-serif-light",
    fontSize:30,
    color:"#fff",
  },
});

export default LeaderboardScreen;
