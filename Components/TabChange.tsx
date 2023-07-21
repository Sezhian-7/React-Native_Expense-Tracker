import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from 'react-native';

interface TabChangeProps {
    landing?: any;
    statistics?: any;
    AddExpenses?: any;
    transaction?: any;
    setting?: any
}

const TabChange: React.FC<TabChangeProps> = ({
    landing,
    statistics,
    AddExpenses,
    transaction,
    setting
}) => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    position: 'relative',
                    height: 70,
                },
                headerShown: false
            }}
        >
            <Tab.Screen
                name="LandingStack"
                component={landing}
                options={{

                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={focused ? styles.active : null}>
                            <Image style={styles.active} source={require('../Assets/png/Home.png')} />
                        </View>

                    ),
                }}

            />
            <Tab.Screen
                name="StatisticsStack"
                component={statistics}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={focused ? styles.active : null}>
                            <Image source={require('../Assets/png/Statistics.png')} />
                        </View>

                    ),
                }}
            />
            <Tab.Screen
                name="ProfileStack"
                component={AddExpenses}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={styles.addBlk}>
                            <Image

                                source={require('../Assets/png/Add.png')}
                            />
                        </View>

                    ),
                }}
            />
            <Tab.Screen
                name="ListStack"
                component={transaction}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={focused ? styles.active : null}>
                            <Image source={require('../Assets/png/Money.png')} />
                        </View>

                    ),
                }}
            />
            <Tab.Screen
                name="SettingStack"
                component={setting}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={focused ? styles.active : null}>
                            <Image source={require('../Assets/png/Settings.png')} />
                        </View>

                    ),
                }}
            />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    addBlk: {
        backgroundColor: '#08979D',
        padding: 20,
        borderRadius: 100,
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        borderColor: '#fff',
        borderWidth: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    active: {
    }
});

export default TabChange