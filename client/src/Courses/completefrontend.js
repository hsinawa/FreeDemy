// import React from 'react'

// const FrontEnd = () => {

//     const show=()=>{
//         var dropdown = document.getElementsByClassName("dropdown-btn");
//         var i;
       
        
//         for (i = 0; i < dropdown.length; i++) {
//           dropdown[i].addEventListener("click", function() {
//             this.classList.toggle("active");
//             var dropdownContent = this.nextElementSibling;
//             if (dropdownContent.style.display === "block") {
//               dropdownContent.style.display = "none";
//             } else {
//               dropdownContent.style.display = "block";
//             }
//           });
//         }
//     }



//     return(
//         <div>

            
// <iframe id="mainscreen" frameborder="0" 

// src="https://drive.google.com/file/d/1tsv-QRnayMyxOnIFOmBnGggFqNjlfeK6/preview"

// name="eduaction"
// allowfullscreen />




// <div class="sidenav">
//             <br></br>


//             <button class="dropdown-btn" onClick={show} >1. Welcome to the Course
//     <i class="fa fa-caret-down"></i>
//   </button>
//   <div class="dropdown-container">



//     {/* <a href=
// target="eduaction"> 

//  </a>



//  <a href=
// target="eduaction"> 

//  </a> */}
   
    
//   </div>

// <hr/>

// <button class="dropdown-btn" onClick={show} >2. Web Development Basics - HTML
//     <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-container">
   


//     {/* <a href=
// target="eduaction"> 

//  </a>



//  <a href=
// target="eduaction"> 

//  </a> */}
   
 
    
//     </div>

// <hr/>




// <button class="dropdown-btn" onClick={show} >3. Advanced HTML Concepts
// <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-container">
   





//  <a href="https://drive.google.com/file/d/1IKNaoT0n_SFj0sS-ksbUhvzZpQbOrjtK/preview"
// target="eduaction"> 

//  </a>
   


//  <a href="https://drive.google.com/file/d/1wGJYFucd7LPFy43fhYA_r0PKoCXvgO-y/preview"
// target="eduaction"> 

//  </a>
   
 
    
//     </div>
// <hr/>






// <button class="dropdown-btn" onClick={show} >4. Introduction to Cascading Style Sheets (CSS)
//     <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-container">
   


//     {/* <a href=
// target="eduaction"> 

//  </a>



//  <a href=
// target="eduaction"> 

//  </a> */}
   
 
    
//     </div>

// <hr/>



// <button class="dropdown-btn" onClick={show} >5. Advanced CSS
//     <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-container">
   


//     {/* <a href=
// target="eduaction"> 

//  </a>



//  <a href=
// target="eduaction"> 

//  </a> */}
   
 
    
//     </div>

// <hr/>





// <button class="dropdown-btn" onClick={show} >6. JavaScript for Beginners
//     <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-container">
   


//     {/* <a href=
// target="eduaction"> 

//  </a>



//  <a href=
// target="eduaction"> 

//  </a> */}
   
 
    
//     </div>

// <hr/>





// <button class="dropdown-btn" onClick={show} >7. More JavaScript Concepts
//     <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-container">
   


//     {/* <a href=
// target="eduaction"> 

//  </a>



//  <a href=
// target="eduaction"> 

//  </a> */}
   
 
    
//     </div>

// <hr/>



// <button class="dropdown-btn" onClick={show} >9. More jQuery
//     <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-container">
   


//     {/* <a href=
// target="eduaction"> 

//  </a>



//  <a href=
// target="eduaction"> 

//  </a> */}
   
 
    
//     </div>

// <hr/>



// <button class="dropdown-btn" onClick={show} >10. Bootstrap Basics
//     <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-container">
   


//     {/* <a href=
// target="eduaction"> 

//  </a>



//  <a href=
// target="eduaction"> 

//  </a> */}
   
 
    
//     </div>

// <hr/>





// <button class="dropdown-btn" onClick={show} >11. Project #2 - Pipboy from Fallout 4
//     <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-container">
   


