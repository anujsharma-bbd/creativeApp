import { NavigationContainer } from "@react-navigation/native";
import HomeComponent from "../screens/home.component";
import AboutComponent from "../screens/about.component";
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

export const Routes = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeComponent} />
            <Stack.Screen name="About" component={AboutComponent} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}