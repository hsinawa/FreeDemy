import React from 'react'
import './template.css'

const STL = () => {

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

src="https://drive.google.com/file/d/1BQcEFrzjS-H_--WpYDPiwbxoX2EaSYjL/preview"

name="eduaction"
allowfullscreen />
            
            <div class="sidenav">
            <br></br>


            <button class="dropdown-btn" onClick={show} >Vectors
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">
  <a href="https://drive.google.com/file/d/1BQcEFrzjS-H_--WpYDPiwbxoX2EaSYjL/preview"
  
  target="eduaction">
1. Vectors

  </a>
    <a href="https://drive.google.com/file/d/1iFme-UElhFGPCoJXCBcLm_HWDWThiIUO/preview"
   
    target="eduaction" >
       2. Vectors and Memory
            </a>



 <a href="https://drive.google.com/file/d/1UQ1xEQ3TyMppbLw9q35kE9bupP7QjbZd/preview"
target="eduaction"> 
3. Two-Dimensional Vectors
 </a>









   



    
    </div>

<hr/>

<button class="dropdown-btn" onClick={show} >List
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   

<a href="https://drive.google.com/file/d/19_eXfSt_8Hyp37DMD6_GTQ1RHdj7Kpf7/preview"
target="eduaction"  > 
4. Lists
 </a>
   
 
    
    </div>

<hr/>






<button class="dropdown-btn" onClick={show} >Map
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://drive.google.com/file/d/1-gm4sB8o09PppWnKrRF-n3e5rmLZWzJf/preview"
target="eduaction"> 
5. Maps
 </a>



 <a href="https://drive.google.com/file/d/1ouITY7-msmahgSU3OJYxsh9pyuNaCuCU/preview"
target="eduaction"> 
6. Custom Objects as Map Values
 </a>

 <a href="https://drive.google.com/file/d/1d54RAazXMIkYh1zP_BlGelECj5NQo13j/preview"
target="eduaction"> 
7. Custom Objects as Map Keys
 </a>
   

 <a href="https://drive.google.com/file/d/1LtTOPWXaum3p3Xw36c2m54414lnlJhkZ/preview"
target="eduaction"> 
8. Multimaps
 </a>
   
   
 
    
    </div>

<hr/>





<button class="dropdown-btn" onClick={show} >Set
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   





 <a href="https://drive.google.com/file/d/1ufZfjZyqrC-YXfayjcd3al1ZHlgu2G9M/preview"
target="eduaction"> 
9. Sets
 </a>
   
 
    
    </div>

<hr/>


<button class="dropdown-btn" onClick={show} >Stack and Queues
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   





 <a href="https://drive.google.com/file/d/11L_wWi9uw2HIl6a2-G4m9UPT9XFyE5X_/preview"
target="eduaction"> 
10. Stacks and Queues
 </a>
   
 
    
    </div>

<hr/>


<button class="dropdown-btn" onClick={show} >More on STL
<i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   





 <a href="https://drive.google.com/file/d/1IKNaoT0n_SFj0sS-ksbUhvzZpQbOrjtK/preview"
target="eduaction"> 
11. Sorting Vectors, Deque and Friend
 </a>
   


 <a href="https://drive.google.com/file/d/1wGJYFucd7LPFy43fhYA_r0PKoCXvgO-y/preview"
target="eduaction"> 
12. STL Complex Data Types
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

export default STL