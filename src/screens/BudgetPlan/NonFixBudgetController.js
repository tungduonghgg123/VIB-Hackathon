import React, {useState} from 'react';
import NonFixBudget from './NonFixBudget';
import NonFixBudgetViewModel from './NonFixBudgetViewModel';

const NonFixBudgetController = ({route, navigation}) => {
  const [data, setData] = useState();

  return (
    <>
      <NonFixBudget data={data} />
      <NonFixBudgetViewModel setData={setData} />
    </>
  );
};
export default NonFixBudgetController;
