import React from 'react'

const MachineLearning = () => {

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

src="https://drive.google.com/file/d/1XmH6bl37xjvcvE1p-5krKNd24b-2ubex/preview"

name="eduaction"
allowfullscreen />




<div class="sidenav">
            <br></br>


            <button class="dropdown-btn" onClick={show} >1. Python for Machine Learning
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://drive.google.com/file/d/1XmH6bl37xjvcvE1p-5krKNd24b-2ubex/preview"
target="eduaction"> 
1. Introduction to Python in Data Science
 </a>



 <a href="https://drive.google.com/file/d/1T6lEYLYu573aZ21GTQlsDV0MbMV7WOXW/preview"
target="eduaction"> 
2. Arithmetic Functions
 </a>
   

 <a href="https://drive.google.com/file/d/1PqMMhceGEd6umc8rIYu53Y7nI0rbKYOO/preview"
target="eduaction"> 
3. Defining, Storing Variables and Datatypes
 </a>



 <a href="https://drive.google.com/file/d/1AU-A91yPIK2O1brlgoPI60rJ5RTiHNhn/preview" 
target="eduaction"> 
4. Working with Data Types
 </a>
   


 <a href="https://drive.google.com/file/d/1AF7FiXORWere8WZuNhpL6g78PvH6_2m_/preview"
target="eduaction"> 
5. PRACTICE
 </a>



 <a href="https://drive.google.com/file/d/1X0c_uEScO1_aGPqPWu0eg7qEnl2cTe3S/preview"
target="eduaction"> 
6. Introduction to Lists
 </a>
   

 <a href="https://drive.google.com/file/d/1JmdtQl2ilb6H_7zqK0Kpz1839vBpspSV/preview"
target="eduaction"> 
7. SLICING
 </a>



 <a href="https://drive.google.com/file/d/13-hSI0J3SvaQp-IiratVrQlcJoH555Nt/preview"
target="eduaction"> 
8. Accessing List Values
 </a>
   


 <a href="https://drive.google.com/file/d/1_xABF5E6MApsF9cPrqisNivPyzPcFoo1/preview" 
target="eduaction"> 
9. Sub-setting Lists
 </a>



 <a href="https://drive.google.com/file/d/1BkAjXbWiVoQKVK_SfPdoDrgGtZw7w92p/preview"
target="eduaction"> 
10. Advanced List Operations
 </a>
   


 <a href="https://drive.google.com/file/d/1H5rLVYI8Xz6Wwe-EWA2dG28IulcsmGUY/preview"
target="eduaction"> 
11. Built in Functions 1.1
 </a>



 <a href="https://drive.google.com/file/d/1yFze-pO4RtWiiQLoco_jB_XJzBdbt2Yi/preview" 
target="eduaction"> 
12. Built in Functions 1.2
 </a>
   


 <a href="https://drive.google.com/file/d/1ZiOTXPx291nKW1dxTkTIyhqs7gtolNNn/preview"
target="eduaction"> 
13. Function Arguments 1.1
 </a>



 <a href="https://drive.google.com/file/d/1XXj1ray0NmAfhdA3w62XlDVnOasRbxUk/preview"
target="eduaction"> 
14. Function Arguments 1.2
 </a>
   

 <a href="https://drive.google.com/file/d/1iI1z_E2sRFuks3TDW2KLjnzDccUgPc42/preview"
target="eduaction"> 
15. Introduction to String Methods 1.1
 </a>



 <a href="https://drive.google.com/file/d/14Ov2wEMmzqSaTcflYJlHJcPN9_ZzkW1C/preview"
target="eduaction"> 
16. Introduction to String Methods 1.2
 </a>
   


 <a href="https://drive.google.com/file/d/158caa_344X4KBfL_U_Yd2db2lgV9M-lh/preview"
target="eduaction"> 
17. Importing Python Packages
 </a>



 <a href="https://drive.google.com/file/d/1iBmnH8kDUqnBZXddnZ5rz--jTUo_dqrQ/preview"
target="eduaction"> 
18. Introduction to String Methods 1.3
 </a>
   

 <a href="https://drive.google.com/file/d/13lMiMeJxXocN5mLpZIb0j8PXY9x8fG49/preview"
target="eduaction"> 
19. Subsetting and Comparing Arrays 1.1
 </a>



 <a href="https://drive.google.com/file/d/1sXi29Kkmw9nvsqGYsFGo1PpwDTXL_Ern/preview"
target="eduaction"> 
20. Introduction to NumPy Arrays
 </a>
   


 <a href="https://drive.google.com/file/d/1qVYlU3oNewTv04kXX7wNmwm28rwCZuoq/preview"
target="eduaction"> 
21. Subsetting and Comparing Arrays 1.2
 </a>



   


   
    
  </div>

<hr/>

<button class="dropdown-btn" onClick={show} >2.  Machine Learning
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://mega.nz/embed/SnB0WJyL#0kKfMBeepCiNtP7cZBXPdq04u1Qu4EKkBtVTNbqPe_4"  
target="eduaction"> 
1. Introduction to AI
 </a>






 <a href="https://mega.nz/embed/uvBC0LCD#uR8zMqhsjuC0VBNnNXq3r0ad6Eqxl3GdOW-e1lW0L-Q" 
target="eduaction"> 
2. Introduction to ML( Supervised and Unsupervised Learning)
 </a>





 <a href="https://mega.nz/embed/KvQwSbxS#9pqUiPMP7TLwtx6LwonTPylBxEMgluiV9xUgCamfKF0"
target="eduaction"> 
3. ML  KNN ( Lp Norms)
 </a>






 <a href=
"https://mega.nz/embed/eyIwkJbA#W6u2xbmC7FhnbQjC4R_EK_UUxS86vnVKwY03SbnDpwg" 
target="eduaction"> 
4. ML  KNN ( Euclidean and Manhattan Distance)
 </a>

 <a href="https://mega.nz/embed/WiRmHTxR#ZJTRVF9CTaDbMzIphXG8xd5hkaTOaxDBDqlrviHHq50"
target="eduaction"> 
5. ML  KNN ( Minkowski, Hamming and Cosine Distance )
 </a>






 <a href="https://mega.nz/embed/3yYgSZ5Z#0ChRqt2n80-58J7sBiTTQ1v7lqkNai79HfOYn5wTbk8" 
target="eduaction"> 
6. ML  Over and Under Fitting( Cross Validation and K-Fold CV )
 </a>



 <a href="https://mega.nz/embed/v7AQVb5B#PxkDjv3AkEtj3gl2_Ur3EvMOSRk1IQioAJpFLYcPuaE" 
target="eduaction"> 
7. Project 1  Creating the First Model using KNN and finding the Accuracy.
 </a>



 <a href="https://mega.nz/embed/X3I0lLJT#YO-KFs2ytXXGj062aafcSlMZ0SN6wk56VCX38GaSNeI" 
target="eduaction"> 
8. ML  Linear Regression
 </a>



 <a href="https://mega.nz/embed/2vJ2DJiT#XmL5jEaJ9EPIabqvp758_w-0SY7793t9NJeugyMKkCY"
target="eduaction"> 
9. Project 2  based on SIMPLE LINEAR REGRESSION
 </a>





 <a href="https://mega.nz/embed/GmAW1D6R#9_YaRUgoTQHniXDq10LZQFMjjhmEXuRORnp9n7efUgA" 
target="eduaction"> 
10. Project 3  based on MULTIPLE LINEAR REGRESSION
 </a>


 <a href="https://mega.nz/embed/jqIkSZKC#qpeGVLbDRpPTGfdoAfOoViwcExTNPCnu3aMzOvEMGk8" 
target="eduaction"> 
11. ML  HYPOTHESIS TESTING ( Statistics Fundamentals )
 </a>

 <a href="https://mega.nz/embed/mnQgCJDR#uSeoXFo4JYkv4EgzkKD6GngWAFc14ZwEbXIfoUdIQNU" 
target="eduaction"> 
12. ML  Decision Tree with Gini Index
 </a>
   



 <a href= "https://mega.nz/embed/LyRW2JZR#vSgkVSB38VZURcVvyPbbzSd5uIaRNEx1rV8zuzvYiB0" 
target="eduaction"> 
13. ML  Decision Tree with Information Gain
 </a>
   


 <a href="https://mega.nz/embed/S6R0VD7R#I7cOzlyXFu0cyYbrW79uvdf-YkbMtp-3mU50KBhliZA" 
target="eduaction"> 
14. Project 4  CASE STUDY based on DECISION TREE
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

export default MachineLearning;