import { NavigationContainer } from "@react-navigation/native";
import HomeComponent from "../screens/home.component";
import AboutComponent from "../screens/about.component";
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginComponent from "../screens/login.component";

const Stack = createStackNavigator();

export const Routes = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginComponent} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeComponent} options={{ title: 'Creative App', headerStyle: { backgroundColor: '#ccc' } }} />
            <Stack.Screen name="About" component={AboutComponent} options={{ headerShown: true, title: 'This is About Us screen', headerBackTitleVisible: false, headerStyle: { backgroundColor: '#ccc' } }} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}