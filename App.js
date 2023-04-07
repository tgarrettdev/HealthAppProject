// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PatientDashboard from './components/PatientDashboard';
import HealthDataInput from './components/HealthDataInput';
import PatientList from './components/PatientList';
import Profile from './components/Profile';
import PatientProfile from './components/PatientProfile';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Login') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'PatientDashboard') {
              iconName = focused ? 'os-information-circle' : 'ios-information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1abc9c',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="PatientDashboard" component={PatientDashboard} />
        <Tab.Screen name="HealthDataInput" component={HealthDataInput} />
        <Tab.Screen name="PatientList" component={PatientList} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="PatientProfile" component={PatientProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
