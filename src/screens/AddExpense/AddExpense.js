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

const AddExpense = ({
  date,
  setDate,
  onDateChange,
  amount,
  setAmount,
  note,
  setNote,
  setFullCategory,
  setBudget,
  budget,
  setVoiceRecognitionResult,
}) => {
  const [recordFilePath, setRecordFilePath] = useState('');
  const [showVoiceRecordingModal, setShowVoiceRecordingModal] = useState(false);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconWrapper}>
        <IconText
          iconName={'mic'}
          iconSize={77}
          color="#0066B3"
          onPress={() => setShowVoiceRecordingModal(!showVoiceRecordingModal)}
        />
      </View>
      <RecordModal
        isVisible={showVoiceRecordingModal}
        toggleModal={() => setShowVoiceRecordingModal(!showVoiceRecordingModal)}
        setRecordFilePath={setRecordFilePath}
        setVoiceRecognitionResult={setVoiceRecognitionResult}
      />
      <Text style={styles.text}>
        Sử dụng giọng nói để thêm khoản chi tiêu nhanh chóng hơn!
      </Text>
      <Text style={styles.text}>Hoặc nhập tay khoản chi tiêu</Text>
      <View style={styles.dateinput}>
        <Text style={{fontSize: 13, color: '#979797'}}>Ngày</Text>
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onDateChange}
          style={{width: 130, justifyContent: 'center'}}
        />
      </View>
      <InputAmount amount={amount} setAmount={setAmount} />
      <SelectCategories
        categories={categories}
        setFullCategory={setFullCategory}
        placeholder="Chọn Danh mục chi tiêu hoặc Ngân sách được nạp"
      />
      <SimpleTextInput
        text={note}
        setText={setNote}
        placeholder={'Ghi chú cho khoản chi tiêu (không bắt buộc)'}
      />

      <SelectCategories
        categories={moneySource}
        setFullCategory={setBudget}
        placeholder="Chọn ngân sách của khoản chi tiêu"
        shouldChooseSubCategory={false}
      />
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0066B3',
  },
  iconWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: 97,
    width: 97,
    borderRadius: 68,
    backgroundColor: 'white',
  },
  text: {
    marginTop: 17,
    color: 'white',
    fontSize: 12,
    alignSelf: 'center',
    fontStyle: 'italic',
  },
  dateinput: {
    backgroundColor: 'white',
    height: 58,
    paddingHorizontal: 31,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
  },
};
export default AddExpense;
