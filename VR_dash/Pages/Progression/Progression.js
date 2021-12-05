import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import moment from "moment";

import db, { auth } from "../../firebase";

const ProgressionScreen = ({ route, navigation }) => {
  const [currentDate, setCurrentDate] = useState("");

  function getCurrentTime() {
    var dateCurrentMoment = moment().format("DD/MM/YYYY hh:mm:ss a");
    setCurrentDate(dateCurrentMoment);
  }

  const [lastUpdatedDate, setLastUpdatedDate] = useState("");

  function getLastUpdatedTime() {
    db.collection(auth.currentUser.uid)
      .doc("Progression")
      .get()
      .then((documentSnapshot) => documentSnapshot.data().last_updated_time)
      .then((last_updated_time) => {
        setLastUpdatedDate(last_updated_time);
      });
  }

  const [onLoadIDText_student1, setIDText_student1] = useState("");
  const [onLoadIDText_student2, setIDText_student2] = useState("");
  const [onLoadIDText_student3, setIDText_student3] = useState("");
  const [onLoadIDText_student4, setIDText_student4] = useState("");
  const [onLoadfnameText_student1, setfnameText_student1] = useState("");
  const [onLoadfnameText_student2, setfnameText_student2] = useState("");
  const [onLoadfnameText_student3, setfnameText_student3] = useState("");
  const [onLoadfnameText_student4, setfnameText_student4] = useState("");
  const [onLoadlnameText_student1, setlnameText_student1] = useState("");
  const [onLoadlnameText_student2, setlnameText_student2] = useState("");
  const [onLoadlnameText_student3, setlnameText_student3] = useState("");
  const [onLoadlnameText_student4, setlnameText_student4] = useState("");
  const [onLoadGameText_student1, setGameText_student1] = useState("");
  const [onLoadGameText_student2, setGameText_student2] = useState("");
  const [onLoadGameText_student3, setGameText_student3] = useState("");
  const [onLoadGameText_student4, setGameText_student4] = useState("");
  const [onLoadPendingText_student1, setPendingText_student1] = useState("");
  const [onLoadPendingText_student2, setPendingText_student2] = useState("");
  const [onLoadPendingText_student3, setPendingText_student3] = useState("");
  const [onLoadPendingText_student4, setPendingText_student4] = useState("");

  const getProgression = () => {
    db.collection(auth.currentUser.uid)
      .doc("Progression")
      .collection("Students")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id == "Student1") {
            setIDText_student1(doc.data().student_id);
            setfnameText_student1(doc.data().fname);
            setlnameText_student1(doc.data().lname);
            setGameText_student1(doc.data().game_completed);
            setPendingText_student1(doc.data().grade_pending);
          }
          if (doc.id == "Student2") {
            setIDText_student2(doc.data().student_id);
            setfnameText_student2(doc.data().fname);
            setlnameText_student2(doc.data().lname);
            setGameText_student2(doc.data().game_completed);
            setPendingText_student2(doc.data().grade_pending);
          }
          if (doc.id == "Student3") {
            setIDText_student3(doc.data().student_id);
            setfnameText_student3(doc.data().fname);
            setlnameText_student3(doc.data().lname);
            setGameText_student3(doc.data().game_completed);
            setPendingText_student3(doc.data().grade_pending);
          }
          if (doc.id == "Student4") {
            setIDText_student4(doc.data().student_id);
            setfnameText_student4(doc.data().fname);
            setlnameText_student4(doc.data().lname);
            setGameText_student4(doc.data().game_completed);
            setPendingText_student4(doc.data().grade_pending);
          }
        });
      });
  };

  const onScreenLoad = () => {
    getProgression();
    getCurrentTime();
    getLastUpdatedTime();
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

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headingText}>Progression</Text>
        <Text style={styles.timeText}>Current Time: {currentDate}</Text>
        <Text style={styles.timeText}>
          Last Updated Time: {lastUpdatedDate}
        </Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.progressionContainer}>
          <View style={styles.progressionHeaderContainer}>
            <View style={styles.idContainer}>
              <Text style={styles.font}>ID</Text>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.font}>Name</Text>
            </View>
            <View style={styles.gameContainer}>
              <Text style={styles.font}>Games Completed</Text>
            </View>
            <View style={styles.pendingContainer}>
              <Text style={styles.font}>Grade Pending</Text>
            </View>
            <View style={styles.attemptContainer}>
              <Text style={styles.font}>Past Attempts</Text>
            </View>
          </View>
          <View style={styles.progressionRowContainer}>
            <View style={styles.idContainer}>
              <Text style={styles.font}>{onLoadIDText_student1}</Text>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.font}>
                {onLoadfnameText_student1} {onLoadlnameText_student1}
              </Text>
            </View>
            <View style={styles.gameContainer}>
              <Text style={styles.font}>{onLoadGameText_student1}</Text>
            </View>
            <View style={styles.gameContainer}>
              <Text style={styles.font}>{onLoadPendingText_student1}</Text>
            </View>
            <View style={styles.attemptContainer}>
              <Text style={styles.font}>
                <button>View</button>
              </Text>
            </View>
          </View>
          <View style={styles.progressionRowContainer}>
            <View style={styles.idContainer}>
              <Text style={styles.font}>{onLoadIDText_student2}</Text>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.font}>
                {onLoadfnameText_student2} {onLoadlnameText_student2}
              </Text>
            </View>
            <View style={styles.gameContainer}>
              <Text style={styles.font}>{onLoadGameText_student2}</Text>
            </View>
            <View style={styles.gameContainer}>
              <Text style={styles.font}>{onLoadPendingText_student2}</Text>
            </View>
            <View style={styles.attemptContainer}>
              <Text style={styles.font}>
                <button>View</button>
              </Text>
            </View>
          </View>
          <View style={styles.progressionRowContainer}>
            <View style={styles.idContainer}>
              <Text style={styles.font}>{onLoadIDText_student3}</Text>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.font}>
                {onLoadfnameText_student3} {onLoadlnameText_student3}
              </Text>
            </View>
            <View style={styles.gameContainer}>
              <Text style={styles.font}>{onLoadGameText_student3}</Text>
            </View>
            <View style={styles.gameContainer}>
              <Text style={styles.font}>{onLoadPendingText_student3}</Text>
            </View>
            <View style={styles.attemptContainer}>
              <Text style={styles.font}>
                <button>View</button>
              </Text>
            </View>
          </View>
          <View style={styles.progressionRowContainer}>
            <View style={styles.idContainer}>
              <Text style={styles.font}>{onLoadIDText_student4}</Text>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.font}>
                {onLoadfnameText_student4} {onLoadlnameText_student4}
              </Text>
            </View>
            <View style={styles.gameContainer}>
              <Text style={styles.font}>{onLoadGameText_student4}</Text>
            </View>
            <View style={styles.gameContainer}>
              <Text style={styles.font}>{onLoadPendingText_student4}</Text>
            </View>
            <View style={styles.attemptContainer}>
              <Text style={styles.font}>
                <button>View</button>
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("HomeScreen", {
              selectedStudent: route.params.selectedStudent,
            })
          }
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
    textDecorationLine: "underline",
  },
  timeText: {
    fontFamily: "sans-serif-light",
    fontSize: 20,
    color: "#FFF",
  },
  progressionContainer: {
    width: "60%",
    height: "90%",
    borderWidth: 1,
    borderColor: "#FFF",
    justifyContent: "center",
    flexDirection: "column",
  },
  progressionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#FFF",
    flex: 1,
  },
  progressionRowContainer: {
    width: "100",
    flexDirection: "row",
    flex: 2,
  },
  idContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#777",
  },
  nameContainer: {
    flex: 4,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#777",
    paddingLeft: 10,
  },
  gameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#777",
    paddingLeft: 10,
  },
  pendingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#777",
    paddingLeft: 10,
  },
  attemptContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#777",
    paddingLeft: 10,
  },
  homeContainer: {
    height: 50,
    width: 500,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    backgroundColor: "#444",
    borderRadius: 10,
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
    fontSize: 30,
    color: "#fff",
  },
});

export default ProgressionScreen;
