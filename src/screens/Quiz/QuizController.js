import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import Quizbudget from './QuizBudget';
import QuizFixCost from './QuizFixCost';
import Quizavecost from './QuizAveCost';
import Quizgoal from './QuizGoal';
import {HeaderBackButton} from '@react-navigation/stack';

import {LogBox} from 'react-native';
import {QuizViewModel, Quiz} from './QuizViewModel';
LogBox.ignoreLogs(['Cannot update a component']); // Ignore log notification by message

const QuizController = ({navigation}) => {
  const QuizViewModelRef = useRef({});
  const [step, setStep] = useState(0);
  const [quiz, setQuiz] = useState(new Quiz());
  const [quizResult, setquizResult] = useState();

  const onPressNext = () => setStep(step + 1);
  const onPressBack = () => setStep(step - 1);

  navigation.setOptions({
    headerLeft: props => (
      <HeaderBackButton
        {...props}
        onPress={() => {
          switch (step) {
            case 0:
              props.onPress();
              break;
            case 1:
            case 2:
            case 3:
              onPressBack();
          }
        }}
      />
    ),
  });
  if (quizResult) {
    navigation.navigate('Overview');
  }
  return (
    <View style={{flex: 1}}>
      <QuizViewModel
        myRef={QuizViewModelRef}
        submitQuizResult={setquizResult}
      />
      {step === 0 && (
        <Quizbudget onPressNext={onPressNext} data={quiz} setData={setQuiz} />
      )}
      {step === 1 && (
        <QuizFixCost data={quiz} onPressNext={onPressNext} setData={setQuiz} />
      )}
      {step === 2 && (
        <Quizavecost data={quiz} onPressNext={onPressNext} setData={setQuiz} />
      )}
      {step === 3 && (
        <Quizgoal
          data={quiz}
          onPressNext={() => {
            QuizViewModelRef.current.submitQuiz({
              variables: {
                input: quiz,
              },
            });
          }}
          setData={setQuiz}
        />
      )}
    </View>
  );
};
export default QuizController;
