import React, { useContext } from 'react'
import Header from './Header';
import {ScoreContext} from '../components/scoreContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AssessmentResult = () => {
    const navigate = useNavigate();
    const {score, suggestion} = useContext(ScoreContext);
    
    // const score = useContext(ScoreContext);

    const NavigateToDoctors = () =>{
        navigate('/doctors');
    }
  return (
    <>
    <Header/>

    <ResultCont>
        <Label>Your Mental Score is: {parseFloat(score.toFixed(2))}</Label>
        <br></br>
        <Para>{suggestion}</Para>
        <Button onClick={NavigateToDoctors}>Chat with Doctors</Button>
    </ResultCont>

    </>
  )
}

export default AssessmentResult;

const ResultCont  = styled.div`
    height: 500px;
    width: 1200px;
    text-align: center;
    
`;

const Label = styled.label`
    font-size: 50px;
`;

const Para = styled.p`
    font-size: 40px;
    color: grey;
`

const Button = styled.button`
    border: 1px solid black;
    border-radius: 5px;
    height: 40px;
    width: 100px;
    color: grey;
    &:hover{
        color: blue;
    }
`