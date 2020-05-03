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
            <Stack.Screen name="Home" component={HomeComponent} options={{ headerLeft: null,title: 'Creative App', headerTitleAlign:'center', headerStyle: { backgroundColor: '#ccc' } }} />
            <Stack.Screen name="About" component={AboutComponent} options={{ headerShown: true, title: 'This is About Us screen', headerStyle: { backgroundColor: '#ccc' } }} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}