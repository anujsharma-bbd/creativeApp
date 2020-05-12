import React from 'react';
import { View, Text } from 'react-native';

class ContactsListComponent extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render (){
     return (
        <View>
           <Text> This this contacts list component </Text>
        </View>
     );
  }
}

export default ContactsListComponent;
