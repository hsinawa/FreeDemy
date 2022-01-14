import React from 'react'

const EthicalHacking = () => {

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

src="https://drive.google.com/file/d/1tsv-QRnayMyxOnIFOmBnGggFqNjlfeK6/preview"

name="eduaction"
allowfullscreen />




<div class="sidenav">
            <br></br>


            <button class="dropdown-btn" onClick={show} >Introduction
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    {/* <a href=
target="eduaction"> 

 </a>



 <a href=
target="eduaction"> 

 </a> */}
   
    
  </div>

<hr/>

<button class="dropdown-btn" onClick={show} >Setting Up HAcking Lab
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    {/* <a href=
target="eduaction"> 

 </a>



 <a href=
target="eduaction"> 

 </a> */}
   
 
    
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

export default EthicalHacking;