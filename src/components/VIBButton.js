import React, {useState} from 'react';
import {Button} from 'react-native-elements';
const VIBButton = ({title}) => {
  return (
    <Button
      type="solid"
      buttonStyle={styles.button}
      title={title.toUpperCase()}
    />
  );
};
const styles = {
  button: {
    backgroundColor: '#F7941D',
    borderRadius: 10,
    marginHorizontal: 11,
  },
};
export default VIBButton;
