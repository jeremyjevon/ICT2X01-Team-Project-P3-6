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

const DashboardScreen = ({ route, navigation }) => {
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
      <View style={styles.firstRowContainer}>
        <Text style={styles.headingText}>Dashboard</Text>
      </View>

      <View style={styles.secondRowContainer}>
        <View style={styles.dashboardContainer}>
          <Text style={styles.font}>Game Screen</Text>
        </View>
      </View>

      <View style={styles.thirdRowContainer}>
        <View style={styles.analyticsContainer}>
          <View style={styles.moduleContainer}>
            <View style={styles.rangeContainer}>
              <Text style={styles.font}>Range Module</Text>
            </View>
            <View style={styles.lineContainer}>
              <Text style={styles.font}>IR Line Module</Text>
            </View>
            <View style={styles.speedContainer}>
              <Text style={styles.font}>Speed Sensor</Text>
            </View>
            <View style={styles.wifiContainer}>
              <Text style={styles.font}>WiFi Transceiver</Text>
            </View>
          </View>
          <View style={styles.statisticsContainer}>
            <View style={styles.rangeContainer}>
              <Text style={styles.font}>isActive</Text>
            </View>
            <View style={styles.lineContainer}>
              <Text style={styles.font}>isActive</Text>
            </View>
            <View style={styles.speedContainer}>
              <Text style={styles.font}>isActive</Text>
            </View>
            <View style={styles.wifiContainer}>
              <Text style={styles.font}>isActive</Text>
            </View>
          </View>
          <View style={styles.statisticsContainer}>
            <View style={styles.rangeContainer}>
              <Text style={styles.font}>stat 2</Text>
            </View>
            <View style={styles.lineContainer}>
              <Text style={styles.font}>stat 2</Text>
            </View>
            <View style={styles.speedContainer}>
              <Text style={styles.font}>stat 2</Text>
            </View>
            <View style={styles.wifiContainer}>
              <Text style={styles.font}>stat 2</Text>
            </View>
          </View>
          <View style={styles.statisticsContainer}>
            <View style={styles.rangeContainer}>
              <Text style={styles.font}>stat 3</Text>
            </View>
            <View style={styles.lineContainer}>
              <Text style={styles.font}>stat 3</Text>
            </View>
            <View style={styles.speedContainer}>
              <Text style={styles.font}>stat 3</Text>
            </View>
            <View style={styles.wifiContainer}>
              <Text style={styles.font}>stat 3</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.fourthRowContainer}>
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
  firstRowContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  secondRowContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  thirdRowContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  fourthRowContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headingText: {
    fontFamily: "sans-serif-light",
    fontSize: 50,
    color: "#FFF",
    textDecorationLine: "underline",
  },
  dashboardContainer: {
    width: "100%",
    height: "90%",
    borderWidth: 1,
    borderColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  analyticsContainer: {
    width: "50%",
    height: "90%",
    borderWidth: 1,
    borderColor: "#FFF",
    flexDirection: "column",
  },
  moduleContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#FFF",
    flex: 1,
  },
  statisticsContainer: {
    width: "100",
    flexDirection: "row",
    flex: 1,
  },
  rangeContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#777",
  },
  lineContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#777",
  },
  speedContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#777",
  },
  wifiContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#777",
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

export default DashboardScreen;
