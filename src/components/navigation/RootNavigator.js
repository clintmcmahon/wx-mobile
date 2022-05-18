import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as locationService from "../../services/LocationService";
import { useSelector, useDispatch } from 'react-redux';
import { changeLocation } from '../../actions/locations';

const Tab = createBottomTabNavigator();

function RootNavigator() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    useEffect(() => {
        const getLocation = async () => {
            const location = await locationService.getLocation();
            if (location) {
                dispatch(changeLocation(location));
            }
        }

        if (!state.location) {
            getLocation();
        }
    }, [])

    if (!state.location) {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator />
            </View>
        )
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'information-circle'
                            : 'information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = 'list';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default RootNavigator;