import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class HomeComponent extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <View style={styles.homeView}>
          <Text> This is Home screen </Text>
          <Button
            style={styles.aboutButton}
            title="Go to About"
            onPress={() => this.props.navigation.navigate('About')}
          />
        </View>
        <View>
          <Button
            style={styles.aboutButton}
            title="Go to Contacts"
            onPress={() => this.props.navigation.navigate('ContactList')}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  homeView: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  aboutButton: {
    marginTop: '200px',
    width: '100px',
  },
});
export default HomeComponent;
