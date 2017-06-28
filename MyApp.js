import React from 'react';

import { Button, ScrollView, View, Platform, StyleSheet, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfilScreen from './screens/ProfilScreen';



/*
export default class MyApp extends React.Component {
  render() {
      return (
        <View style={styles.container}>
            <Text>MyApp</Text>
        </View>
      );
  }
}
*/
const MyPeopleScreen = ({ navigation }) => (
    <ScrollView style={styles.container2}>
        <Text>People Tab </Text>
    </ScrollView>          
);

MyPeopleScreen.navigationOptions = {
  tabBarLabel: 'People',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-people' : 'ios-people-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MyChatScreen = ({ navigation }) => (
    <ScrollView style={styles.container2}>
        <Text>Chat Tab</Text>
    </ScrollView>            
);

MyChatScreen.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MySettingsScreen = ({ navigation }) => (
    <ScrollView style={styles.container2}>
        <Text>Settings Tab</Text>
    </ScrollView>              
);

MySettingsScreen.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-settings' : 'ios-settings-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const MyApp = TabNavigator(
  {
    Home: {
      screen: HomeScreen, 
      path: '', 
    },
    People: {
      screen: ProfilScreen,
      path: 'cart',
    },
    Chat: {
      screen: MyChatScreen,
      path: 'chat',
    },
    Settings: { 
      screen: MySettingsScreen,
      path: 'settings',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },  
});

export default MyApp;