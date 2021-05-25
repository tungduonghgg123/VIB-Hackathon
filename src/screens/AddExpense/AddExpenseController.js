import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native';
import IconText from '../../components/icons/IconText';
import InputAmount from '../../components/InputAmount';
import SimpleTextInput from '../../components/SimpleTextInput';
import SelectCategories from '../../components/SelectCategories';
import {categories, moneySource} from '../../../fakeData';
import RecordModal from '../../components/RecordModal';
import DateTimePicker from '@react-native-community/datetimepicker';
import {set} from 'react-native-reanimated';
import {Platform} from 'react-native';
import AddExpense from './AddExpense';
import {TouchableOpacity} from 'react-native';
import {MAKE_TRANSACTION} from '../../model/query';
import {useMutation} from '@apollo/client';

const AddExpenseController = ({navigation}) => {
  const [makeTransaction, {data, loading, error}] = useMutation(
    MAKE_TRANSACTION,
  );
  navigation.setOptions({
    headerLeft: props => (
      <TouchableOpacity {...props}>
        <Text style={styles.headerLeft}>Huỷ</Text>
      </TouchableOpacity>
    ),
    headerRight: props => (
      <TouchableOpacity
        {...props}
        onPress={() => {
          makeTransaction({
            variables: {
              transaction: {
                from: moneySource[budget.name].value,
                amount: parseInt(amount),
                note,
                category: fullCategory,
                date: date.getTime().toString(),
              },
              saveMode: 'NO',
            },
          });
        }}>
        <Text style={styles.headerRight}>Lưu</Text>
      </TouchableOpacity>
    ),
  });
  console.log(data, loading, error);
  if (data) {
    navigation.navigate('Dashboard');
  }
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const [fullCategory, setFullCategory] = useState('');
  const [budget, setBudget] = useState('');

  const [recordFilePath, setRecordFilePath] = useState('');
  const [showVoiceRecordingModal, setShowVoiceRecordingModal] = useState(false);
  const [voiceRecognitionResult, setVoiceRecognitionResult] = useState('');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  console.log(date.getTime());
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setShow(false);
  };
  console.log(budget);
  useEffect(() => {
    //có giá trị k có gtri
    if (voiceRecognitionResult != null) {
      // setFullCategory('' + voiceRecognitionResult.spending_type);
      // categories = '' + voiceRecognitionResult.money;
    }
  }, [voiceRecognitionResult]);
  return (
    <AddExpense
      date={date}
      setDate={setDate}
      onDateChange={onChange}
      amount={amount}
      setAmount={setAmount}
      note={note}
      setNote={setNote}
      setFullCategory={setFullCategory}
      setBudget={setBudget}
    />
  );
};
const styles = {
  headerLeft: {
    fontSize: 14,
    marginLeft: 18,
    color: 'white',
  },
  headerRight: {
    fontSize: 14,
    color: '#F7941D',
    marginRight: 18,
  },
};
export default AddExpenseController;
