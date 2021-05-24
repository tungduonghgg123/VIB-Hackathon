import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Quizbudget from './Quiz-budget';
import QuizFixCost from './Quiz-fixcost';
import Quizavecost from './Quiz-avecost';
import Quizgoal from './Quiz-goal';
import {HeaderBackButton} from '@react-navigation/stack';

const Quiz = ({navigation}) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    vibBudget: '',
    otherBankBudget: '',
    cashBudget: '',
    eWalletBudget: '',
    monthlyExpense: [],
    limitExpense: [],
  });

  const onPressNext = () => setStep(step + 1);
  const onPressBack = () => setStep(step - 1);
  navigation.setOptions({
    headerLeft: props => (
      <HeaderBackButton
        {...props}
        onPress={() => {
          switch (step) {
            case 0:
              props.onPress();
              break;
            case 1:
            case 2:
            case 3:
              onPressBack();
          }
        }}
      />
    ),
  });
  console.log(data);
  return (
    <View style={{flex: 1}}>
      {step === 0 && (
        <Quizbudget onPressNext={onPressNext} data={data} setData={setData} />
      )}
      {step === 1 && (
        <QuizFixCost data={data} onPressNext={onPressNext} setData={setData} />
      )}
      {step === 2 && (
        <Quizavecost data={data} onPressNext={onPressNext} setData={setData} />
      )}
      {step === 3 && <Quizgoal data={data} setData={setData} />}
    </View>
  );
};
export default Quiz;
