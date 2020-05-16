import React, {useEffect, useContext} from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import {Input} from 'react-native-elements';

export default function CustomInput({style, ...props}) {
  return (
    <Input
      containerStyle={[{height: 20}, style]}
      inputContainerStyle={[
        {
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#E0E0E0',
          backgroundColor: '#FFF',
          height: '100%',
          width: '85%',
        },
      ]}
      {...props}
    />
  );
}
