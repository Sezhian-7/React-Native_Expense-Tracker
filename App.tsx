import React from 'react';
import {
  Text,
  useColorScheme,
  View,
} from 'react-native';
import "./nativewind-output"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing  from './Pages/Landing';
import { Profile } from './Pages/Profile';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ title: '', headerShown: false }}

        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile screen', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;


