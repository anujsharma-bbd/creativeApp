import React from 'react';
import { View, Text } from 'react-native';


class HomeComponent extends React.PureComponent {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <View>
            <Text> This is Home screen </Text>
         </View>
      );
   }
}

export default HomeComponent;