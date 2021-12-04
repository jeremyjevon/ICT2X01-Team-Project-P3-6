import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../firebase";

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

  const forgetPassword = () => {
    alert("Please contact the system administrator to reset your password!");
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/vroom_vroom_logo.png")}
          />
        </View>
        <Text style={styles.headingText}>Vroom Vroom</Text>
        <Text style={styles.subHeadingText}>
          A learn-to-code system designed for primary school students by not
          primary school students.
        </Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Email Address:</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.inputText}>Password:</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity onPress={handleLogin}>
            <View style={styles.loginButton}>
              <Text style={styles.loginText}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={forgetPassword}>
            <View style={styles.forgetPasswordButton}>
              <Text style={styles.forgetPasswordText}>Forget Password?</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
      <TouchableOpacity onPress={handleSignUp}>
            <View style={styles.registerButton}>
              <Text style={styles.registerText}>Register</Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  topContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  middleContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#222",
  },
  bottomContainer: {
    flex: 2,
    alignItems: "center",
  },
  headingText: {
    fontFamily: "sans-serif-light",
    fontSize: 50,
    color: "#FFF",
  },
  subHeadingText: {
    fontFamily: "sans-serif-light",
    fontSize: 20,
    fontStyle: "italic",
    color: "#FFF",
  },
  logoContainer: {
    height: 180,
    width: 180,
    borderRadius: 90,
  },
  logo: {
    height: 180,
    width: 180,
    borderRadius: 90,
  },
  inputContainer: {
    justifyContent: "center",
    flexDirection: "column",
  },
  inputBox: {
    height: 50,
    width: 500,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 50,
    borderWidth: 1,
    borderColor: "#FFF",
    backgroundColor: "#FFF",
  },
  inputText: {
    fontFamily: "sans-serif-light",
    marginBottom:5,
    fontSize: 15,
    color: "#FFF",
  },
  loginButton: {
    width: 500,
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFF",
    backgroundColor: "#777",
    justifyContent: "center",
    alignItems: "center",
  },
  forgetPasswordButton: {
    marginTop: 20,
    width: 500,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFF",
    backgroundColor:"#000",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontFamily: "sans-serif-light",
    fontSize: 30,
    color: "#FFF",
  },
  forgetPasswordText: {
    fontFamily: "sans-serif-light",
    fontSize: 20,
    color: "#DDD",
  },
  registerButton: {
    width: 200,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    fontFamily: "sans-serif-light",
    fontSize: 30,
    color: "#FFF",
  },
});
