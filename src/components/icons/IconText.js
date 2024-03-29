import React from 'react';
import {Button, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
const IconText = ({
  iconName,
  iconSize = 20,
  text,
  textStyle = {},
  direction = 'column',
  color = 'white',
  onPress = () => {},
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        flexDirection: direction,
        alignItems: 'center',
      }}>
      <Icon name={iconName} type="material" color={color} size={iconSize} />
      {text && (
        <Text
          style={{
            color,
            ...textStyle,
            paddingLeft: direction === 'row' ? 9 : 0,
          }}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default IconText;
