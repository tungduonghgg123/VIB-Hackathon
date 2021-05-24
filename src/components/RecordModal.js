import React, {useEffect, useState} from 'react';
import {Text, View, LogBox} from 'react-native';
import Modal from 'react-native-modal';
import defaultStyle from '../defaultStyle';
import IconText from './icons/IconText';
import AudioRecord from 'react-native-audio-record';
import RNFetchBlob from 'rn-fetch-blob';
// const audioFilePath =
//   '/var/mobile/Containers/Data/Application/6DD5CA54-43C0-4721-A877-015C8C542CD9/Documents/test.wav';

const voiceToText = async recordPath => {
  try {
    const json = await RNFetchBlob.fetch(
      'POST',
      'http://server.etronresearch.work:3939/v1/api/asr',
      {
        'Content-Type': 'multipart/form-data',
      },
      [
        {
          name: 'audio',
          filename: 'test.wav',
          type: 'application/wav',
          data: RNFetchBlob.wrap(recordPath),
        },
      ],
    );
    return JSON.parse(json.data);
  } catch (e) {
    console.log(e);
    return -1;
  }
};
const options = {
  sampleRate: 16000, // default 44100
  channels: 1, // 1 or 2, default 1
  bitsPerSample: 16, // 8 or 16, default 16
  audioSource: 6, // android only (see below)
  wavFile: 'test.wav', // default 'audio.wav'
};
LogBox.ignoreLogs(['Sending `data` with no listeners registered.']);

const RecordModal = ({isVisible, toggleModal, setVoiceRecognitionResult}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [voicePath, setVoicePath] = useState('');
  const [showError, setShowError] = useState(false);

  const startRecording = () => {
    AudioRecord.start();
    setIsRecording(true);
  };
  const stopRecording = async () => {
    const audioFilePath = await AudioRecord.stop();
    setVoicePath(audioFilePath);
    setIsRecording(false);
    // Voice to text handling
    const result = await voiceToText(voicePath);
    if (result === -1) {
      setShowError(true);
    } else {
      setVoiceRecognitionResult(result);
      console.log(result);
      // close modal
      toggleModal();
    }
  };
  const voiceInputHandler = async () => {
    if (!isRecording) {
      startRecording();
      return;
    }
    stopRecording();
  };
  useEffect(() => {
    if (showError && isRecording) {
      setShowError(false);
    }
  }, [isRecording, showError]);
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
      {showError && (
        <Text
          style={{
            fontSize: 12,
            color: 'red',
            marginTop: 13,
          }}>
          Đã có lỗi xảy ra, vui lòng thử lại.
        </Text>
      )}
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
