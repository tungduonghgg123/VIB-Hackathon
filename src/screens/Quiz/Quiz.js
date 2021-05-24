import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Quizbudget from './Quiz-budget';
import QuizFixCost from './Quiz-fixcost';
import Quizavecost from './Quiz-avecost';
import Quizgoal from './Quiz-goal';
import {HeaderBackButton} from '@react-navigation/stack';
import {monthyExpenseCategories} from '../../../fakeData';
class Category {
  constructor(
    {name, iconName, subCategoryName, subCategoryIconName, subCategories},
    receiver,
  ) {
    this.name = name;
    this.iconName = iconName;
    this.subCategories = subCategories || [
      {
        name: subCategoryName,
        iconName: subCategoryIconName,
        contacts: receiver ? [receiver] : [],
      },
    ];
  }
}
class Expense {
  constructor({category, maxAmount, currentAmount}) {
    this.category = new Category(category);
    this.maxAmount = maxAmount;
    this.currentAmount = currentAmount || 0;
  }
}
const Quiz = ({navigation}) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
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
