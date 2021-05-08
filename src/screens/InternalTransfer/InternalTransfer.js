import React, {useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import Tabs from '../../components/Tabs';

const InternalTransfer = () => {
  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0066B3',
  },
};
export default InternalTransfer;
