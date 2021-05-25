import React, {useEffect, useState} from 'react';
import {useMutation} from '@apollo/client';
import {storeData} from '../../helper/asyncStorage';
import {REGISTER_USER} from '../../model/query';
import Dashboard from './Dashboard';

const DashboardController = ({navigation}) => {
  const [imageHeight, setImageHeight] = useState(0);
  const [registerUser, {data, loading, error}] = useMutation(REGISTER_USER);
  const navigate = destination => () => {
    navigation.navigate(destination);
  };
  useEffect(() => {
    registerUser();
  }, [registerUser]);
  useEffect(() => {
    if (data) {
      storeData('userid', data.registerUser.id);
    }
  }, [data]);
  return (
    <Dashboard
      imageHeight={imageHeight}
      setImageHeight={setImageHeight}
      loading={loading}
      error={error}
      navigate={navigate}
    />
  );
};

export default DashboardController;
