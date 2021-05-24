import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Icon} from 'react-native-elements';
import * as Progress from 'react-native-progress';
import {useQuery} from '@apollo/client';
import {QUERY_QUIZ} from '../../model/query';
import {formatMoney} from '../../helper';
const moneyLeftReducer = (left, currentExpense) =>
  left + currentExpense.maxAmount - currentExpense.currentAmount;
const extractRemainingPercantage = expense => {
  let total = 0;
  let used = 0;
  expense.forEach(e => {
    total += e.maxAmount;
    used += e.currentAmount;
  });
  console.log(total, used);
  return used / total;
};
const Overview = ({route, navigation}) => {
  const {loading, error, data} = useQuery(QUERY_QUIZ);
  const [derivedInformation, setDerivedInformation] = useState({});
  const {
    remainingBudget = 0,
    budgetLeftInPercentage = 1,
    limitExpenseCount,
    monthlyExpenseCount,
    monthlyExpenseLeftInPercentage,
    limitExpenseLeftInPercentage,
  } = derivedInformation;
  useEffect(() => {
    if (!data) {
      return;
    }
    console.log(data);
    const {
      limitExpense,
      monthlyExpense,
      monthlyTotalBudget,
      cash,
      ewallet,
      out,
      vib,
    } = data.user.quizs[0];
    setDerivedInformation({
      remainingBudget: cash + ewallet + out + vib,
      budgetLeftInPercentage: (cash + ewallet + out + vib) / monthlyTotalBudget,
      limitExpenseCount: limitExpense.length,
      monthlyExpenseCount: monthlyExpense.length,
      monthlyExpenseLeftInPercentage: extractRemainingPercantage(
        monthlyExpense,
      ),
      limitExpenseLeftInPercentage: extractRemainingPercantage(limitExpense),
    });
  }, [data]);
  console.log(limitExpenseLeftInPercentage);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.transferContainer}>
        <View style={styles.root}>
          <TouchableOpacity
            style={styles.rowContainer}
            onPress={() => navigation.navigate('SpendingTracker')}>
            <View style={styles.rowContainerHeader}>
              <Text style={styles.text}> SỔ CHI TIÊU </Text>
              <Icon
                name="arrow-forward-ios"
                type="material"
                color="white"
                size={15}
              />
            </View>
            <View style={styles.containerContent}>
              <View>
                <Text style={styles.textContent}>Ngân sách hiện tại </Text>
                <Text style={styles.textMoney}>
                  {formatMoney(remainingBudget)} VNĐ
                </Text>
              </View>
              <Image
                style={styles.image}
                source={require('../../assets/wallet.png')}
              />
            </View>
            <View style={styles.progressBar}>
              <Progress.Bar
                progress={budgetLeftInPercentage}
                width={300}
                color="#FAA934"
              />
              <Text style={styles.textReminder}>
                Bạn còn {Math.floor(budgetLeftInPercentage * 100)}% ngân sách
                tháng này{' '}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rowContainerBig}
            onPress={() => navigation.navigate('FixBudget')}>
            <View style={styles.rowContainerHeader}>
              <Text style={styles.text}> CHI TIÊU CỐ ĐỊNH </Text>
              <Icon
                name="arrow-forward-ios"
                type="material"
                color="white"
                size={15}
              />
            </View>
            <View style={styles.containerContent}>
              <View>
                <Text style={styles.textContent}>Tháng này bạn cần trả </Text>
                <Text style={styles.textMoney}>
                  {monthlyExpenseCount} chi tiêu cố định
                </Text>
              </View>
              <Image
                style={styles.imageBig}
                source={require('../../assets/fixbudget.png')}
              />
            </View>
            <View style={styles.progressBar}>
              <Progress.Bar
                progress={monthlyExpenseLeftInPercentage}
                width={300}
                color="#FAA934"
              />
              {/* TODO: Add a meaningful text on this */}
              {/* <Text style={styles.textReminder}>
                Tháng này bạn đã trả hết các chi tiêu cố định rồi!
              </Text> */}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rowContainerBig}
            onPress={() => navigation.navigate('NonFixBudget')}>
            <View style={styles.rowContainerHeader}>
              <Text style={styles.text}> KẾ HOẠCH CHI TIÊU </Text>
              <Icon
                name="arrow-forward-ios"
                type="material"
                color="white"
                size={15}
              />
            </View>
            <View style={styles.containerContent}>
              <Image
                style={styles.imageBig}
                source={require('../../assets/wallet2.png')}
              />
              <View>
                <Text style={[styles.textContent, {textAlign: 'right'}]}>
                  {' '}
                  Bạn đang có{' '}
                </Text>
                <Text style={[styles.textMoney, {textAlign: 'right'}]}>
                  {' '}
                  2 kế hoạch chi tiêu{' '}
                </Text>
              </View>
            </View>
            <View style={styles.progressBar}>
              <Progress.Bar
                progress={limitExpenseLeftInPercentage}
                width={300}
                color="#FAA934"
              />
              {limitExpenseLeftInPercentage > 0.7 && (
                <Text style={[styles.textReminder, {color: 'red'}]}>
                  Bạn cẩn thận không tiêu quá ngân sách tháng này nhé!{' '}
                </Text>
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rowContainerBig}>
            <View style={styles.rowContainerHeader}>
              <Text style={styles.text}> MỤC TIÊU </Text>
              <Icon
                name="arrow-forward-ios"
                type="material"
                color="white"
                size={15}
              />
            </View>
            <View style={styles.containerContent}>
              <View>
                <Text style={styles.textContent}> Bạn đang thực hiện </Text>
                <Text style={styles.textMoney}> 4 mục tiêu </Text>
              </View>
              <Image
                style={styles.imageBig}
                source={require('../../assets/goal.png')}
              />
            </View>
            <View style={styles.progressBar}>
              <Progress.Bar progress={1} width={300} color="#FAA934" />
              <Text style={styles.textReminder}>
                {' '}
                Tháng này còn 2 mục tiêu bạn chưa cập nhật nhé!{' '}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0066B3',
  },
  transferContainer: {
    margin: 30,
    padding: 0,
    flex: 1,
    marginTop: -5,
  },
  root: {
    flexDirection: 'column',
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 15,
    height: 150,
  },
  rowContainerBig: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 16,
    height: 170,
  },
  rowContainerHeader: {
    backgroundColor: '#FAA934',
    width: '100%',
    height: 40,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  textContent: {
    fontSize: 13,
  },
  textMoney: {
    fontSize: 15,
    color: '#1890FF',
  },
  containerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 58,
    height: 58,
  },
  imageBig: {
    width: 130,
    height: 80,
  },
  progressBar: {
    padding: 10,
    alignItems: 'center',
    paddingTop: -10,
  },
  textReminder: {
    fontSize: 11,
    marginTop: 3,
    color: 'gray',
  },
};
export default Overview;
