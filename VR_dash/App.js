import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'react-native';
import {auth} from './firebase.js';

// Page imports
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Tutorial from "./Pages/Tutorial/Tutorial";
import Stage from "./Pages/Stage/Stage";
import CreateStage from "./Pages/Stage/CreateStage";
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import Progression from "./Pages/Progression/Progression";
import ManageProfile from "./Pages/ManageProfile/ManageProfile";
import AuthenticateSwitchUser from "./Pages/AuthenticateSwitchUser";
import S1Attempt from "./Pages/Attempt/S1Attempt";
import S2Attempt from "./Pages/Attempt/S2Attempt";
import S3Attempt from "./Pages/Attempt/S3Attempt";
import S4Attempt from "./Pages/Attempt/S4Attempt";

const Stack =  createStackNavigator();

//Need to nest the tab inside a stack navigatior
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle = "dark-content" hidden = {true}/>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="LoginScreen" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="ProfileScreen" component={Profile} options={{headerShown:false}}/>
        <Stack.Screen name="TutorialScreen" component={Tutorial} options={{headerShown:false}}/>
        <Stack.Screen name="StageScreen" component={Stage} options={{headerShown:false}}/>
        <Stack.Screen name="CreateStageScreen" component={CreateStage} options={{headerShown:false}}/>
        <Stack.Screen name="LeaderboardScreen" component={Leaderboard} options={{headerShown:false}}/>
        <Stack.Screen name="ProgressionScreen" component={Progression} options={{headerShown:false}}/>
        <Stack.Screen name="ManageProfileScreen" component={ManageProfile} options={{headerShown:false}}/>
        <Stack.Screen name="AuthenticateSwitchUserScreen" component={AuthenticateSwitchUser} options={{headerShown:false}}/>
        <Stack.Screen name="S1AttemptScreen" component={S1Attempt} options={{headerShown:false}}/>
        <Stack.Screen name="S2AttemptScreen" component={S2Attempt} options={{headerShown:false}}/>
        <Stack.Screen name="S3AttemptScreen" component={S3Attempt} options={{headerShown:false}}/>
        <Stack.Screen name="S4AttemptScreen" component={S4Attempt} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
