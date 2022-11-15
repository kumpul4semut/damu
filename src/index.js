import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import Splash from './screens/splash';
import Alquran from './screens/alquran';
import Home from './screens/home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{title: 'Splash'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Alquran"
          component={Alquran}
          options={{title: 'Alquran'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
