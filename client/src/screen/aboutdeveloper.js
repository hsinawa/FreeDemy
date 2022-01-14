import React from "react";
import awanish from '../images/am.png'


const AboutDeveloper=()=>{




    return(
        <div>
            
            
<h1 id="abtd" >About Developer</h1>

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

</div>






        </div>
    )




}




export default AboutDeveloper;