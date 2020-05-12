import React from 'react';
import {View, Text} from 'react-native';


  export const ContactsHeaderComponent = (props) => {
    const {scene, previous, navigation} = props;
    const {options} = scene.descriptor;
    const title =
      options.headerTitle !== undefined
        ? options.headerTitle
        : options.title !== undefined
        ? options.title
        : scene.route.name;

    return (
      <View>
        <Text> This is contacts custom header</Text>
      </View>
    );
  }
