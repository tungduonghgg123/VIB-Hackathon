import React, {useState} from 'react';
import Dashboard from './Dashboard';
import DashboardViewModel from './DashboardViewModel';

const DashboardController = ({navigation}) => {
  const [imageHeight, setImageHeight] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = destination => () => {
    navigation.navigate(destination);
  };

  return (
    <>
      <DashboardViewModel setLoading={setLoading} setError={setError} />
      <Dashboard
        imageHeight={imageHeight}
        setImageHeight={setImageHeight}
        loading={loading}
        error={error}
        navigate={navigate}
      />
    </>
  );
};

export default DashboardController;
