import { View, Button, Text, StyleSheet } from "react-native";
import React from "react";

class LoginComponent extends React.Component {
   constructor(props) { super(props); }
   render() {
      return (
         <View style={styles.loginContainer}>
            <Text style={styles.loginHeader}>
               Login Component
            </Text>
            <View style={styles.butonContainer}>
               <Button style={styles.loginButton} onPress={() => this.props.navigation.navigate('Home')} title='Login' />
            </View>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   butonContainer:{
      flex:0.2,
      flexDirection:'row',
      justifyContent:"center",
      alignItems:"center"
   },
   loginContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   loginHeader: {
      fontSize: 30,
   },
   loginButton: {
      paddingHorizontal: '20px',
      paddingVertical: 10
   }
});

export default LoginComponent;