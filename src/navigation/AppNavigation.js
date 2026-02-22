import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import RequestsScreen from '../screens/RequestsScreen';
import DVacante from '../screens/DVacante';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                tabBarActiveTintColor: '#002E5D',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
                    else if (route.name === 'Perfil') iconName = focused ? 'person' : 'person-outline';
                    else if (route.name === 'Notificaciones') iconName = focused ? 'notifications' : 'notifications-outline';
                    else if (route.name === 'Solicitudes') iconName = focused ? 'briefcase' : 'briefcase-outline';

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Dashboard' }} />
            <Tab.Screen name="Solicitudes" component={RequestsScreen} options={{ title: 'Vacantes' }} />
            <Tab.Screen name="Notificaciones" component={NotificationsScreen} />
            <Tab.Screen name="Perfil" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default function AppNavigation({ isLoggedIn, onLogin }) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isLoggedIn ? (
                <>
                    <Stack.Screen name="Login">
                        {(props) => <LoginScreen {...props} onLogin={onLogin} />}
                    </Stack.Screen>
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                </>
            ) : (
                <>

                    <Stack.Screen name="Main" component={MainTabs} />

                    <Stack.Screen
                        name="DVacante"
                        component={DVacante}
                        options={{
                            headerShown: true,
                            title: 'Detalle de Vacante',
                            headerStyle: { backgroundColor: '#0F172A' }, 
                            headerTintColor: '#fff'
                        }}
                    />
                </>
            )}
        </Stack.Navigator>
    );
}