import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import moment from "moment";

import db, { auth } from "../../firebase";

const S1AttemptScreen = ({ route, navigation }) => {
  const user = route.params.selectedUser;
  const [currentDate, setCurrentDate] = useState("");

  function getCurrentTime() {
    var dateCurrentMoment = moment().format("DD/MM/YYYY hh:mm:ss A");
    setCurrentDate(dateCurrentMoment);
  }

  const [lastUpdatedDate, setLastUpdatedDate] = useState("");

  function getLastUpdatedTime() {
    db.collection(auth.currentUser.uid)
      .doc("Attempt")
      .get()
      .then((documentSnapshot) => documentSnapshot.data().last_updated_time)
      .then((last_updated_time) => {
        setLastUpdatedDate(last_updated_time);
      });
  }

  const [onLoadIDText_attempt1, setIDText_attempt1] = useState("");
  const [onLoadIDText_attempt2, setIDText_attempt2] = useState("");
  const [onLoadIDText_attempt3, setIDText_attempt3] = useState("");
  const [onLoadIDText_attempt4, setIDText_attempt4] = useState("");
  const [onLoadStageText_attempt1, setStageText_attempt1] = useState("");
  const [onLoadStageText_attempt2, setStageText_attempt2] = useState("");
  const [onLoadStageText_attempt3, setStageText_attempt3] = useState("");
  const [onLoadStageText_attempt4, setStageText_attempt4] = useState("");
  const [onLoadEvalText_attempt1, setEvalText_attempt1] = useState("");
  const [onLoadEvalText_attempt2, setEvalText_attempt2] = useState("");
  const [onLoadEvalText_attempt3, setEvalText_attempt3] = useState("");
  const [onLoadEvalText_attempt4, setEvalText_attempt4] = useState("");
  const [onLoadGradeText_attempt1, setGradeText_attempt1] = useState("");
  const [onLoadGradeText_attempt2, setGradeText_attempt2] = useState("");
  const [onLoadGradeText_attempt3, setGradeText_attempt3] = useState("");
  const [onLoadGradeText_attempt4, setGradeText_attempt4] = useState("");

  const getS1Attempt = () => {
    db.collection(auth.currentUser.uid)
      .doc("Attempt")
      .collection("Student1")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id == "Attempt1") {
            setIDText_attempt1(doc.data().attempt_id);
            setStageText_attempt1(doc.data().stage_name);
            setEvalText_attempt1(doc.data().evaluated);
            setGradeText_attempt1(doc.data().grade);
          }
          if (doc.id == "Attempt2") {
            setIDText_attempt2(doc.data().attempt_id);
            setStageText_attempt2(doc.data().stage_name);
            setEvalText_attempt2(doc.data().evaluated);
            setGradeText_attempt2(doc.data().grade);
          }
          if (doc.id == "Attempt3") {
            setIDText_attempt3(doc.data().attempt_id);
            setStageText_attempt3(doc.data().stage_name);
            setEvalText_attempt3(doc.data().evaluated);
            setGradeText_attempt3(doc.data().grade);
          }
          if (doc.id == "Attempt4") {
            setIDText_attempt4(doc.data().attempt_id);
            setStageText_attempt4(doc.data().stage_name);
            setEvalText_attempt4(doc.data().evaluated);
            setGradeText_attempt4(doc.data().grade);
          }
        });
      });
  };

  const onScreenLoad = () => {
    getS1Attempt();
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
        <Text style={styles.headingText}>Beth Smith</Text>
        <Text style={styles.timeText}>Current Time: {currentDate}</Text>
        <Text style={styles.timeText}>
          Last Updated Time: {lastUpdatedDate}
        </Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.attemptContainer}>
          <View style={styles.attemptHeaderContainer}>
            <View style={styles.idContainer}>
              <Text style={styles.font}>Attempt ID</Text>
            </View>
            <View style={styles.stageContainer}>
              <Text style={styles.font}>Stage</Text>
            </View>
            <View style={styles.evalContainer}>
              <Text style={styles.font}>Evaluation Status</Text>
            </View>
            <View style={styles.gradeContainer}>
              <Text style={styles.font}>Grade Achieved</Text>
            </View>
            <View style={styles.reviewContainer}>
              <Text style={styles.font}>Review</Text>
            </View>
          </View>
          <View style={styles.attemptRowContainer}>
            <View style={styles.idContainer}>
              <Text style={styles.font}>{onLoadIDText_attempt1}</Text>
            </View>
            <View style={styles.stageContainer}>
              <Text style={styles.font}>{onLoadStageText_attempt1}</Text>
            </View>
            <View style={styles.evalContainer}>
              <Text style={styles.font}>{onLoadEvalText_attempt1}</Text>
            </View>
            <View style={styles.gradeContainer}>
              <Text style={styles.font}>{onLoadGradeText_attempt1}</Text>
            </View>
            <View style={styles.reviewContainer}>
              <Text style={styles.font}>
                <button>Review</button>
              </Text>
            </View>
          </View>
          <View style={styles.attemptRowContainer}>
            <View style={styles.idContainer}>
              <Text style={styles.font}>{onLoadIDText_attempt2}</Text>
            </View>
            <View style={styles.stageContainer}>
              <Text style={styles.font}>{onLoadStageText_attempt2}</Text>
            </View>
            <View style={styles.evalContainer}>
              <Text style={styles.font}>{onLoadEvalText_attempt2}</Text>
            </View>
            <View style={styles.gradeContainer}>
              <Text style={styles.font}>{onLoadGradeText_attempt2}</Text>
            </View>
            <View style={styles.reviewContainer}>
              <Text style={styles.font}>
                <button>Review</button>
              </Text>
            </View>
          </View>
          <View style={styles.attemptRowContainer}>
            <View style={styles.idContainer}>
              <Text style={styles.font}>{onLoadIDText_attempt3}</Text>
            </View>
            <View style={styles.stageContainer}>
              <Text style={styles.font}>{onLoadStageText_attempt3}</Text>
            </View>
            <View style={styles.evalContainer}>
              <Text style={styles.font}>{onLoadEvalText_attempt3}</Text>
            </View>
            <View style={styles.gradeContainer}>
              <Text style={styles.font}>{onLoadGradeText_attempt3}</Text>
            </View>
            <View style={styles.reviewContainer}>
              <Text style={styles.font}>
                <button>Review</button>
              </Text>
            </View>
          </View>
          <View style={styles.attemptRowContainer}>
            <View style={styles.idContainer}>
              <Text style={styles.font}>{onLoadIDText_attempt4}</Text>
            </View>
            <View style={styles.stageContainer}>
              <Text style={styles.font}>{onLoadStageText_attempt4}</Text>
            </View>
            <View style={styles.evalContainer}>
              <Text style={styles.font}>{onLoadEvalText_attempt4}</Text>
            </View>
            <View style={styles.gradeContainer}>
              <Text style={styles.font}>{onLoadGradeText_attempt4}</Text>
            </View>
            <View style={styles.reviewContainer}>
              <Text style={styles.font}>
                <button>Review</button>
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProgressionScreen", {
              selectedStudent: user,
            })
          }
        >
          <View style={styles.returnContainer}>
            <Text style={styles.returnText}>Return to Progression Page</Text>
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
  attemptContainer: {
    width: "60%",
    height: "90%",
    borderWidth: 1,
    borderColor: "#FFF",
    justifyContent: "center",
    flexDirection: "column",
  },
  attemptHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#FFF",
    flex: 1,
  },
  attemptRowContainer: {
    width: "100",
    flexDirection: "row",
    flex: 2,
  },
  idContainer: {
    flex: 1.1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#777",
  },
  stageContainer: {
    flex: 4,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#777",
    paddingLeft: 10,
  },
  evalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#777",
    paddingLeft: 10,
  },
  gradeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#777",
    paddingLeft: 10,
  },
  reviewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#777",
    paddingLeft: 10,
  },
  returnContainer: {
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
  returnText: {
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

export default S1AttemptScreen;
