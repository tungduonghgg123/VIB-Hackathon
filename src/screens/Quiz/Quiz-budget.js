import React, {useState} from 'react';
import {ScrollView, View, TextInput, Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import VIBButton from '../../components/VIBButton';
import * as Progress from 'react-native-progress';

const Quizbudget = ({setData, data, onPressNext}) => {
  const [vibBudget, setVibBudget] = useState(data.vibBudget);
  const [otherBankBudget, setOtherBankBudget] = useState(data.otherBankBudget);
  const [cashBudget, setCashBudget] = useState(data.cashBudget);
  const [eWalletBudget, setEWalletBudget] = useState(data.eWalletBudget);
  return (
    <SafeAreaView style={styles.container}>
      <Progress.Bar
        progress={0.25}
        width={null}
        color="white"
        borderRadius={0}
      />
      <ScrollView contentContainerStyle={styles.transferContainer}>
        <Text style={styles.heading}>
          Ngân sách của bạn tháng tới là bao nhiêu?
        </Text>
        <View style={styles.root}>
          <View style={styles.rowContainer}>
            <Text style={styles.text}>Ngân sách trong VIB</Text>
            <View style={styles.inputContainer}>
              <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                placeholder="0"
                value={vibBudget.toString()}
                onChangeText={setVibBudget}
                placeholderTextColor="white"
              />
              <Text style={styles.text}>VND</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.text}>Ngân sách tiền mặt</Text>
            <View style={styles.inputContainer}>
              <TextInput
                keyboardType="numeric"
                value={cashBudget.toString()}
                onChangeText={setCashBudget}
                style={styles.textInput}
                placeholder="0"
                placeholderTextColor="white"
              />
              <Text style={styles.text}>VND</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.text}>Ngân sách thẻ khác</Text>
            <View style={styles.inputContainer}>
              <TextInput
                keyboardType="numeric"
                value={otherBankBudget.toString()}
                onChangeText={setOtherBankBudget}
                style={styles.textInput}
                placeholder="0"
                placeholderTextColor="white"
              />
              <Text style={styles.text}>VND</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.text}>Ngân sách ví điện tử</Text>
            <View style={styles.inputContainer}>
              <TextInput
                keyboardType="numeric"
                value={eWalletBudget.toString()}
                onChangeText={setEWalletBudget}
                style={styles.textInput}
                placeholder="0"
                placeholderTextColor="white"
              />
              <Text style={styles.text}>VND</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <VIBButton
        title="tiếp tục"
        onPress={() => {
          onPressNext();
          setData({
            ...data,
            vibBudget: parseInt(vibBudget),
            cashBudget: parseInt(cashBudget),
            otherBankBudget: parseInt(otherBankBudget),
            eWalletBudget: parseInt(eWalletBudget),
          });
        }}
      />
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0066B3',
  },
  heading: {
    color: '#FAA934',
    fontSize: 30,
  },
  transferContainer: {
    margin: 30,
    padding: 0,
    flex: 1,
  },
  root: {
    flexDirection: 'column',
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    color: 'white',
    fontSize: 15,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    width: 160,
    height: 44,
    alignItems: 'center',
    backgroundColor: '#004A82',
    paddingRight: 10,
  },
  textInput: {
    height: 44,
    width: 120,
    padding: 10,
    color: 'white',
    fontSize: 18,
  },
};
export default Quizbudget;
