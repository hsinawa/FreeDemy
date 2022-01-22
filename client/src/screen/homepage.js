import React from "react";
import './homescreendes.css'
import AboutDeveloper from './aboutdeveloper';
import { useHistory } from "react-router";

const HomePage=()=>{


  const  currentuser = JSON.parse(localStorage.getItem('currentuser'))

const history = useHistory()

    return(
        <div>
            
       

            {/* <div className="welcomebg" ></div> */}
            <br/><br/><br/>
            <div className="welcometext" >
{/* <img  src='https://media.istockphoto.com/vectors/hand-wave-waving-hi-or-hello-gesture-line-art-vector-icon-for-apps-vector-id1139862205?k=20&m=1139862205&s=612x612&w=0&h=jiaNzHLsqiVAS6EQ5ATjn6vl7zEWZP7THNMNitGFTWg=' id="image" /> */}


                Hello  , {currentuser.name}  !
            </div>


            <div className="grid" >

               

                <img src='https://c.tenor.com/NOYF3f82b_gAAAAC/programmer.gif'  id="image"  />

            </div>

<br/><br/><br/><br/>
<h1>Courses on Web Development</h1>
<div className="gridnew" >
  


<div className="overframe"  >

<a href="/webdevv/frontend" style={{color:'black'}}> 
<div class="container">
    <img src='https://trio.dev/static/46a74b0f7c9b47353ea207a29731bc51/263a75529a1752b75d64f9f21fd07c92.jpg' id="styleimg" />
  <p>Complete Front End</p>
  </div>
  </a>
</div>



  
<div className="overframe" >

<a href="/webdevv/django" style={{color:'black'}}> 
<div class="container">
    <img src='https://freehali.com/freehali-assets/uploads/2018/06/djangoweb.jpg' id="styleimg" />
  <p>HTML , CSS , Python & Django <br/>  Full Stack Web Development</p>
  </div>
</a>
</div>



<div className="overframe" >


<a href="/webdevv/mernstack" style={{color:'black'}}> 
<div class="container">
    <img src='https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg' id="styleimg" />
  <p>React-The Complete 2021 <br/>  Guide with NodeJS and MongoDB</p>
  </div>
</a>
</div>




</div>












<br/><br/><br/><br/>
<h1>Courses on C++</h1>
<div className="gridnew" >
  

  
<div className="overframe" >
<a href="/c++/PrateekNarang" style={{color:'black'}}> 
<div class="container">
    <img src='https://cdn.educba.com/academy/wp-content/uploads/2015/08/Data-Structures-and-Algorithms-C-1.jpg' id="styleimg" />
  <p>Learn DSA in C++ By Prateek Narang</p>
  </div>
</a>
</div>



  
<div className="overframe" >

<a href="/c++/stl" style={{color:'black'}}> 

<div class="container">
    <img src='https://i.imgur.com/VW3m9xM.jpg' id="styleimg" />
  <p>STL in C++</p>
  </div>
</a>

</div>




<div className="overframe" >

<a href="/c++/abdulbari" style={{color:'black'}}> 

<div class="container">
    <img src='https://freecourseudemy.com/wp-content/uploads/2019/07/Learn-C-Programming-Beginner-To-Advance-Deep-Dive-In-C.jpg' id="styleimg" />
  <p>Mastering Data Structures & Algorithms using C and C++</p>
  </div>
</a>

</div>





</div>










<br/><br/><br/><br/>



<h1>Courses on Machine Learning</h1>




<div className="gridnew" >
  

  
<div className="overframe"  id="onlyonecourse" >
<a href="/ml/introductiontoml" style={{color:'black'}}> 
<div class="container" >
    <img src='https://velocityglobal.com/wp-content/uploads/2019/02/Blog-Images-Forget-Machine-Learning-Humans-Still-Have-a-Lot-to-Learn-Part-II.jpg' id="styleimg"  />
  <p>Introduction to ML</p>
  </div>
</a>
</div>



</div>










<br/><br/><br/><br/>



<h1>Courses on Block Chain</h1>




<div className="gridnew" >
  

  
<div className="overframe" id="onlyonecourse" >

<a href="/blockchain/bootcamp" style={{color:'black'}}> 
<div class="container" >
    <img src='https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2017/07/blockchain.jpg' id="styleimg"  />
  <p>Blockchain Developer Bootcamp </p>
  </div>
</a>
</div>



</div>





















<br/><br/><br/><br/>



<h1>Courses on Cyber Security</h1>




<div className="gridnew" >
  

  
<div className="overframe" id="onlyonecourse" >
<a href="/cybersecurity/ethicalhacking" style={{color:'black'}}> 
<div class="container" >
    <img src='https://leverageedu.com/blog/wp-content/uploads/2020/09/how-to-become-an-ethical-hacker.png' id="styleimg"  />
  <p>Learn Ethical Hacking From Scratch </p>
  </div>
</a>
</div>



</div>


























<br/><br/><br/><br/>
<br/><br/><br/><br/>
<br/><br/><br/><br/>




<AboutDeveloper/>



        </div>
    )




}




export default HomePage;
