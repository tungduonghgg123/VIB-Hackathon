import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Tabs from '../../components/Tabs';
import {Input} from 'react-native-elements';
import VIBButton from '../../components/VIBButton';
import {SafeAreaView} from 'react-native';

const TransactionDetail = ({route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View />
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0066B3',
  },
  transferContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 10,
    margin: 11,
  },
  separater: {
    height: 8,
    backgroundColor: '#F2F2F2',
    marginBottom: 15,
  },
  input: {fontSize: 14},
  inputLabel: {fontSize: 12, fontWeight: '400'},
};
export default TransactionDetail;
