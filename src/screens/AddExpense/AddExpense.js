import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native';
import IconText from '../../components/icons/IconText';
import InputAmount from '../../components/InputAmount';
import SimpleTextInput from '../../components/SimpleTextInput';
import SelectCategories from '../../components/SelectCategories';
import {categories, moneySource} from '../../../fakeData';
import RecordModal from '../../components/RecordModal';
const AddExpense = ({route, navigation}) => {
  const [amount, setAmount] = useState('');
  const [fullCategory, setFullCategory] = useState('');
  const [recordFilePath, setRecordFilePath] = useState('');
  const [showVoiceRecordingModal, setShowVoiceRecordingModal] = useState(false);
  const [voiceRecognitionResult, setVoiceRecognitionResult] = useState('');

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
      <InputAmount amount={amount} setAmount={setAmount} />
      <SelectCategories
        categories={categories}
        setFullCategory={setFullCategory}
        placeholder="Chọn Danh mục chi tiêu hoặc Ngân sách được nạp"
      />
      <SimpleTextInput placeholder="Ghi chú cho khoản chi tiêu (không bắt buộc)" />
      <SelectCategories
        categories={moneySource}
        setFullCategory={setFullCategory}
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
};
export default AddExpense;
