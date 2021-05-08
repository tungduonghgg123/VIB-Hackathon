import React, {useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import Tabs from '../../components/Tabs';
import {Input} from 'react-native-elements';

const InternalTransfer = ({
  bankNumber = '',
  realName = 'Vu Thi Quynh Huong',
}) => {
  const [bankNumberInput, setBankNumberInput] = useState(bankNumber);
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.transferContainer}
        keyboardShouldPersistTaps="handled">
        <Tabs />
        <View style={styles.separater} />
        <Input
          labelStyle={styles.inputLabel}
          inputStyle={styles.input}
          value={bankNumberInput}
          onChange={setBankNumberInput}
          label="Nhập số tài khoản"
          keyboardType="numeric"
        />
        <Input disabled={true} value={realName} inputStyle={styles.input} />
      </ScrollView>
    </View>
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
export default InternalTransfer;
