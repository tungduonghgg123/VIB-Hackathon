import React, {useState} from 'react';
import {ScrollView, View, TextInput, Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Icon} from 'react-native-elements';
import * as Progress from 'react-native-progress';
import IconText from '../../components/icons/IconText';
import CheckBox from '@react-native-community/checkbox';
import DropDownPicker from 'react-native-dropdown-picker';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {useQuery} from '@apollo/client';
import {QUERY_MONTHLY_EXPENSE} from '../../model/query';
import {formatMoney} from '../../helper';
const FixBudget = ({route, navigation}) => {
  const {loading, error, data} = useQuery(QUERY_MONTHLY_EXPENSE);
  console.log(data);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Tháng', value: 'month'},
    {label: 'Tuần', value: 'week'},
    {label: 'Ngày', value: 'day'},
  ]);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calendarFilterBox}>
        <View style={styles.calendarFilter}>
          <DropDownPicker
            open={open}
            disabled={true}
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
      <View style={styles.transferContainer}>
        <View style={styles.root}>
          <View style={styles.contentHeader}>
            <Text style={{fontSize: 15}}>Số chi tiêu cố định</Text>
            <Text style={styles.contentNumber}>
              {data?.user?.quizs?.[0]?.monthlyExpense.length || 2}
            </Text>
          </View>
          <View style={styles.progressBar}>
            <Progress.Bar progress={1} width={330} color="#FAA934" />
            <Text style={styles.textReminder}>
              {' '}
              Tháng này bạn đã trả hết các chi tiêu cố định rồi!{' '}
            </Text>
          </View>
          <View style={styles.tickBoxList}>
            {data?.user?.quizs &&
              data?.user.quizs[0].monthlyExpense.map(expense => (
                <View key={expense.category.name} style={styles.tickBox}>
                  <View style={styles.tickBoxDetail}>
                    <CheckBox
                      disabled={true}
                      value={expense.maxAmount === expense.currentAmount}
                      // onValueChange={newValue => setToggleCheckBox(newValue)}
                      style={{width: 15, height: 15}}
                      boxType={'square'}
                    />
                  </View>
                  <IconText
                    iconName={expense.category.iconName}
                    text={expense.category.name}
                    color="black"
                    direction="row"
                  />
                  <Text style={styles.textMoney}>
                    {formatMoney(expense.maxAmount || 0)} VNĐ
                  </Text>
                </View>
              ))}
          </View>
          <View style={{height: 50, marginTop: 16}}>
            <View style={styles.addButtonBox}>
              <Button
                buttonStyle={styles.addButton}
                title="Thêm khoản khác +"
                titleStyle={{fontSize: 12, color: 'black'}}
                type="outline"
                containerStyle={{
                  borderColor: '#0066B3',
                  borderWidth: 1,
                }}
              />
              <Button
                buttonStyle={[styles.addButton, {backgroundColor: '#0066B3'}]}
                title="Đặt lịch gửi tiền định kỳ"
                titleStyle={{fontSize: 12, color: 'white'}}
                type="solid"
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  transferContainer: {
    margin: 30,
    padding: 0,
    flex: 1,
    marginTop: -10,
  },
  root: {
    flexDirection: 'column',
    flex: 1,
  },
  progressBar: {
    paddingTop: 10,
    alignItems: 'center',
  },
  textReminder: {
    fontSize: 11,
    marginTop: 3,
    color: 'gray',
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
  tickBoxList: {
    marginTop: 5,
  },
  tickBox: {
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    height: 44,
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 10,
  },
  tickBoxDetail: {
    width: 15,
    height: 15,
    paddingLeft: 10,
    paddingRight: 30,
  },
  textMoney: {
    textAlign: 'right',
    flex: 1,
    color: '#0066B3',
    marginRight: 10,
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
  addButtonBox: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  addButton: {
    width: 150,
    height: 40,
    borderColor: 'blue',
  },
};
export default FixBudget;
