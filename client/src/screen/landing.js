

import './landing.css';
import xyz from '../images/mainimg.gif';
import img2 from '../images/sideimg.png';
import img3 from '../images/codingbg.gif';
import awanish from '../images/am.png'
import NavBar from '../Header/navbar';
import AboutDeveloper from './aboutdeveloper';
import { useState } from 'react';
import { MessageAction } from '../Action/messageaction';
import { useDispatch, useSelector } from 'react-redux';
import { MessageReducer } from '../Reducer/messagereducer';
const LandingScreen = () => {

  const messred = useSelector(state=>state.MessageReducer)

  const {loading , success , error } = messred

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')

const dispatch = useDispatch()

  const submitit = (e) => {

    e.preventDefault()

    const messagesend = {
      name : name ,
      email : email ,
      message : message
    }

    
dispatch(MessageAction(messagesend))

   


  }




  return (



    <div>

      <div className="grid" >



        <h1 id="introtext" >

          Welcome  <br />
          To <br />
          Freedemy
          <br />

          <span id="lowertext" > One Stop destination to learn latest skills for free </span>



        </h1>








        <p >


          <img src={xyz} id="sidei" />



        </p>


      </div>



      <h5 id="middlealign">About Freedemy</h5>
      <br />




      <div className="grid" >


        <p  >
          <img src={img3} id="sidei" />
        </p>


        <p id="sidetext" >
          FreeDemy is a college project made <br /> by Awanish Mishra . It's  made with a <br />
          purpose of providing free platform <br /> where anyone can learn any skill . <br />
          Copyright remains to  respective owners .<br />
          Register yourself and join the network ,
          and learn most demanding skills for no cost from best tutors around the world .

          <br /><br />

          HAPPY LEARNING !



        </p>


      </div>






      <h5 id="middlealign">Contact Freedemy</h5>


      <div className="grid" >

        <p>

          <img id="sidei" src='https://cdn.dribbble.com/users/1976453/screenshots/6800677/contacts-plus-illustrations.jpg' ></img>

        </p>



        <p id="contact" >
          <h2> Get In Touch </h2>
          <br />
          <form onSubmit={submitit} id="formstyle" >
            <input type="text" value={name} placeholder="Enter  Name*" required
id="formstyle" 
              onChange={(e) => { setname(e.target.value) }}

            />
            <br /> <br />
            <input type="text" value={email} placeholder="Enter  Email Address*" required
id="formstyle" 
              onChange={(e) => { setemail(e.target.value) }}

            />
            <br /> <br />
            <input type="text" value={message} placeholder="Enter  Message*" required id="message"
            
            onChange={ (e)=>{ setmessage(e.target.value) } }
            />

            <br /> <br /> <br />
            <button id="btn" value='submit' > Submit </button>

          </form>
          { success && ( <span  style={{ fontSize: "25px", color: '#023047' }} >Message Sent</span>  ) }
                        { error && ( <span  style={{ fontSize: "25px", color: '#023047' }} >Something Went Wrong</span>  ) }
          <br />
          <p id="puthere" className="lastmessage" ></p>

        </p>


      </div>


      <br /> <br /> <br />

      {/* <h1 id="abtd" >About Developer</h1> */}
      {/* 
<div className="grid" >


<p>
<img src={awanish} />




    </p>



    <p>

    <h1 id="am" >Awanish  Mishra</h1>

    <h4 id="abouttext" > 3rd Year student at JIIT Noida</h4>
    <i class="fa fa-phone" aria-hidden="true" id="lowertext" >+91-9599150262</i> 
    <br/>
    <i class="fas fa-envelope" aria-hidden="true" id="lowertext" ></i> 
    <span id="lowertext" style={{fontSize:'20px'}} >
    awanishmishra003@gmail.com
        </span>
     

    </p>


 

</div>


<div className="grid3" >

    <p>
        <a href="https://www.linkedin.com/in/awanish-mishra-941a93195/" style={{color:'black'}} target="_blank" title="connect through LinkeDin">
        <i class="fab fa-linkedin-in"></i>
        </a>
        </p>
    <p>
    <a href="https://github.com/hsinawa" style={{color:'black'}} target="_blank" title="connect through Github">
        <i class="fab fa-github"></i>
        </a>
        </p>
    <p>
    <a href="https://www.instagram.com/awanish.mishra/" style={{color:'black'}} target="_blank" title="connect through Instagram" >
        <i class="fab fa-instagram"></i>
        </a>
        </p>

</div> */}

      <AboutDeveloper />



    </div>
  );
}

export default LandingScreen;
