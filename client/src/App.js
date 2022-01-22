
import './App.css';


import NavBar from './Header/navbar';
import LandingScreen from './screen/landing'
import LoginFreedemy from './screen/screen';
import RegisterFreedemy from './screen/register';
import HomePage from './screen/homepage';
import AboutDeveloper from './screen/aboutdeveloper';
import { BrowserRouter as Router ,  Route } from "react-router-dom";
import {Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import BockChain from './Courses/BlockChain';
import FrontEnd from './Courses/completefrontend';
import Django from './Courses/django';
import EthicalHacking from './Courses/ethicalhacking';
import MERNSTACK from './Courses/mernstack';
import MachineLearning from './Courses/MLbasic';
import STL from './Courses/stl';
import DSA from './Courses/web';
import  UserProfile  from './screen/profile';
import LogoutOOPS from '../src/oops';
import MessageScreen from '../src/Courses/messagescreen'
import Loader from './loader';
import './loader.css';
import AbdulBari from './Courses/abdulbari';
import AdminScreen from './adminscreen';


function App() {


  const submitit=()=>{
   
    document.getElementById('puthere').innerHTML='Submitted Successfully'
  }


  const currentuser = JSON.parse(localStorage.getItem('currentuser'))

  return (



    <div className="App">


      <NavBar/>
      <br/> 
      <Router>
      <Switch>
       <Route exact path="/" ><LandingScreen/></Route>
       <Route  path="/login" ><LoginFreedemy/></Route>
   
      
     <Route  path="/signup" ><RegisterFreedemy/></Route>
     <Route  path="/oops" ><LogoutOOPS/></Route>

      { currentuser ? ( <Route  path="/homepage"><HomePage/></Route> ) : ( <LogoutOOPS/> ) }
      { currentuser ? ( <Route  path="/webdevv/frontend"><FrontEnd/></Route> ) : (  <LogoutOOPS/> ) }
   
      { currentuser ? ( <Route  path="/webdevv/django"><Django/></Route> ) : (  <LogoutOOPS/> ) }
      { currentuser ? ( <Route  path="/webdevv/mernstack"><MERNSTACK/></Route> ) : (  <LogoutOOPS/> ) }
      { currentuser ? ( <Route  path="/c++/PrateekNarang"><DSA/></Route> ) : (  <LogoutOOPS/> ) }
      { currentuser ? ( <Route  path="/c++/stl"><STL/></Route> ) : (  <LogoutOOPS/> ) }
      { currentuser ? ( <Route  path="/ml/introductiontoml"><MachineLearning/></Route> ) : (  <LogoutOOPS/> ) }
      { currentuser ? ( <Route  path="/blockchain/bootcamp"><BockChain/></Route> ) : (  <LogoutOOPS/> ) }
      { currentuser ? ( <Route  path="/cybersecurity/ethicalhacking"><EthicalHacking/></Route> ) : (  <LogoutOOPS/> ) }

      { currentuser ? ( <Route  path="/userprofile"><UserProfile/></Route> ) : (  <LogoutOOPS/> ) }
    
    
      { currentuser ?( <Route  path="/c++/abdulbari"><AbdulBari/></Route> )  : (  <LogoutOOPS/> ) }
      
     </Switch>
        </Router>

    
      

    
	



    </div>
  );
}

export default App;
