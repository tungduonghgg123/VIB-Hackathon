import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import defaultStyle from '../defaultStyle';
const LoadingOverlay = ({isVisible, shouldShowError}) => {
  return (
    <Modal
      isVisible={isVisible}
      style={{
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
      }}>
      {!shouldShowError && (
        <ActivityIndicator size="large" color={defaultStyle.primaryColor} />
      )}
      {shouldShowError && (
        <Text
          style={{
            fontSize: 12,
            color: defaultStyle.primaryColor,
            marginTop: 13,
          }}>
          Đã có lỗi xảy ra, vui lòng thử lại.
        </Text>
      )}
    </Modal>
  );
};

export default LoadingOverlay;
