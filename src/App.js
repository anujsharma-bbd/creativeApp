import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text>Anuj's First Native app anuj</Text>
      </ScrollView>
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
