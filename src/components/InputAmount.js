import React from 'react';
import {TextInput} from 'react-native';
import Card from './Card';
const InputAmount = ({amount, setAmount}) => {
  return (
    <Card style={styles.inputAmountContainer}>
      <TextInput
        style={styles.text}
        placeholderTextColor="#979797"
        placeholder="Nhập số tiền"
        keyboardType="numeric"
        returnKeyType="done"
        onChangeText={text => {
          setAmount(
            text.replace(/,/g, '').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'),
          );
        }}
        value={amount}
      />
    </Card>
  );
};
const styles = {
  text: {
    fontSize: 13,
    color: '#979797',
  },
  inputAmountContainer: {
    height: 58,
    paddingLeft: 31,
    paddingTop: 0,
    justifyContent: 'center',
  },
};
export default InputAmount;
