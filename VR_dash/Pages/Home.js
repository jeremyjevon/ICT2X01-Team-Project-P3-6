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

import { auth } from "../firebase";

/* 
TODO: 
1) Get parameter from the previous page (Profile.js)
  Based on the profileName/studentName, retrieve records from firestore
  - EXP
  - All the stuff uh basically
  - So the home page has to be like dynamically coded, unless all 4 students we want to display the same thing just to satisfy the whitebox test
  - OR instead of the actual name, we can put stuf like [StudentName] as placeholders instead ? 
2) Style this ugly ass page - LOW
*/
const HomeScreen = ({ navigation }) => {
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
      <Text>Hello World!</Text>
      <Button title="Tutorial.js" onPress={() => navigation.navigate("TutorialScreen")}/>
      <Button title="Stage.js" onPress={() => navigation.navigate("StageScreen")}/>
      <Button title="Leaderboard.js" onPress={() => navigation.navigate("LeaderboardScreen")}/>
      <Button title="Dashboard.js" onPress={() => navigation.navigate("DashboardScreen")}/>
      <Button title="Back to profile.js" onPress={() => navigation.navigate("ProfileScreen")}/>
      <Button title="ALERT" onPress = {() => alert("Pressed!")}/>
      <Button title="Logout" onPress={handleSignOut}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default HomeScreen;
