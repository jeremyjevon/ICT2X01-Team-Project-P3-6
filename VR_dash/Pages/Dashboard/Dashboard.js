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

const DashboardScreen = ({ navigation }) => {
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
      <Text>Dashboard Page</Text>
      <Button
        title="Back to Homepage"
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Button title="Logout" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DashboardScreen;
