import React from 'react';
import {Button, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
const IconText = ({iconName, text}) => {
  return (
    <TouchableOpacity>
      <Icon name={iconName} type="material" color="white" />
      <Text style={{color: 'white'}}>{text}</Text>
    </TouchableOpacity>
  );
};
export default IconText;