//     {/* <a href=
// target="eduaction"> 

//  </a>



//  <a href=
// target="eduaction"> 

//  </a> */}
   
 
    
//     </div>

// <hr/>





// <button class="dropdown-btn" onClick={show} >12. Project #3 - Google Chrome Extension
//     <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-container">
   


//     {/* <a href=
// target="eduaction"> 

//  </a>



//  <a href=
// target="eduaction"> 

//  </a> */}
   
 
    
//     </div>

// <hr/>





// <button class="dropdown-btn" onClick={show} >13. Final Thoughts
//     <i class="fa fa-caret-down"></i>
//     </button>
//     <div class="dropdown-container">
   


//     {/* <a href=
// target="eduaction"> 

//  </a>



//  <a href=
// target="eduaction"> 

//  </a> */}
   
 
    
//     </div>

// <hr/>











// </div>
// </div>
//     )
// }

// export default FrontEnd;




import React from 'react'

const FrontEnd = () => {

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

            <br/>
<iframe id="mainscreen" frameborder="0" 

src=
//"https://drive.google.com/file/d/1tsv-QRnayMyxOnIFOmBnGggFqNjlfeK6/preview"
"https://drive.google.com/file/d/1TsrRLhKbFfshw4r3vPk2TbEh7q2_H2qK/preview"
name="eduaction"
allowfullscreen />



<br/><br/>
<div class="sidenav">
            <br></br> 


            <button class="dropdown-btn" onClick={show} >1. Welcome to the Course
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://drive.google.com/file/d/1TsrRLhKbFfshw4r3vPk2TbEh7q2_H2qK/preview"
target="eduaction"> 
1. Introduction to the course
 </a>



 <a href="https://drive.google.com/file/d/1fPYCDtOmG8xYyWCrA2hqWWd5_-Ea5D4I/preview" 
target="eduaction"> 
2. Atom setup
 </a>
   
    
  </div>

<hr/>

<button class="dropdown-btn" onClick={show} >2. Web Development Basics - HTML
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/1WzIuF3sFxbNJyke0LtKupqo1FD61xMPK/preview"
target="eduaction"> 
1. HTML document structure
 </a>



 <a href="https://drive.google.com/file/d/16LVvbaN3TFJlJXFN1Ib9OoF_iaWi5wCw/preview"
target="eduaction"> 
2. HTML elements - div and span
 </a>

 <a href="https://drive.google.com/file/d/1anc4bCjqLj2U-qTCQARL81Cds5Ww6D5D/preview"
target="eduaction"> 
3. HTML elements - i, b, p, and a
 </a>



 <a href="https://drive.google.com/file/d/1aMtdbfQw8VzX6Qc9W7YF1rSfDOZj_Isc/preview"
target="eduaction"> 
4. HTML elements - ul, li, and ol
 </a>

 <a href="https://drive.google.com/file/d/1BIEDHvkgog-2TI29JrfZj2wo79gboYqQ/preview"
target="eduaction"> 
5. HTML elements - header and footer
 </a>



 <a href="https://drive.google.com/file/d/1XZzR1sgXSlO2pob3L9UyIMsCQYmN9wz9/preview"
target="eduaction"> 
6. HTML elements - section, main, and article
 </a>

 <a href="https://drive.google.com/file/d/1rScRrA4fV55K2Wxk04USA1ytrIiaJedu/preview"
target="eduaction"> 
7. HTML elements - h1-h6 and aside
 </a>



 <a href="https://drive.google.com/file/d/142vpbGet2TFMwpG3SFg2uxvfdGq3jg7X/preview"
target="eduaction"> 
8. HTML tables
 </a>
 <a href="https://drive.google.com/file/d/1TWaEFMZHnPu4RaTvSCuqNFTqXJAD5-ab/preview"
target="eduaction"> 
9. Project #1 - HTML text site
 </a>
 
    
    </div>

<hr/>




<button class="dropdown-btn" onClick={show} >3. Advanced HTML Concepts
<i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   

    <a href="https://drive.google.com/file/d/1vdA3IuWLjE1qKrg0v7Cc7hhp5PBFSuXf/preview"
target="eduaction"> 
1. Images
 </a>



 <a href="https://drive.google.com/file/d/1a2735mev-k1SUa9YmA_boLrDfFU0PtiQ/preview"
target="eduaction"> 
2. Forms
 </a>
 <a href="https://drive.google.com/file/d/1uc_CWSn8GQ7o6jhfEF8sTR5WYDOmeugs/preview"
target="eduaction"> 
3. Inputs
 </a>



 <a href="https://drive.google.com/file/d/1G_RIoppNh22Cky-zz7ptqXCUQ6xem-h0/preview"
target="eduaction"> 
4. Checkboxes
 </a>
 <a href="https://drive.google.com/file/d/1YT_mz_TUsfJcmk7KmfSKI3oyC_Cb8oHB/preview"
target="eduaction"> 
5. Radio buttons
 </a>



 <a href="https://drive.google.com/file/d/1R0TLVgx3CYsqwkkd-0QjSbPgRMBO1SzY/preview"
target="eduaction"> 
6. Select, option, and buttons
 </a>

 <a href="https://drive.google.com/file/d/1jvzsfzqxZ2d3aQaiv4lrQSL-XUTPSiwo/preview"
target="eduaction"> 
7. HTML5 videos
 </a>



 <a href="https://drive.google.com/file/d/16-OTGWxv1j79Lg-4yq_FKamn7o9yAIrQ/preview"
target="eduaction"> 
8. HTML5 audio
 </a>

 <a href="https://drive.google.com/file/d/1dMsbLPOgJmQ9XWa14XXOnebS8PzVqrn5/preview"
target="eduaction"> 
9. Doctypes
 </a>



 <a href="https://drive.google.com/file/d/1SafhIQPvRJuzYqFN7fTUFo8vmVqxwX-M/preview"
target="eduaction"> 
10. Meta tags
 </a>

 
    
    </div>
<hr/>






<button class="dropdown-btn" onClick={show} >4. Introduction to Cascading Style Sheets (CSS)
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/1RvVPi2Se4qnrzQ6wizcEo0pYFy461wU8/preview"
target="eduaction"> 
1. Targeting color and background
 </a>



 <a href="https://drive.google.com/file/d/1Es355_b2ZrUqTGO7myxyNKxDvL8g6_P0/preview"
target="eduaction"> 
2. Element specificity
 </a>


 <a href="https://drive.google.com/file/d/1K6djgsSYkMjGeSc8xiIPEjRyoFxXYxL2/preview"
target="eduaction"> 
3. ID targeting, margin, and border
 </a>



 <a href="https://drive.google.com/file/d/1SABgctMrrIdHM3dEHVCt4knd9h01aB7z/preview"
target="eduaction"> 
4. Padding, margin, and float
 </a>

 <a href="https://drive.google.com/file/d/1Rnfb0uVwiWvbS5UA-0t5tLTsk4g_1dTf/preview"
target="eduaction"> 
5. Max-width and background-image
 </a>



 <a href="https://drive.google.com/file/d/1XWctuc8wjT4uKTcmPqDoBT05S2B5zzmY/preview" 
target="eduaction"> 
6. Switching over to an IDE
 </a>
 
   
 
 <a href="https://drive.google.com/file/d/1ZvQLpYCVRawCZ8SqUDVZFPi-eJ072uoa/preview"
target="eduaction"> 
7. Font weight, style, and family
 </a>

 <a href="https://drive.google.com/file/d/1dJrvZpW7KLMauX5mkNVN0Qxjy6E82yv0/preview"
target="eduaction"> 
8. Text decorations
 </a>



 <a href="https://drive.google.com/file/d/1TLnJ0uIcJ4ajcr7cafUxPuNjPluzJx9_/preview"
target="eduaction"> 
9. Text spacing
 </a>
 
  
  
 <a href="https://drive.google.com/file/d/1vSOswN2obpYToSacbEHUADy4uvdfiLPD/preview"
target="eduaction"> 
10. Text decoration modification
 </a>

 <a href="https://drive.google.com/file/d/1DtxMOkG--yNnjhtSj_iCsvC_psGNhUEc/preview"
target="eduaction"> 
11. Text shadow
 </a>




  
    
    </div>

<hr/>



<button class="dropdown-btn" onClick={show} >5. Advanced CSS
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/1nqbD7eSgBGVL9jhA_3KuHksINbD1E-Dw/preview"
target="eduaction"> 
1. Psuedo-states
 </a>



 <a href="https://drive.google.com/file/d/1o4B9NEzCBC6EOp7ZwUv2OfrhrPJ-JcT1/preview"
target="eduaction"> 
2. Border radius
 </a>

 <a href="https://drive.google.com/file/d/1EOLSm6zcPPeyFNHnBP8GLBVg6Vuy_80r/preview" 
target="eduaction"> 
3. Positions
 </a>



 <a href="https://drive.google.com/file/d/1Zs2ymUwAE1OkxmAoQMTqp11aIO1Q1quT/preview"
target="eduaction"> 
4. Psuedo-elements
 </a>

 <a href="https://drive.google.com/file/d/1i0xMGN1wInu1Pmc_fHmA4ssx1nxrjmDQ/preview"
target="eduaction"> 
5. Z-index
 </a>



 <a href="https://drive.google.com/file/d/1BkEV98tSP5ahNBFaFbPdeLC1SLkBjKgi/preview"
target="eduaction"> 
6. Viewpoint width and height, overflowing content
 </a>

 <a href="https://drive.google.com/file/d/1JQM0VGpnKxHjrodGn9OsWeHZ50dyP1Hy/preview"
target="eduaction"> 
7. Transition property
 </a>



   
 
    
    </div>

<hr/>





<button class="dropdown-btn" onClick={show} >6. JavaScript for Beginners
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/1MGWZC8bYlgrmZ_woy3fKDBlA8HJGsy9p/preview"
target="eduaction"> 
1. Intro to JavaScript
 </a>



 <a href="https://drive.google.com/file/d/1pUlkbf36qdB4JHfP47TswkKiQPAUjVD-/preview"
target="eduaction"> 
2. Alerts and console logging
 </a>
   

 <a href="https://drive.google.com/file/d/1s-to84l-SFD39iqMbJ9FAP0S-koB2-E_/preview"
target="eduaction"> 
3. Integers, strings, and variables
 </a>



 <a href="https://drive.google.com/file/d/1qp-0ZLuUYEF2oO09UylN5YtLYz2cWl4V/preview"
target="eduaction"> 
4. Undefined variables and modifying values of variables
 </a>



 <a href="https://drive.google.com/file/d/14zaWQhBD7k2WMEauRugDHvV6crR714Js/preview"
target="eduaction"> 
5. Boolean operators
 </a>



 <a href="https://drive.google.com/file/d/1Sq0bEH_2JMk6kvmD0B_aGJfHtJVdAApb/preview"
target="eduaction"> 
6. Comparing values
 </a>


 <a href="https://drive.google.com/file/d/1NZnh5XjjT3awhHWbWQqolRl39_8co2Ow/preview"
target="eduaction"> 
7. If statements
 </a>



 <a href="https://drive.google.com/file/d/1vK0Ch3-4AO9S9s0zqK5Z4E5QIXV3FiFF/preview"
target="eduaction"> 
8. For loops
 </a>


 <a href="https://drive.google.com/file/d/1VyWDbUUmcYD6Argo1BaQroqkZgW5_t1p/preview"
target="eduaction"> 
9. Defining functions
 </a>



 <a href="https://drive.google.com/file/d/1bu-L74fa0YW-U1NjkJG7qCEPkan6tZEB/preview"
target="eduaction"> 
10. Event handling
 </a>
 

 
 <a href="https://drive.google.com/file/d/11iJziLT6FVe3IWttKthijWiRi65lSF_P/preview"
target="eduaction"> 
11. Setting an elements innerHTML
 </a>



    
    </div>

<hr/>





<button class="dropdown-btn" onClick={show} >7. More JavaScript Concepts
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/16k-5JAdiI1sis9P1HBYycVR-S1-0KsKg/preview"
target="eduaction"> 
1. Arrays pt.1
 </a>



 <a href="https://drive.google.com/file/d/1qpYdxpSWEkuDfwupXodh5vnix5SevZOs/preview"
target="eduaction"> 
2. Arrays pt.2
 </a>


 <a href="https://drive.google.com/file/d/17xqaa8XZKBAtgYW8bk4dZ1OPqgTklHfN/preview"
target="eduaction"> 
3. Arrays pt.3
 </a>



 <a href="https://drive.google.com/file/d/1vXtWRgvI8ZmKNkC7taEytb7nAHJLn4Pe/preview"
target="eduaction"> 
4. Textareas and getting the value of inputs
 </a>


 <a href="https://drive.google.com/file/d/1FjtvZJCqgsM5XGzGLdd04ROt6VMu6ROA/preview"
target="eduaction"> 
5. Functions - parameters and return values
 </a>



 <a href="https://drive.google.com/file/d/1-HW3no5ANJTJUKIHEC_yTxF_qgi-QlZi/preview"
target="eduaction"> 
6. Multiple parameters in functions
 </a>

 <a href="https://drive.google.com/file/d/11u5dnYYTtWhbwFjhx7KTtTNn5HWtcUdm/preview"
target="eduaction"> 
7. Flexible function parameters
 </a>



 <a href="https://drive.google.com/file/d/1LULLI_97Alc9pt207FW85fyz1Hzymw8r/preview"
target="eduaction"> 
8. Exercise - find the missing number
 </a>

 <a href="https://drive.google.com/file/d/1Dj6Lb90psJuZsm9pgi8xgwIPvopfDotF/preview" 
target="eduaction"> 
9. Exercise solution
 </a>



 <a href="https://drive.google.com/file/d/1Qq8ARjE4sX6yqCDuxNqOwiyDsHPzNgkX/preview"
target="eduaction"> 
10. Classes explained
 </a>

 <a href="https://drive.google.com/file/d/1gJHPSiShPPRz0Brsyn2t80QwH1Itrrl4/preview"
target="eduaction"> 
11. Class constructor, instance variables, and static variables
 </a>



 <a href="https://drive.google.com/file/d/1uYNG5Tx8CYzYNKJqNGW131kzHx28PfSd/preview" 
target="eduaction"> 
12. Extending classes
 </a>


 
    
    </div>

<hr/>



<button class="dropdown-btn" onClick={show} >8. Getting Started with jQuery
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/1VpYxlqlBCSASLcerPn-UCsxgKyIMusp_/preview"
target="eduaction"> 
1. jQuery setup
 </a>



 <a href="https://drive.google.com/file/d/1-T9ELsxcBC9LRsFpVMNlz6rLk_-YyhcI/preview"
target="eduaction"> 
2. Targeting elements
 </a>
   
 <a href="https://drive.google.com/file/d/12Jr3aFVi7eKUAm2YVj52TcV-T-dBxApN/preview"
target="eduaction"> 
3. Event handling
 </a>



 <a href="https://drive.google.com/file/d/1eY-uq6KGJuB25aLD_B1vyN0Xgv554LYF/preview"
target="eduaction"> 
4. Dropdown menus
 </a>


 <a href="https://drive.google.com/file/d/1OChq9A32R1Nb4jOpvqRMlfeQb9JJySzL/preview"
target="eduaction"> 
5. Making our dropdown disappear
 </a>



 <a href="https://drive.google.com/file/d/1iU3C_c_LaA2lvyMdjgFRu1VjxrULAZc1/preview"
target="eduaction"> 
6. Multiple targets, events, and attr method
 </a>


 <a href="https://drive.google.com/file/d/1HFbDVzaeLejB8Uww9fKAeduA5hVm-JkI/preview"
target="eduaction"> 
7. Prepend, append, and html
 </a>



 <a href="https://drive.google.com/file/d/1ZjwUh3GW1WaVEXD-RtCpDXIVTShCSsfC/preview"
target="eduaction"> 
8. preventDefault
 </a>


 <a href="https://drive.google.com/file/d/1s5ciDQPMC8AdvBmZjeFmB7rI02lGNVd6/preview"
target="eduaction"> 
9. event.which and switch properties
 </a>



 <a href="https://drive.google.com/file/d/1So9m0Rrgme9xiWGCM1GvZ4Xqm_akGMze/preview"
target="eduaction"> 
10. Custom context menu, pageY, and pageX
 </a>


 <a href="https://drive.google.com/file/d/1nrtrfeyDsNT30AREaVFlFbDdIiAc0PrR/preview"
target="eduaction"> 
11. is method
 </a>




    
    </div>

<hr/>





<button class="dropdown-btn" onClick={show} >9. More jQuery
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/17455uJ8B-q57tgFN4WnUHekI4r5Wwjo6/preview"
target="eduaction"> 
1. Writing our own version of jQuery
 </a>



 <a href="https://drive.google.com/file/d/1rWh2l69DckuH_JuFzNk2Ii8axPIXgheN/preview"
target="eduaction"> 
2. Find method
 </a>


 <a href="https://drive.google.com/file/d/1MFRZEYR8NvFinBd-YZWp3vpiKNQwx7VY/preview"
target="eduaction"> 
3. First and last
 </a>



 <a href="https://drive.google.com/file/d/1fiVVtRL6x0idFCdhExKb-g4I7ZQWrwH9/preview"
target="eduaction"> 
4. Focusin and focusout
 </a>


 <a href="https://drive.google.com/file/d/1QvyIhs_9mm5K4T0DB4p8NOeqXFvfIGKJ/preview"
target="eduaction"> 
5. Contains, is, and hasClass
 </a>



 <a href="https://drive.google.com/file/d/1L4398rtvbvRL7BCO5B2BaWMJEYWZhHUP/preview"
target="eduaction"> 
6. Each method
 </a>


 <a href="https://drive.google.com/file/d/1m7Nqa-0_qXSoZG6TvVZfh34Xzwhu4O35/preview"
target="eduaction"> 
7. Callbacks
 </a>



 <a href="https://drive.google.com/file/d/1H1bI3M4_ugBWo0-SLyqwUG3f2fvI9LuW/preview"
target="eduaction"> 
8. CSS
 </a>
   
 
    
    </div>

<hr/>



<button class="dropdown-btn" onClick={show} >10. Bootstrap Basics
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/1bbstPMsaFiphUut-m7UtSVBjYh_PqrS1/preview"
target="eduaction"> 
1. Bootstrap setup
 </a>



 <a href="https://drive.google.com/file/d/1pLzV5OiiedLvo63qQIdDpbvQ_hO66GUY/preview"
target="eduaction"> 
2. Navbar pt.1
 </a>
   

 <a href="https://drive.google.com/file/d/12VrIdK1PghF4TVPKMLHxSz9wZ1amWv83/preview"
target="eduaction"> 
3. Navbar pt.2
 </a>



 <a href="https://drive.google.com/file/d/1QTIVz7RYzyyk3VMF_lUVXTahTuDJqelT/preview"
target="eduaction"> 
4. Forms pt.1
 </a>


 <a href="https://drive.google.com/file/d/1RW32N5-MftDuxYUxaxeN9nIUdzK2KtIq/preview"
target="eduaction"> 
5. Forms pt.2
 </a>



 <a href="https://drive.google.com/file/d/1QViZpBYYUU8rOfH0vYe4xg2WAP_yx9ia/preview"
target="eduaction"> 
6. Buttons
 </a>
 
    
    </div>

<hr/>











</div>
</div>
    )
}

export default FrontEnd;