import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../firebase";



/* 
TODO: 
1) Style this ugly ass page - MEDIUM
*/

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("ProfileScreen");
        console.log("Transition");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.companyTitleContainer}>
        <Text style={styles.companyTitleText}>The ABC Company</Text>
      </View>
      <View style = {{
        flex:10,
      }}>
        <View style={styles.profileImgContainer}>
            {/* <Image
              source={require("../assets/company.png")}
              style={styles.profileImg}
            /> */}
        </View>
        <View style={styles.welcomeBackContainer}>
          <Text style={styles.welcomeBackText}>.</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputContainerBox}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </View>
        </View>
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  companyTitleContainer: {
    flex: 2,
    alignItems: "center",
  },
  companyTitleText: {
    marginTop:"6%",
    fontFamily: "sans-serif-light",
    fontSize: 25,
  },
  profileImgContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImg: {
    height: 130,
    width: 130,
    tintColor: "#000000",
  },
  welcomeBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeBackText: {
    color:"#FFFFFF"
  },
  inputContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainerBox: {
    width: 300,
  },
  input: {
    backgroundColor: "#ddd",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  forgetPasswordContainer: {
    flex: 1,
  },
  forgetPasswordText: {
    paddingLeft: "55%",
    color: "#50C878",
    marginTop: 20,
  },
  loginButtonContainer: {
    flex: 2,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#50C878",
    marginTop: 30,
    width: 300,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
});
