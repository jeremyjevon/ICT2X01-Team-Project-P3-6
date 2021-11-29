import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import moment from "moment";


import db, { auth } from "../../firebase";

const LeaderboardScreen = ({ route, navigation }) => {

  const [currentDate, setCurrentDate] = useState("");

  function getCurrentTime() {
    var dateCurrentMoment = moment().format("DD/MM/YYYY hh:mm:ss a");
    setCurrentDate(dateCurrentMoment);
  };

  const [lastUpdatedDate, setLastUpdatedDate] = useState("");

  function getLastUpdatedTime() {
    console.log(">>>");
    var dateMoment;
    db.collection(auth.currentUser.uid)
      .doc("Leaderboard")
      .get()
      .then((documentSnapshot) => documentSnapshot.data().last_updated_time)
      .then((last_updated_time) => {
        setLastUpdatedDate(last_updated_time);
      })
  };

  const [onLoadfnameText_firstPlace, setfnameText_firstPlace] = useState("");
  const [onLoadfnameText_secondPlace, setfnameText_secondPlace] = useState("");
  const [onLoadfnameText_thirdPlace, setfnameText_thirdPlace] = useState("");
  const [onLoadfnameText_fourthPlace, setfnameText_fourthPlace] = useState("");
  const [onLoadlnameText_firstPlace, setlnameText_firstPlace] = useState("");
  const [onLoadlnameText_secondPlace, setlnameText_secondPlace] = useState("");
  const [onLoadlnameText_thirdPlace, setlnameText_thirdPlace] = useState("");
  const [onLoadlnameText_fourthPlace, setlnameText_fourthPlace] = useState("");
  const [onLoadEXPText_firstPlace, setEXPText_firstPlace] = useState("");
  const [onLoadEXPText_secondPlace, setEXPText_secondPlace] = useState("");
  const [onLoadEXPText_thirdPlace, setEXPText_thirdPlace] = useState("");
  const [onLoadEXPText_fourthPlace, setEXPText_fourthPlace] = useState("");

  const getLeaderboard = () => {
    db.collection(auth.currentUser.uid)
      .doc("Leaderboard")
      .collection("Ranking")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.id == "first_place") {
              setfnameText_firstPlace(doc.data().fname)
              setlnameText_firstPlace(doc.data().lname)
              setEXPText_firstPlace(doc.data().exp)
            }
            if (doc.id == "second_place") {
              setfnameText_secondPlace(doc.data().fname)
              setlnameText_secondPlace(doc.data().lname)
              setEXPText_secondPlace(doc.data().exp)
            }
            if (doc.id == "third_place") {
              setfnameText_thirdPlace(doc.data().fname)
              setlnameText_thirdPlace(doc.data().lname)
              setEXPText_thirdPlace(doc.data().exp)
            }
            if (doc.id == "fourth_place") {
              setfnameText_fourthPlace(doc.data().fname)
              setlnameText_fourthPlace(doc.data().lname)
              setEXPText_fourthPlace(doc.data().exp)
            }
        });
    })
  };
  

  const onScreenLoad = () => {
    getLeaderboard();
    getCurrentTime();
    getLastUpdatedTime();
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
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headingText}>Leaderboard</Text>
        <Text style={styles.timeText}>Current Time: {currentDate}</Text>
        <Text style={styles.timeText}>Last Updated Time: {lastUpdatedDate}</Text>
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
            <View style={styles.nameContainer}><Text style={styles.font}>{onLoadfnameText_firstPlace} {onLoadlnameText_firstPlace}</Text></View>
            <View style={styles.expContainer}><Text style={styles.font}>{onLoadEXPText_firstPlace}</Text></View>
          </View>
          <View style={styles.leaderboardRankContainer}>
            <View style={styles.rankContainer}><Text style={styles.font}>2</Text></View>
            <View style={styles.nameContainer}><Text style={styles.font}>{onLoadfnameText_secondPlace} {onLoadlnameText_secondPlace}</Text></View>
            <View style={styles.expContainer}><Text style={styles.font}>{onLoadEXPText_secondPlace}</Text></View>
          </View>
          <View style={styles.leaderboardRankContainer}>
            <View style={styles.rankContainer}><Text style={styles.font}>3</Text></View>
            <View style={styles.nameContainer}><Text style={styles.font}>{onLoadfnameText_thirdPlace} {onLoadlnameText_thirdPlace}</Text></View>
            <View style={styles.expContainer}><Text style={styles.font}>{onLoadEXPText_thirdPlace}</Text></View>
          </View>
          <View style={styles.leaderboardRankContainer}>
            <View style={styles.rankContainer}><Text style={styles.font}>4</Text></View>
            <View style={styles.nameContainer}><Text style={styles.font}>{onLoadfnameText_fourthPlace} {onLoadlnameText_fourthPlace}</Text></View>
            <View style={styles.expContainer}><Text style={styles.font}>{onLoadEXPText_fourthPlace}</Text></View>
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
  timeText:{
    fontFamily: "sans-serif-light",
    fontSize: 20,
    color: "#FFF",
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
