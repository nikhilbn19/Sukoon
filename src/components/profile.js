import React, { useContext, useEffect, useState } from 'react';
// import { UserContext } from './userContext'; // Assuming you have a UserContext
import { AuthContext } from './authContext';
import styled from 'styled-components';
import Header from './Header';

const Profile = ({storedUser,storedEmail}) => {
  const { user,email } = useContext(AuthContext); // Access user data from context
  const [assessmentResults, setAssessmentResults] = useState(() =>{
    const storedResults = sessionStorage.getItem('assessmentResults');
    return storedResults ? JSON.parse(storedResults) : [];
  }); // State for assessment results

  // Fetch assessment results on component mount
  useEffect(() => {
    const fetchResults = async () => {
      console.log(user);
      try {
        const response = await fetch(`http://localhost:3001/assessments/user/${user}`); // Replace with your API endpoint
        console.log(response);
        const data = await response.json();
        const filteredResults = data.filter((result) => result.user === user);
        setAssessmentResults(filteredResults); // Filter results for current user
        sessionStorage.setItem('assessmentResults', JSON.stringify(filteredResults));
      } catch (error) {
        console.error('Error fetching assessment results:', error);
      }
    };
    if(user){
    fetchResults();
    }
  },[user]); // Refetch results if user ID changes

  return (
    <>
    <Header/>
    <ProCont>
      <ProLeft>
        <ProPic></ProPic>
        <ProInfo>
          <h2>{user}</h2>
          <p>{email}</p>
        </ProInfo>
      </ProLeft>
      <ProRight>
        {assessmentResults.map((assessment,index) =>{
          return (
          <AssessBox key={index}>
            <p>Date: {assessment.date}</p>
            <p>Score: {assessment.normalizedScore}</p>
            <p>Suggestion: {assessment.textSuggestion}</p>
          </AssessBox>
          );
        })}
        {assessmentResults.length === 0 && <p>No assessment results found.</p>}
      </ProRight>
    </ProCont>
    </>
  );
};

export default Profile;

const ProCont = styled.div`
  ${'' /* margin: 0px;
  top: 0px;
  display: flex;
  height: 100%;
  width: 100%;
  border: 1px solid #000; */}
  display: flex;
  height: 540px;
  width: 1250px;
  border: 2px solid black;
  
`;

const ProLeft = styled.div`
  width: 20%;
  padding: 20px;
  border-right: 2px solid #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${'' /* justify-content: center; */}
`;

const ProPic = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ddd;
  margin-bottom: 20px;
  top: 0px;  
`;

const ProInfo = styled.div`
  text-align: center;
`;

const ProRight = styled.div`
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
`;

const AssessBox = styled.div`
  border: 2px solid #000;
  padding: 10px;
  margin-bottom: 10px;
`;