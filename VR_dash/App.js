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
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageProfile from "./Pages/ManageProfile/ManageProfile";


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
        <Stack.Screen name="LeaderboardScreen" component={Leaderboard} options={{headerShown:false}}/>
        <Stack.Screen name="DashboardScreen" component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name="ManageProfileScreen" component={ManageProfile} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


export default App;

