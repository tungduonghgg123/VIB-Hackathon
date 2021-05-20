import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native';
import IconText from '../../components/icons/IconText';
import InputAmount from '../../components/InputAmount';
import SimpleTextInput from '../../components/SimpleTextInput';
import SelectCategories from '../../components/SelectCategories';
import AudioRecord from 'react-native-audio-record';
import {categories, moneySource} from '../../../fakeData';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Sending `data` with no listeners registered.']);

const options = {
  sampleRate: 16000, // default 44100
  channels: 1, // 1 or 2, default 1
  bitsPerSample: 16, // 8 or 16, default 16
  audioSource: 6, // android only (see below)
  wavFile: 'test.wav', // default 'audio.wav'
};
const AddExpense = ({route, navigation}) => {
  const [amount, setAmount] = useState('');
  const [fullCategory, setFullCategory] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recordFilePath, setRecordFilePath] = useState('');
  const startRecording = () => {
    AudioRecord.start();
    setIsRecording(true);
  };
  const stopRecording = async () => {
    const audioFilePath = await AudioRecord.stop();
    setRecordFilePath(audioFilePath);
    setIsRecording(false);
  };
  const voiceInputHandler = async () => {
    if (!isRecording) {
      startRecording();
      return;
    }
    stopRecording();
  };
  useEffect(() => {
    AudioRecord.init(options);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconWrapper}>
        <IconText
          iconName={isRecording ? 'more-horiz' : 'mic'}
          iconSize={77}
          color="#0066B3"
          onPress={voiceInputHandler}
        />
      </View>
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
