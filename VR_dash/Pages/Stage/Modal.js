import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    //padding: '50px',
    zIndex: 1000
  }

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }
export default function Modal({open, children, onRequestClose}){
    if(!open) return null
    return(
        <>
        <div style ={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
            <TouchableOpacity>
            <View style={styles.logoutContainer}>
                <Text style={styles.logoutText} onClick={onRequestClose}>Close</Text>
            </View>
            </TouchableOpacity> 
            {children}
        </div>
        </>
    )
}
const styles = StyleSheet.create({
logoutContainer: {
    height: 50,
    width: 500,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    },
logoutText: {
    fontFamily: "sans-serif-light",
    fontSize: 30,
    color: "#fff",
  },
})