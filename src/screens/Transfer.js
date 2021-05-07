import React from 'react';
import {Button, Text, View} from 'react-native';
import IconText from '../components/icons/IconText';
const Transfer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.transferOptionsContainer}>
        <IconText iconName="account-balance" text="Trong VIB" />
        <IconText iconName="account-balance" text="Ngoài VIB" />
        <IconText iconName="account-balance" text="Đầu tư" />
      </View>
    </View>
  );
};
const styles = {
  container: {
    flex: 1,
  },
  transferOptionsContainer: {
    backgroundColor: '#FAA934',
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};
export default Transfer;
