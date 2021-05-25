import React, {useState} from 'react';

import Overview from './Overview';
import OverviewViewModel from './OverviewViewModel';

const OverviewController = ({route, navigation}) => {
  const [data, setData] = useState();
  const navigate = destination => () => {
    navigation.navigate(destination);
  };
  return (
    <>
      <Overview data={data} navigate={navigate} />
      <OverviewViewModel setData={setData} />
    </>
  );
};
export default OverviewController;
