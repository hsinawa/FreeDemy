
import React from 'react'

const Django = () => {

    const show=()=>{
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;
       
        
        for (i = 0; i < dropdown.length; i++) {
          dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
              dropdownContent.style.display = "none";
            } else {
              dropdownContent.style.display = "block";
            }
          });
        }
    }



    return(
        <div>
<iframe id="mainscreen" frameborder="0" 

src="https://drive.google.com/file/d/1nyjcbOwD9_8_724ihbi-rUKwquo6scsq/preview"

name="eduaction"
allowfullscreen />




<div class="sidenav">
            <br></br>


            <button class="dropdown-btn" onClick={show} >1. Do You Know HTML Essentials
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://drive.google.com/file/d/10Bm2J7VPHTUe1q18AGsWp5veueNGh1ab/preview"
target="eduaction"> 
1. Project Files and Course Documents
 </a>



 <a href="https://drive.google.com/file/d/1nyjcbOwD9_8_724ihbi-rUKwquo6scsq/preview"
target="eduaction"> 
2. What is Internet and HTML 
 </a>

 <a href="https://drive.google.com/file/d/19V1tBCajPdkXm5kpAr4P7wHRQYfkAKF9/preview" 
target="eduaction"> 
3. Basic Tags
 </a>



 <a href="https://drive.google.com/file/d/191yhVAluKwbhJ6fP3zzjyjajqEIkq1Dp/preview"
target="eduaction"> 
4. Images and Attributes
 </a>

 <a href="https://drive.google.com/file/d/1vAK6XczH1fv_82cCLo7_2UTonNKWlwW3/preview"
target="eduaction"> 
5. Lists
 </a>



 <a href="https://drive.google.com/file/d/1_9PY42DudaGMCAllurGsZzT-f5r8b9ZN/preview"
target="eduaction"> 
6. List Example
 </a>

 <a href="https://drive.google.com/file/d/1vPNUg3BIrfKT5qOhuhrKLxNbQGgfi8RV/preview"
target="eduaction"> 
7. Block Level - Inline Elements
 </a>
   
    
  </div>

<hr/>

<button class="dropdown-btn" onClick={show} >2. Let's Learn More Complex Topics in HMTL
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/14AYuI2Jg4BmbRe8JXUZ85qsevFNXUcel/preview"
target="eduaction"> 
1. Tables
 </a>



 <a href="https://drive.google.com/file/d/1xzJvajPifoi7pcEjCZvkfbELhceBD_CZ/preview"
target="eduaction"> 
2. Table Example
 </a>

 <a href="https://drive.google.com/file/d/1b391_vHBQS8Krk5AmlsQm0ayImhzooWq/preview"
target="eduaction"> 
3. Forms Example
 </a>




   
 
    
    </div>

<hr/>



<button class="dropdown-btn" onClick={show} >3. Let Me Introduce CSS
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/1TsTayZkm3W6B40X5G8-VC6_NUPSQ0rke/preview"
target="eduaction"> 
1. Let's Meet CSS
 </a>



 <a href="https://drive.google.com/file/d/1tQtCA97CCLgxpouTMQEEJMf9LhkBSpgu/preview"
target="eduaction"> 
2. CSS Basics
 </a>

 <a href="https://drive.google.com/file/d/1jYaps-MHSrlVaHR0j6NFv-hHE7d_1fkA/preview"
target="eduaction"> 
3. CSS Colors
 </a>



 <a href="https://drive.google.com/file/d/1xeJozS_NKlHk8OWghVlUSxHN4AGqMEC7/preview"
target="eduaction"> 
4. Background and Border
 </a>


 <a href="https://drive.google.com/file/d/1fHQr5Uas1tq65U5YP3zOx_bykJTF7EVO/preview"
target="eduaction"> 
5. Selectors
 </a>




   
 
    
    </div>

<hr/>




<button class="dropdown-btn" onClick={show} >4. Intermediate CSS
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/1E_MJ2pBqJcU9c0vrzBbSYNNT-VeS9gZT/preview"
target="eduaction"> 
1. Text and Fonts
 </a>



 <a href="https://drive.google.com/file/d/1VPlU7ReM1tXyLEEYAP3OAFmxIRH0KD7V/preview"
target="eduaction"> 
2. Debugging in CSS
 </a>

 <a href="https://drive.google.com/file/d/1U0XjADUm_kFAfahTk-nFxSxmjrBUzEbF/preview"
target="eduaction"> 
3. Box Model
 </a>



 <a href="https://drive.google.com/file/d/1n7UXOVFQneY0K437W5ltTIVk4JdeNRZf/preview"
target="eduaction"> 
4. CSS Position
 </a>

 <a href="https://drive.google.com/file/d/1e5tB5EgdGsvBS0uLEkTHstPCeV035KQe/preview"
target="eduaction"> 
5. CSS Float
 </a>



 <a href="https://drive.google.com/file/d/1gxQ6lgfJG4ICNY899d5WqrNa34DKjH8-/preview" 
target="eduaction"> 
6. Display Property
 </a>

 <a href="https://drive.google.com/file/d/1JCnBkQ1lbsh8AiBcfO2oBMEwfJeliMSG/preview"
target="eduaction"> 
7. Box-Model Practice
 </a>



 <a href="https://drive.google.com/file/d/1c121UA8vnuPstxis6c3eTF1xZee4b-Zw/preview"
target="eduaction"> 
8. Float-Layout Practice
 </a>

 <a href="https://drive.google.com/file/d/1cKp1oX8VifzKbRhpmQjfUcwHIELK266d/preview"
target="eduaction"> 
9. Box-Sizing
 </a>



 <a href="https://drive.google.com/file/d/1BShmVvB6wGXX4j9O44_s0-X1udXqb9AQ/preview"
target="eduaction"> 
10. Media Queries
 </a>
   
 
    
    </div>

<hr/>






<button class="dropdown-btn" onClick={show} >
5. Flexbox and Grid for CSS
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/1ttkUfDcWJY2xkCL0t9gNWKmreCTUNeV4/preview"
target="eduaction"> 
1. Flexbox Introduction
 </a>



 <a href="https://drive.google.com/file/d/1yNDY1tJgMffsVGmlt3aUeDH3sXsvkPtO/preview"
target="eduaction"> 
2. Flexbox Properties 1
 </a>

 <a href="https://drive.google.com/file/d/1sBnPPf-nnN9IeT9C3mLBrIhPfVuGnrn5/preview"
target="eduaction"> 
3. Flexbox Properties 2
 </a>



 <a href="https://drive.google.com/file/d/1r_6cvwbVOKukBePOTAxvsrvx9UxNn4Zw/preview"
target="eduaction"> 
4. Flexbox Properties 3
 </a>

 <a href="https://drive.google.com/file/d/1OJ7ByEwT1MaGFwoqi5RzIZ3K9XxPOUk7/preview"
target="eduaction"> 
5. Grid CSS Intro
 </a>



 <a href="https://drive.google.com/file/d/1fNQf3Aju1UhCSoVcrnM5V4x6Za6OWNeH/preview"
target="eduaction"> 
6. Grid CSS
 </a>

 <a href="https://drive.google.com/file/d/17DFoPEG-OzmGJlNohk5iGeb12jr1YBtH/preview"
target="eduaction"> 
7. Grid CSS - 2
 </a>



 <a href="https://drive.google.com/file/d/16ZO2JGW-uwNFi-o4v-c3xPGvPq4FFoAU/preview"
target="eduaction"> 
8. Grid CSS - 3
 </a>

 <a href="https://drive.google.com/file/d/1--9-7E4pCbp-B_S79pG4jBvpILjN_4Xi/preview"
target="eduaction"> 
9. Grid CSS - 4
 </a>



 <a href="https://drive.google.com/file/d/1jc01CgO9PxfRfksOX7dbwL4jSGXQN8vc/preview"
target="eduaction"> 
10. Grid CSS - 5
 </a>

 <a href="https://drive.google.com/file/d/1asckVC3XyPPFO4dcHsIGkV1aWrj52JHV/preview"
target="eduaction"> 
11. Grid and Flexbox Project
 </a>



 <a href="https://drive.google.com/file/d/1t1u5nwn21bu7jJEmTB_6E8667ORm34xO/preview"
target="eduaction"> 
12. Grid and Flexbox Project - 2
 </a>
   
 <a href="https://drive.google.com/file/d/1SmGJyfdCcPvBvXpFlcKaGRLhPxJn-wPK/preview"
target="eduaction"> 
13. Grid and Flexbox Project - 3
 </a>



 <a href="https://drive.google.com/file/d/1CsvEjX92Ba18H8XpQIob5TV37FhTQgP-/preview"
target="eduaction"> 
14. Grid and Flexbox Project - 4
 </a>
 
    
    </div>

<hr/>






<button class="dropdown-btn" onClick={show} >6. Brief Intro to Python and Django
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/1Jnti64X2RQiMBlqouP77fmYjydrOWDuJ/preview"
target="eduaction"> 
1. Where You Can Use Python
 </a>



 <a href="https://drive.google.com/file/d/1IhUIMAMjRkuB0DY1tXjf6wcpCK_S5PDV/preview"
target="eduaction"> 
2. Let`s Meet Django Framework
 </a>
   
 
    
    </div>

<hr/>







<button class="dropdown-btn" onClick={show} >7. Set Up Your Django Environment
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/1jSS2YBXsa06GOH677LiB7MFfGsYPLOmW/preview" 
target="eduaction"> 
1. Install Python For Mac
 </a>



 <a href="https://drive.google.com/file/d/1TrOCOvE4VKUr862IRK0xMRXb4AykNPcE/preview"
target="eduaction"> 
2. Install Visual Studio Code on Your Mac
 </a>


 <a href="https://drive.google.com/file/d/1g4otI9eK4aMSjFvaxpI3kojI6m8dnoJm/preview"
target="eduaction"> 
3. Install Postgres App on Your MAc
 </a>



 <a href="https://drive.google.com/file/d/1ifVRjOHlsGeJ9aeOkriQdrVY4JEO3wl1/preview"
target="eduaction"> 
4. Install PgAdmin on Your Mac
 </a>
   
 
    
    </div>

<hr/>









<button class="dropdown-btn" onClick={show} >8. Basics For Django
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/1gWtOETGezfsz_dGN3qx520DintNos0s4/preview"
target="eduaction"> 
1. Learn Basic Comments For MAC OS
 </a>



 <a href="https://drive.google.com/file/d/1Cvv7Is3sXQVvtKj_tAEZEUSUd82owpWS/preview"
target="eduaction"> 
2. Python Package Managing
 </a>



 <a href="https://drive.google.com/file/d/1gAXeS-QmS09rYtqjrpvngLBsFfqLxL8-/preview"
target="eduaction"> 
3. Virtual Environment Install and Configuration
 </a> 
   
 
    
    </div>

<hr/>






<button class="dropdown-btn" onClick={show} >9. Django
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/14J_YRoaQu544AnlbKD8uR2fc6ZZZQZEt/preview"
target="eduaction"> 
1. Hello World
 </a>



 <a href="https://drive.google.com/file/d/1DTl74AGTYY-T-RjUmaUo9Zj9errFtb0d/preview"
target="eduaction"> 
2. Models
 </a>

 <a href="https://drive.google.com/file/d/1BS-vPgwh_vrcl8Q_mp4TPmNnrEPi3HNC/preview"
target="eduaction"> 
3. Models 2
 </a>



 <a href="https://drive.google.com/file/d/1RG_cmEy4j90HmFeLSMLWM7YbKExoAsE5/preview"
target="eduaction"> 
4. Django HTTP
 </a>

 <a href="https://drive.google.com/file/d/1RBAebHK4izxLC3eU0Icx-UT7uTawcEUv/preview"
target="eduaction"> 
5. Django Templates
 </a>



 <a href="https://drive.google.com/file/d/1xOq9-MOKL_fxBoq69LOpeYYMHWD7hgd_/preview"
target="eduaction"> 
6. Django Migrations
 </a>
   
 
    
    </div>

<hr/>




<button class="dropdown-btn" onClick={show} >10. Go Deeper In Django
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/1HULSm3XuUSP9lZcAUAM3fKhvQavvd41s/preview"
target="eduaction"> 
1. Authentication
 </a>



 <a href="https://drive.google.com/file/d/1Ge2GNA_JJH9eFkoKhJ20n5p8N1KRWilo/preview"
target="eduaction"> 
2. Authentication 2
 </a>
   

 <a href="https://drive.google.com/file/d/1VRMIMqEnWVQrPDK-kyU00M2JSPyxXIDs/preview"
target="eduaction"> 
3. Cache
 </a>



 <a href="https://drive.google.com/file/d/1Sb3-2kM5aAAo7oaCGKHsPzB4g1bFKEKl/preview"
target="eduaction"> 
4. Signing
 </a>


 <a href="https://drive.google.com/file/d/1RBr0mFiyNPmNXpjQ-_C8vUT3F5hAUza2/preview"
target="eduaction"> 
5. E-mail
 </a>



 <a href="https://drive.google.com/file/d/11VO2jKrgQ933enFRFCZGAScp2iv4lGXG/preview"
target="eduaction"> 
6. Logging
 </a>

 <a href="https://drive.google.com/file/d/1qXd7KUmVKumm0DT3rP_z9adwn4V4QbYV/preview"
target="eduaction"> 
7. Signals
 </a>



 
    
    </div>

<hr/>


















<button class="dropdown-btn" onClick={show} >
    </button>
    <div class="dropdown-container">
   





 <a href="https://drive.google.com/file/d/1IKNaoT0n_SFj0sS-ksbUhvzZpQbOrjtK/preview"
target="eduaction"> 

 </a>
   


 <a href="https://drive.google.com/file/d/1wGJYFucd7LPFy43fhYA_r0PKoCXvgO-y/preview"
target="eduaction"> 

 </a>
   
 
    
    </div>





</div>
</div>
    )
}

export default Django;