
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './HomeScreen';
import User from './UserScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();
const Lab7 = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name ="Home "  component ={Home}/>
                <Tab.Screen name ="User"  component ={User}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default Lab7