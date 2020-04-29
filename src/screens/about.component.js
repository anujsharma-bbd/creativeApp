import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";

class AboutComponent extends React.PureComponent {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <View>
            <Text>
               About US screen
            </Text>
            <View>
               <Button style={styles.backButton} title="Go back" onPress={() => this.props.navigation.goBack()} />
            </View>
         </View>
      );
   }
}
export default AboutComponent;


const styles = StyleSheet.create({
   backButton: {
      marginTop: '20px',
   }
});