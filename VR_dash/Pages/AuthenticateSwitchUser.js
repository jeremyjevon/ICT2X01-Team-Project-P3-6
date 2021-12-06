import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import db, { auth } from "../firebase";


const AuthenticateSwitchUserScreen = ({ route }) => {
    const navigation = useNavigation();  
    const user = route.params.selectedUser;
     
    const [currentPin, setCurrentPin] = useState("");
    const [inCurrentPin, setInCurrentPin] = useState("");

    const getCurrentPin = () => {
        db.collection(auth.currentUser.uid)
        .doc(user)
        .get()
        .then((querySnapshot) => {
            setCurrentPin(querySnapshot.data().pin)
        });
    };

    useEffect(() => {
        getCurrentPin();
    }, []); 

    const handleChangeUser = () => {
        
        // validate pin
        if (currentPin == inCurrentPin) {
            navigation.navigate("HomeScreen", {
                selectedUser: user});
        }
        else if (inCurrentPin == "") { 
          alert("Blank input. Please enter a pin.");
        }
        else { 
          alert("Incorrect pin. Please enter a valid pin.");
        }
    };  

     return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
       
        <Text style={styles.headingText}>Switch User</Text>

        <Text style={styles.subHeadingText}>
          {user}
        </Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Enter Pin: </Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Pin"
            value={inCurrentPin}
            onChangeText={(text) => setInCurrentPin(text)}
            secureTextEntry
          />

          
          <TouchableOpacity onPress={handleChangeUser}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Enter</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen", {
              selectedUser: route.params.selectedUser,
            })}
          >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Back to Switch User</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
};

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
    flex: 1,
    alignItems: "center",
  },

  headingText: {
    fontFamily: "sans-serif-light",
    fontSize: 30,
    color: "#FFF",
  },
  subHeadingText: {
    fontFamily: "sans-serif-light",
    fontSize: 20,
    color: "#FFF",
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
  button: {
    width: 500,
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFF",
    backgroundColor: "#777",
    justifyContent: "center",
    alignItems: "center",
    margin:25,
  },
  
  buttonText: {
    fontFamily: "sans-serif-light",
    fontSize: 30,
    color: "#FFF",
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

 
});

export default AuthenticateSwitchUserScreen;