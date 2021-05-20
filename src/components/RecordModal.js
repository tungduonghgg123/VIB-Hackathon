import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import defaultStyle from '../defaultStyle';
import IconText from './icons/IconText';
import AudioRecord from 'react-native-audio-record';
import {LogBox} from 'react-native';
const options = {
  sampleRate: 16000, // default 44100
  channels: 1, // 1 or 2, default 1
  bitsPerSample: 16, // 8 or 16, default 16
  audioSource: 6, // android only (see below)
  wavFile: 'test.wav', // default 'audio.wav'
};
LogBox.ignoreLogs(['Sending `data` with no listeners registered.']);
const RecordModal = ({isVisible, toggleModal, setRecordFilePath}) => {
  const [isRecording, setIsRecording] = useState(false);
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
    <Modal
      isVisible={isVisible}
      style={{
        backgroundColor: 'white',
        flex: 0,
        marginTop: 50,
        justifyContent: 'flex-start',
        borderColor: defaultStyle.primaryColor,
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: defaultStyle.borderRadius,
        padding: 13,
      }}>
      <View style={{alignItems: 'flex-end'}}>
        <IconText iconName="close" color="black" onPress={toggleModal} />
      </View>
      <View style={{alignItems: 'center'}}>
        <IconText
          iconName="lightbulb"
          iconSize={18}
          color={defaultStyle.primaryColor}
          direction="row"
          text="Hướng dẫn sử dụng giọng nói"
          textStyle={{
            fontWeight: 'bold',
            fontSize: 15,
          }}
          disabled={true}
        />
      </View>
      <View style={{marginVertical: 24}}>
        <Text style={{fontSize: 12, textAlign: 'center'}}>
          Ghi âm lại theo mẫu câu dưới đây để hệ thống dễ dàng nhận diện:
        </Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', textAlign: 'center'}}>
          "[Ngày], tôi đã tiêu [số tiền], từ [ loại ngân sách], cho [danh mục
          chi tiêu]"
        </Text>
      </View>
      <Text style={{fontSize: 12, fontStyle: 'italic'}}>
        Ví dụ:{'\n'}Hôm nay tôi đã tiêu 200 ngàn đồng từ ngân sách tiền mặt cho
        mua mua sắm quần áo
      </Text>
      <View style={styles.iconWrapper}>
        <IconText
          iconName={isRecording ? 'more-horiz' : 'mic'}
          iconSize={77}
          color="white"
          onPress={voiceInputHandler}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          fontStyle: 'italic',
          textAlign: 'center',
          marginTop: 13,
        }}>
        Nhấn để bắt đầu ghi âm
      </Text>
    </Modal>
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
    backgroundColor: defaultStyle.primaryColor,
  },
  text: {
    marginTop: 17,
    color: 'white',
    fontSize: 12,
    alignSelf: 'center',
    fontStyle: 'italic',
  },
};
export default RecordModal;
