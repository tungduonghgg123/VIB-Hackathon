import React from 'react';
import {Button, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
const IconText = ({
  iconName,
  text,
  direction = 'column',
  color = 'white',
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: direction,
        alignItems: 'center',
      }}>
      <Icon name={iconName} type="material" color={color} />
      {text && (
        <Text style={{color, paddingLeft: direction === 'row' ? 9 : 0}}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default IconText;
