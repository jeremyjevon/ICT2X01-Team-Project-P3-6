import React, { useState } from 'react'
import Modal from './Modal'

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}
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

const CreateStageScreen = ({route, navigation }) => {
  const navigate = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };
  const [isOpen, setIsOpen] = useState(false)
  return (
    <View style={styles.container}>
      <h1>Create Stage</h1>
    
    <div style={BUTTON_WRAPPER_STYLES}>
      <button onClick={() => setIsOpen(true)}>Open Model</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Model
        </Modal>
    </div>

    <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CreateStageScreen;