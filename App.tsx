import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import "./nativewind-output"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './Pages/Landing';
import Profile from './Pages/Profile';
import TabChange from './Components/TabChange';

const Stack = createNativeStackNavigator();


const LandingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen options={{
        headerShown: false,
        presentation: 'modal',
        animationTypeForReplace: 'pop',
        animation: 'fade'
      }} name='Landing' component={Landing} />
    </Stack.Navigator>
  )
}
const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen options={{
        headerShown: false,
        presentation: 'modal',
        animationTypeForReplace: 'pop',
        animation: 'fade'
      }} name='Profile' component={Profile} />
    </Stack.Navigator>
  )
}
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Landing"
    //       component={Landing}
    //       options={{ title: '', headerShown: false }}

    //     />
    //     <Stack.Screen
    //       name="Profile"
    //       component={Profile}
    //       options={{ title: 'Profile screen', headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <TabChange      
      landing={LandingStack}
      profile={ProfileStack}
      />
    </NavigationContainer>

  );
}


export default App;


