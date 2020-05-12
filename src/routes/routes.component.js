import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LoginComponent from "../screens/login.component";
import { colors } from "../assets/styles/theme.style";
import HomeComponent from "../screens/home.component";
import AboutComponent from "../screens/about.component";
import ContactsListComponent from "../screens/contacts.component";
import ContactsHeaderComponent from "../shared/components/headers/contacts-header.component";
import { View, Text } from "react-native";

const Stack = createStackNavigator();


export const Routes = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Login" headerMode={"float"}>
            <Stack.Screen name="Login" component={LoginComponent} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeComponent} options={{ headerLeft: null, title: 'Creative App', headerTitleAlign: 'center', headerStyle: { backgroundColor: colors.gray } }} />
            <Stack.Screen name="About" component={AboutComponent} options={{ headerShown: true, title: 'This is About Us screen', headerStyle: { backgroundColor: colors.gray } }} />
            <Stack.Screen name="ContactList" component={ContactsListComponent} options={{ headerShown: true, title: 'This is contacts screen', header: ContactsHeaderComponent, headerLeft: null}} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}