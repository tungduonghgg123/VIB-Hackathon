import React, {useState} from 'react';
import {Button} from 'react-native-elements';
const VIBButton = ({title, onPress = () => {}}) => {
  return (
    <Button
      type="solid"
      buttonStyle={styles.button}
      title={title.toUpperCase()}
      titleStyle={styles.title}
      onPress={onPress}
    />
  );
};
const styles = {
  button: {
    backgroundColor: '#F7941D',
    borderRadius: 10,
    marginHorizontal: 11,
  },
  title: {
    fontSize: 15,
  },
};
export default VIBButton;
