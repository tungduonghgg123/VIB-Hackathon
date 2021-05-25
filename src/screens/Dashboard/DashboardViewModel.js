import React, {useEffect} from 'react';
import {useMutation} from '@apollo/client';
import {storeData} from '../../helper/asyncStorage';
import {REGISTER_USER} from '../../model/query';
import {View} from 'react-native';

const DashboardViewModel = ({setError, setLoading}) => {
  const [registerUser, {data, loading, error}] = useMutation(REGISTER_USER);
  useEffect(() => {
    registerUser();
  }, [registerUser]);
  useEffect(() => {
    if (data) {
      console.log(data.registerUser.id);
      storeData('userid', data.registerUser.id);
    }
  }, [data]);
  useEffect(() => {
    setLoading(loading);
    setError(error);
  }, [loading, error]);
  return <View />;
};

export default DashboardViewModel;
