import React from 'react';
import { View, Text, Button } from 'react-native';


class HomeComponent extends React.PureComponent {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <View>
            <Text> This is Home screen </Text>
            <Button
               title="Go to About"
               onPress={() => this.props.navigation.navigate('About')}
            />
         </View>
      );
   }
}

export default HomeComponent;