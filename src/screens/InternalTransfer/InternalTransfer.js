import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Tabs from '../../components/Tabs';
import {Input} from 'react-native-elements';
import VIBButton from '../../components/VIBButton';
import {SafeAreaView} from 'react-native';

const InternalTransfer = ({route, navigation}) => {
  const [bankNumberInput, setBankNumberInput] = useState('');
  const [realName, setRealName] = useState('');
  useEffect(() => {
    if (route.params) {
      setBankNumberInput(route.params.accountNumber);
      setRealName(route.params.realName);
    }
  }, [route.params]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.transferContainer}
        keyboardShouldPersistTaps="handled">
        <Tabs />
        <View style={styles.separater} />
        <Input
          labelStyle={styles.inputLabel}
          inputStyle={styles.input}
          value={bankNumberInput}
          onChangeText={setBankNumberInput}
          label="Nhập số tài khoản"
          keyboardType="numeric"
        />
        <Input
          disabled={route.params}
          value={realName}
          onChangeText={value => setRealName(value.toUpperCase())}
          inputStyle={styles.input}
        />
      </ScrollView>
      <VIBButton
        title="tiếp tục"
        onPress={() => navigation.navigate('TransactionDetail')}
      />
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
export default InternalTransfer;
