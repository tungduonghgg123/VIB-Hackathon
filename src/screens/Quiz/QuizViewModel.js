import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {
  limitExpenseCategories,
  monthyExpenseCategories,
} from '../../../fakeData';
import {SUBMIT_QUIZ} from '../../model/query';
import {useMutation} from '@apollo/client';

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
class Quiz {
  constructor() {
    this.vibBudget = '';
    this.otherBankBudget = '';
    this.cashBudget = '';
    this.eWalletBudget = '';
    this.monthlyExpense = monthyExpenseCategories.map(
      category =>
        new Expense({
          category: new Category({
            name: category.name,
            iconName: category.iconName,
          }),
          maxAmount: 0,
        }),
    );
    this.limitExpense = limitExpenseCategories.map(
      category =>
        new Expense({
          category: new Category({
            name: category.name,
            iconName: category.iconName,
          }),
          maxAmount: 0,
        }),
    );
  }
}
const QuizViewModel = ({myRef, submitQuizResult}) => {
  const [submitQuiz, {loading, error, data}] = useMutation(SUBMIT_QUIZ);
  useEffect(() => {
    if (data) {
      submitQuizResult(data);
    }
  }, [data]);
  useEffect(() => {
    // Functional components need to manually add methods to their Reference in order to access them outside of the function.
    if (myRef?.current) {
      myRef.current.submitQuiz = submitQuiz;
    }
    // TODO: Not the best but gonna place this here for now
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myRef]);
  return <View />;
};
export {QuizViewModel, Quiz};
