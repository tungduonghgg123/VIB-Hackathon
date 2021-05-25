import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useQuery} from '@apollo/client';
import {QUERY_QUIZ} from '../../model/query';
const extractRemainingPercantage = expense => {
  let total = 0;
  let used = 0;
  expense.forEach(e => {
    total += e.maxAmount;
    used += e.currentAmount;
  });
  return total === 0 ? 1 : used / total;
};
const OverviewViewModel = ({setData}) => {
  const {loading, error, data} = useQuery(QUERY_QUIZ);
  useEffect(() => {
    if (!data) {
      return;
    }
    if (!data.user.quizs?.[0]) {
      return;
    }
    const {
      limitExpense,
      monthlyExpense,
      monthlyTotalBudget,
      cash,
      ewallet,
      out,
      vib,
    } = data.user.quizs[0];
    setData({
      remainingBudget: cash + ewallet + out + vib,
      budgetLeftInPercentage: monthlyTotalBudget
        ? (cash + ewallet + out + vib) / monthlyTotalBudget
        : 1,
      limitExpenseCount: limitExpense.length,
      monthlyExpenseCount: monthlyExpense.length,
      monthlyExpenseLeftInPercentage: extractRemainingPercantage(
        monthlyExpense,
      ),
      limitExpenseLeftInPercentage: extractRemainingPercantage(limitExpense),
    });
  }, [data]);
  return <View />;
};

export default OverviewViewModel;
