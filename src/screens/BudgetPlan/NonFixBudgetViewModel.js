import React, {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {QUERY_LIMIT_EXPENSE} from '../../model/query';
import {View} from 'react-native';
import {getRatio} from '../../helper';

const NonFixBudgetViewModel = ({setData}) => {
  const {data, loading, error} = useQuery(QUERY_LIMIT_EXPENSE, {
    fetchPolicy: 'no-cache',
  });
  useEffect(() => {
    if (data?.user?.quizs?.[0]?.limitExpense) {
      const categoryToTransactionsDict = {};
      // process transactions by grouping it by categories and calculate total amount
      data.user.transactions?.forEach(tx => {
        const cate = tx.category.name;
        if (!categoryToTransactionsDict[cate]) {
          categoryToTransactionsDict[cate] = [];
          categoryToTransactionsDict[cate].total = 0;
        }

        categoryToTransactionsDict[cate].total += tx.amount;
        categoryToTransactionsDict[cate].push(tx);
      });
      // get totalPercentLeft
      let totalMaxAmount = 0;
      let totalCurrentAmount = 0;
      data.user.quizs[0].limitExpense.forEach(ex => {
        totalMaxAmount += ex.maxAmount;
        totalCurrentAmount += ex.currentAmount;
      });
      console.log(getRatio(totalCurrentAmount, totalMaxAmount, 0));
      setData({
        expense: data.user.quizs[0].limitExpense,
        dict: categoryToTransactionsDict,
        percentage: getRatio(totalCurrentAmount, totalMaxAmount, 0),
      });
    }
  }, [data]);
  return <View />;
};
export default NonFixBudgetViewModel;
