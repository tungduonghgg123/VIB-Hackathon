import React, {useState, useEffect} from 'react';
import {ScrollView, View, TextInput, Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Icon} from 'react-native-elements';
import * as Progress from 'react-native-progress';
import IconText from '../../components/icons/IconText';
import DropDownPicker from 'react-native-dropdown-picker';
import {TouchableOpacity} from 'react-native';
import {formatMoney, getRatio} from '../../helper';

const NonFixBudget = ({data}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Tháng', value: 'month'},
    {label: 'Tuần', value: 'week'},
    {label: 'Ngày', value: 'day'},
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calendarFilterBox}>
        <View style={styles.calendarFilter}>
          <DropDownPicker
            disabled={true}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Tháng"
            dropDownContainerStyle={{
              borderColor: '#0066B3',
            }}
            style={{
              borderColor: '#0066B3',
              height: 30,
            }}
          />
        </View>
      </View>
      <ScrollView style={styles.transferContainer}>
        {data?.expense &&
          data.expense.map(expense => (
            <View key={expense.category.name}>
              <View style={styles.categoryTitle}>
                <View style={styles.categoryTitleBox}>
                  <View style={styles.categoryTitleDetail}>
                    <IconText
                      iconName={expense.category.iconName}
                      text={expense.category.name}
                      color="black"
                      direction="row"
                      iconSize={30}
                    />
                    <Text style={styles.textMoney}>
                      {expense.maxAmount}
                      VNĐ
                    </Text>
                  </View>
                  <Progress.Bar
                    progress={getRatio(
                      expense.currentAmount,
                      expense.maxAmount,
                      0,
                    )}
                    width={320}
                    color="#FAA934"
                  />
                </View>
              </View>
              {data?.dict[expense.category.name]?.map(transaction => (
                <TouchableOpacity
                  key={transaction.date + Math.random()}
                  style={styles.categoryBox}>
                  <View>
                    <View style={styles.categoryBoxContent}>
                      <IconText
                        iconName="checkroom"
                        text="Quần áo"
                        color="black"
                        direction="row"
                        iconSize={20}
                      />
                      <Text style={styles.categoryBoxContentText}>
                        - {transaction.message}
                      </Text>
                    </View>
                    <Text style={styles.categoryBoxMoney}>
                      -{formatMoney(transaction.amount)} VNĐ
                    </Text>
                  </View>
                  <View>
                    <Icon
                      name="arrow-forward-ios"
                      type="material"
                      color="black"
                      size={15}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  transferContainer: {
    height: 90,
  },
  root: {
    flexDirection: 'column',
    flex: 1,
  },
  progressCircle: {
    paddingTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textReminder: {
    fontSize: 11,
    marginTop: 3,
    color: 'gray',
    width: 130,
    textAlign: 'right',
  },
  contentNumber: {
    color: '#1890FF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    alignItems: 'center',
  },
  categoryTitle: {
    marginTop: 5,
  },
  categoryTitleBox: {
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    height: 60,
    flexDirection: 'column',
    paddingHorizontal: 30,
    justifyContent: 'space-evenly',
  },
  categoryTitleDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryBox: {
    height: 80,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryBoxContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryBoxContentText: {
    marginLeft: 5,
    color: 'grey',
    fontSize: 12,
  },
  categoryBoxMoney: {
    color: '#0066B3',
    marginTop: 5,
  },
  textMoney: {
    textAlign: 'right',
    flex: 1,
    color: '#0066B3',
    marginRight: 10,
    fontWeight: 'bold',
  },
  calendarFilterBox: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  calendarFilter: {
    width: 100,
  },
};
export default NonFixBudget;
