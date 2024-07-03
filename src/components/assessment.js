import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './userContext';
import axios from 'axios';
import { ScoreContext } from './scoreContext';
import Header from './Header';
import '../assets/css/Assessment.css'
const Assesment = () => {
  const { setScore, setSuggestion } = useContext(ScoreContext);
  const userId = useContext(UserContext);
  const [clickedCircles, setClickedCircles] = useState({});
  const navigate = useNavigate();
  const [assessSubmit,setAssessSubmit] = useState(true);
  const [responses, setResponses] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
    q8: null
  });

  const weights = {
    q1: 1,
    q2: 3,
    q3: 3,
    q4: 1,
    q5: 2,
    q6: 1,
    q7: 1,
    q8: 3
  };

  const CalculateFinalScore = (responses, weights) => {
    const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
    const weightedSum = Object.keys(responses).reduce((sum, key) => {
      return sum + (responses[key] * weights[key]);
    }, 0);

    const maxScore = 5 * totalWeight;
    const minScore = 1 * totalWeight;
    let normalizedScore = ((weightedSum - maxScore) / (maxScore - minScore)) * 100;
    if (normalizedScore < 0) {
      normalizedScore *= -1;
    }
    let status, suggestion;

    if (normalizedScore >= 80) {
      status = "Excellent";
      suggestion = "Keep up the good work! Maintain your positive habits.";
    } else if (normalizedScore >= 60) {
      status = "Good";
      suggestion = "You are doing well. Continue to focus on your mental well-being.";
    } else if (normalizedScore >= 40) {
      status = "Average";
      suggestion = "It's important to take some time for self-care and relaxation.";
    } else {
      status = "Below Average";
      suggestion = "Consider seeking professional help or talking to someone you trust.";
    }
    return { normalizedScore, suggestion };
  };

  const handleClick = (question, value) => (e) => {
    e.preventDefault();
    setResponses(prevState => ({
      ...prevState,
      [question]: value
    }));
    setClickedCircles(prevState => ({
      ...prevState,
      [`${question}-${value}`]: !prevState[`${question}-${value}`]
    }));
  };

  const renderQuestion = (questionKey, questionText) => (
    <div className='QuestionCont' key={questionKey}>
      <QuestionText>{questionText}</QuestionText>
      <div className='ValueCont'>
        {[1, 2, 3, 4, 5].map(num => (
          <Circle
            key={`${questionKey}-${num}`}
            onClick={handleClick(questionKey, num)}
            clicked={clickedCircles[`${questionKey}-${num}`]}
          >
            {num}
          </Circle>
        ))}
      </div>
      <ScaleDescription>1 being Not at all, 5 being Nearly every day</ScaleDescription>
    </div>
  );

  const submitAssessment = async (score, suggestion) => {
    try {
      const userName = sessionStorage.getItem('userName');
      const userEmail = sessionStorage.getItem('userEmail');

      const response = await axios.post('http://localhost:3001/assessments/create', {
        userId: userEmail,
        userName: userName,
        normalizedScore: score,
        textSuggestion: suggestion
      });

      if (response.status === 200) {
        navigate('/assessmentResult');
      } else {
        console.error('Error submitting assessment:', response.data);
      }
    } catch (error) {
      console.error('Error sending assessment:', error);
    }
  };

  const navigateToResult = async (e) => {
    e.preventDefault();
  
    if(Object.values(responses).every(response => response === null)) {

      setAssessSubmit(false);
      navigate('/assessment');
    }
    else{
      const { normalizedScore, suggestion } = CalculateFinalScore(responses, weights);
      setScore(normalizedScore);
      setSuggestion(suggestion);
      submitAssessment(normalizedScore, suggestion);
    }
  };

  return (
    <>
    <Header/>
    <AssessCont>
      <HeadLine>Over the last 2 weeks, how often have you been bothered by any of the following problems?</HeadLine>
      <QuestCont>
        <form id='form' type="get">
          {renderQuestion('q1', 'Little interest or pleasure in doing things')}
          {renderQuestion('q2', 'Feeling down, depressed, or hopeless')}
          {renderQuestion('q3', 'Trouble falling or staying asleep, or sleeping too much')}
          {renderQuestion('q4', 'Feeling tired or having little energy')}
          {renderQuestion('q5', 'Poor appetite or overeating')}
          {renderQuestion('q6', 'Feeling bad about yourself or that you are a failure or have let yourself or your family down')}
          {renderQuestion('q7', 'Trouble concentrating on things, such as reading the newspaper or watching television')}
          {renderQuestion('q8', 'Thoughts that you would be better off dead, or of hurting yourself')}
          <SubmitButton onClick={navigateToResult}>Submit</SubmitButton>
          {assessSubmit ? <p></p>: <p style={{fontSize: '20px', color: 'red', textAlign: 'center'}}>Answer all the questions</p>}
        </form>
      </QuestCont>
    </AssessCont>
    </>
  );
};

export default Assesment;

const AssessCont = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  margin-top: 500px;
  background-color: #fff;
`;

const QuestCont = styled.div`
  margin-top: 60px;
  padding-left: 20px;
  font-size: 20rem;
`;

const HeadLine = styled.h2`
  margin-top:50px;
  font-size: 24px;
  text-align: center;
  color: #5a5a5a;
`;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const QuestionText = styled.h4`
  font-size: 18px;
  color: #333;
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`;

const Circle = styled.button`
    width: 50px;
    height: 50px;
    background-color: ${props => props.clicked ? 'blue' : 'white'};
    color: ${props => props.clicked ? 'white' : 'blue'};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    border: 2px solid black;
    margin-right: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
`;

const ScaleDescription = styled.p`
  font-size: 15px;
  color: #888;
  text-align: center;
`;

const SubmitButton = styled.button`
  background-color: #007BFF;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px auto;
  display: block;
  &:hover {
    background-color: #0056b3;
  }
`;
