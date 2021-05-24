import React from 'react';
import {TextInput} from 'react-native';
import Card from './Card';
const SimpleTextInput = ({text, setText, placeholder}) => {
  return (
    <Card style={styles.inputAmountContainer}>
      <TextInput
        onChangeText={setText}
        value={text}
        placeholderTextColor="#979797"
        style={styles.text}
        placeholder={placeholder}
      />
    </Card>
  );
};
const styles = {
  inputAmountContainer: {
    height: 58,
    paddingLeft: 31,
    paddingTop: 0,
    justifyContent: 'center',
  },
};
export default SimpleTextInput;
