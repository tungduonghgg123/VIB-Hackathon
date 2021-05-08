import React from 'react';
import {View} from 'react-native';

const Card = ({style, children}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 5,
        paddingTop: 10,
        margin: 11,
        ...style,
      }}>
      {children}
    </View>
  );
};
export default Card;
