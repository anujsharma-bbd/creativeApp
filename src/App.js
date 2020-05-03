import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { Routes } from './routes/routes.component';

const App = () => {
  return (
    <>
      <Routes></Routes>
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
