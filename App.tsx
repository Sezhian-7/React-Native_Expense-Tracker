import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import "./nativewind-output"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './Pages/Landing';
import AddExpenses from './Pages/AddExpenses';
import TabChange from './Components/TabChange';
import { Statistics } from './Pages/Statistics';
import ProfileSetting from './Pages/ProfileSetting';
import Transaction from './Pages/Transaction ';

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
const AddExpensesStack = () => {
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
      }} name='Profile' component={AddExpenses} />
    </Stack.Navigator>
  )
}

const StatisticsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Statistics"
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
      }} name='Statistics' component={Statistics} />
    </Stack.Navigator>
  )
}
const ProfileSettingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileSetting"
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
      }} name='ProfileSetting' component={ProfileSetting} />
    </Stack.Navigator>
  )
}
const TransactionStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Transaction"
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
      }} name='Transaction' component={Transaction} />
    </Stack.Navigator>
  )
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <TabChange
        landing={LandingStack}
        AddExpenses={AddExpensesStack}
        statistics={StatisticsStack}
        setting={ProfileSettingStack}
        transaction={TransactionStack}
      />
    </NavigationContainer>

  );
}


export default App;


