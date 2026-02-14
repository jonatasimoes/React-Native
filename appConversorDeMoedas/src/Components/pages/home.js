import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from '@react-native-vector-icons/feather';

import GraficosPage from './graficosPage';
import ConverterPage from './convertePage';
import { StyleSheet, View } from 'react-native';

    const Tab = createBottomTabNavigator();

    const icons = {
        Graficos: 'bar-chart-2',
        Converter: 'dollar-sign',
    }

    function TabIcon({ route, color, size }) {
        return (
            <Feather
                name={icons[route.name]}
                size={size}
                color={color}
            />
        );
    }

    export default function Home() {

        return (
                <Tab.Navigator
                    screenOptions={({ route })=>({
                        tabBarActiveTintColor: '#00d804',
                        tabBarInactiveTintColor: '#bcb9b9',
                        tabBarShowLabel: false,
                        headerTitleAlign: 'center',

                        headerStyle: {
                            elevation: 2,
                        },
                        headerTitleStyle: {
                            fontSize: 20

                        },
                        tabBarStyle: {
                            height: 70,
                            borderTopWidth: 0,
                            elevation: 2
                        },
                        tabBarItemStyle: {
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: 18
                        },
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                route={route}
                                color={color}
                                size={focused ? 29 : 20}
                            />
                        )
                    })}
                >
                
                    <Tab.Screen
                        name="Graficos"
                        component={GraficosPage}
                    />
                    <Tab.Screen
                        name="Converter"
                        component={ConverterPage}
                
                    />
                </Tab.Navigator>
        );

    };

const styles = StyleSheet.create({
    conteine: {
        flex: 1
    }
})