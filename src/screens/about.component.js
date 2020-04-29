import React from 'react';
import { View, Text } from "react-native";

class AboutComponent extends React.PureComponent{
   constructor(props) {
      super(props);
   }
   render(){
      return (
         <View>
            <Text>
               About US screen
            </Text>
         </View>
      );
   }
}
export default AboutComponent;