import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";

import db, { auth } from "../../firebase";

const CreateStageScreen = ({ route, navigation }) => {
  const [stageName, setStageName] = useState("");
  const [stageEXP, setStageEXP] = useState(0);
  const [image, setImage] = useState(null);
  const [imageURI, setImageURI] = useState("");
  const [imgFileStatus, setImgFileStatus] = useState("None");
  const [selectedValue, setSelectedValue] = useState("Easy");

  const [stageIndex, setStageIndex] = useState(0);

  const navigate = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  const pickImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result.uri);
    setImageURI(result.uri);
    setImgFileStatus("Successfully Uploaded!");
  };

  function getIndex() {
    var index = 0;
    db.collection(auth.currentUser.uid)
      .doc("StageList")
      .collection("Stage")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          index = index + 1;
          console.log(index);
          setStageIndex(index);
        });
      });
  }

  useEffect(() => {
    getIndex();
  }, []);

  const handleCreateStage = () => {
    db.collection(auth.currentUser.uid)
      .doc("StageList")
      .collection("Stage")
      .doc("Stage" + (stageIndex + 1))
      .set({
        difficulty: selectedValue,
        exp: stageEXP,
        id: stageIndex + 1,
        name: stageName,
        img: imageURI
      });
  };

  const goHome = () => {
    navigation.navigate("HomeScreen", {
      selectedStudent: route.params.selectedStudent,
    });
  };

  const validateInput = () => {
    //Check for the selectedValue Input
    if (!stageName.trim()) {
      alert("Please name your stage!");
      return;
    }
    if (!selectedValue.trim()) {
      alert("Please select Difficulty!");
      return;
    }
    //Check for the File Input
    if (stageEXP === 0) {
      alert("Please set stage experience");
      return;
    }

    if(imgFileStatus === "None") {
      alert("Please upload image");
      return;
    }

    //Checked Successfully
    console.log("Stage successfully uploaded");
    handleCreateStage();
    alert("Stage successfully uploaded \nRedirecting to homepage!");
    goHome();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View>
          <Text style={styles.headingText}>Stage Creation</Text>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}> Enter stage name: </Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Stage Name"
            value={stageName}
            onChangeText={(text) => setStageName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}> Enter stage difficulty: </Text>
          <View style={styles.pickerStyle}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 40, width: 400 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              placeholder="Easy"
            >
              <Picker.Item label="Easy" value="Easy" />
              <Picker.Item label="Medium" value="Medium" />
              <Picker.Item label="Hard" value="Hard" />
            </Picker>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}> Enter stage EXP: </Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Stage EXP"
            value={stageEXP}
            onChangeText={(text) => setStageEXP(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}> Uploaded image: </Text>
          <View style={styles.inputBox}>
            <Text>{imgFileStatus}</Text>
          </View>
          <Button title="Upload Image" onPress={pickImg} />
        </View>

        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <TouchableOpacity onPress={validateInput}>
          <View style={styles.submitContainer}>
            <Text style={styles.submitText}>Create stage!</Text>
          </View>
        </TouchableOpacity>
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
    backgroundColor: "#000",
  },
  topContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  middleContainer: {
    flex: 6,
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
    fontSize: 50,
    color: "#FFF",
    textDecorationLine: "underline",
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
  inputText: {
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
  pickerStyle: {
    borderWidth: 1,
    borderColor: "#A00",
  },
  inputContainer: {
    alignItems: "flex-start",
  },
  inputBox: {
    height: 40,
    width: 400,
    borderRadius: 1,
    borderColor: "#FFF",
    backgroundColor: "#FFF",
    justifyContent:"center",
    paddingLeft: 10,
  },
  submitContainer: {
    height: 50,
    width: 500,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: {
    fontFamily: "sans-serif-light",
    fontSize: 30,
    color: "#fff",
  },
});

export default CreateStageScreen;
