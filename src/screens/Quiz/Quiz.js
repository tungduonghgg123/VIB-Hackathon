import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Quizbudget from './Quiz-budget';
import QuizFixCost from './Quiz-fixcost';
import Quizavecost from './Quiz-avecost';
import Quizgoal from './Quiz-goal';
import {HeaderBackButton} from '@react-navigation/stack';
import {
  limitExpenseCategories,
  monthyExpenseCategories,
} from '../../../fakeData';
import {SUMMIT_QUIZ} from '../../model/query';
import {useMutation} from '@apollo/client';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Cannot update a component']); // Ignore log notification by message
class Category {
  constructor({name, iconName}) {
    this.name = name;
    this.iconName = iconName;
  }
}
class Expense {
  constructor({category, maxAmount}) {
    this.category = new Category(category);
    this.maxAmount = maxAmount;
  }
}
const Quiz = ({navigation}) => {
  const [summitQuiz, {loading, error, data}] = useMutation(SUMMIT_QUIZ);
  const [step, setStep] = useState(0);
  const [quiz, setQuiz] = useState({
    vibBudget: '',
    otherBankBudget: '',
    cashBudget: '',
    eWalletBudget: '',
    monthlyExpense: monthyExpenseCategories.map(
      category =>
        new Expense({
          category: new Category({
            name: category.name,
            iconName: category.iconName,
          }),
          maxAmount: 0,
        }),
    ),
    limitExpense: limitExpenseCategories.map(
      category =>
        new Expense({
          category: new Category({
            name: category.name,
            iconName: category.iconName,
          }),
          maxAmount: 0,
        }),
    ),
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
  if (data) {
    navigation.navigate('Overview');
  }
  return (
    <View style={{flex: 1}}>
      {step === 0 && (
        <Quizbudget onPressNext={onPressNext} data={quiz} setData={setQuiz} />
      )}
      {step === 1 && (
        <QuizFixCost data={quiz} onPressNext={onPressNext} setData={setQuiz} />
      )}
      {step === 2 && (
        <Quizavecost data={quiz} onPressNext={onPressNext} setData={setQuiz} />
      )}
      {step === 3 && (
        <Quizgoal
          data={quiz}
          onPressNext={() => {
            summitQuiz({
              variables: {
                input: quiz,
              },
            });
          }}
          setData={setQuiz}
        />
      )}
    </View>
  );
};
export default Quiz;
