import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

import Login from './navigation/screens/Login';
import HomeScreen from './navigation/screens/Home';
import ProfileScreen from './navigation/screens/Profile';
import ContactScreen from './navigation/screens/Contact';
import List from './navigation/screens/List';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
})

function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={require('./assets/samsicon.png')}
    />
  );
}

function App() {
  return (
    <Login />
  );
};

export default function AppWired() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

//<ApolloProvider client={client}>
//     <NavigationContainer>
//        <Drawer.Navigator initialRouteName='Login'>
//          <Stack.Screen
//           name="Login"
//            component={Login}
//            options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
//          />
//          <Stack.Screen name="Home" component={HomeScreen} />
//          <Stack.Screen name="Profile" component={ProfileScreen} />
//          <Stack.Screen name="Contact" component={ContactScreen} />
//        </Drawer.Navigator>
//      </NavigationContainer>
//    </ApolloProvider>
