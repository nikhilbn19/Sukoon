import React,{useState,useContext,useEffect} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Doctors from './components/Doctors';
import Book from './components/Book';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import { BlogBox } from './components/Blogs';
import './App.css'; // Import your CSS file if needed
import Chatbot from './components/Chatbot';
import Login from './components/login';
import { AuthContext, AuthProvider } from './components/authContext';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { UserContext } from './components/userContext';
import { ScoreProvider } from './components/scoreContext';
import Assesment from './components/assessment';
import Profile from './components/profile';
import styled from 'styled-components';
import AssessmentResult from './components/assessmentResult';

// function App() {

//   const [userId,setUserId] = useState(null);

//   const handleUserIdUpdate = (newUserId) =>{
//     setUserId(newUserId);
//   }
//   return (
//     <AuthProvider onUserIdUpdate={handleUserIdUpdate}>
//     <div className="App">
//       {/* <Login/> */}
//       <Header />
//       <Home />
//       <About />
//       <Doctors />
//       <Book />
//       <Blogs />
//       <Chatbot/>
//       <Footer />
//     </div>
//     </AuthProvider>
//   );
// }

const App = () => {
  const {user,email,isLoggedIn} = useContext(AuthContext);

  const [userId, setUserId] = useState(null); 

  const handleUserIdUpdate = (newUserId) => {
    setUserId(newUserId);
  };

  useEffect(() =>{
      const storedUser = sessionStorage.getItem('userName');
      const storedEmail = sessionStorage.getItem('userEmail');
      if(storedUser && storedEmail){
        setUserId(storedUser);
      }
  })
 


  return (
    <Body>
    <AuthProvider onUserIdUpdate={handleUserIdUpdate}>
    <UserContext.Provider value={user ||{}}>
    <ScoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/login' element={<Login setIsLogIn={false} setState={false} />}/>
          <Route path='/register' element={<Login setState={true}/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/book' element={<Book/>}/>
          <Route path='/assessment' element={<Assesment/>}/>
          <Route path='/profile' element={<Profile storedUser={userId} storedEmail={email}/>}/>
          <Route path='/chatbot' element={<Chatbot/>}/>
          <Route path='/assessmentResult' element={<AssessmentResult/>}/>
        
        </Routes>
      </BrowserRouter>
      </ScoreProvider>
      </UserContext.Provider>
      </AuthProvider>
      </Body>
  );
}

export default App;

const Body = styled.div`
    background-color: #fff;
`;
