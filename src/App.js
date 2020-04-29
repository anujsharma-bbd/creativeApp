import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from './screens/home.component';
import AboutComponent from './screens/about.component';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeComponent} />
          <Stack.Screen name="About" component={AboutComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#eaeaea',
  },
  body: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
