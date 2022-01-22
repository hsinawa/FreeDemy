import React from 'react'


const AbdulBari = () => {

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
            <br></br>
<iframe id="mainscreen" frameborder="0" 
 

src="https://mega.nz/embed/Bt40GKTb#I8vvP_xmc24kDl7gm1Vf_rI9SBdFcbTZ30JNM6vDEFM" allowfullscreen

name="eduaction"
/>




<div class="sidenav">
            <br></br>


            <button class="dropdown-btn" onClick={show} >Part1-4
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">


  <a 
target="eduaction" > 
Just Setup videos , therefore not included

 </a>


   
    
  </div>







<hr/>

<button class="dropdown-btn" onClick={show} >5. Recursion
    <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container">
   


    <a href="https://mega.nz/embed/Bt40GKTb#I8vvP_xmc24kDl7gm1Vf_rI9SBdFcbTZ30JNM6vDEFM"
target="eduaction"> 
1. How Recursion Works ( Tracing )
 </a>



 <a href="https://mega.nz/embed/pg4mjKwD#mGvKAX_SgIHjI7JVKojQOWyTFTbUIw3Y_ooQ3GHiXz4" allowfullscreen
target="eduaction"> 
2. Generalising Recursion
 </a>
   
 



 <a href="https://mega.nz/embed/Yt4WRIJD#ZNl-tuXSnCS23UAvjYYe3iEKAztV1A9npCT46yIL7aM" allowfullscreen
target="eduaction"> 
3. How Recursion uses Stack


 </a>


 <a href="https://mega.nz/embed/54wwHSyK#Rrk4IpKbbnUdgHGGqeKm_zC5i9Fmrpmow9pFIB5x_nk" allowfullscreen 
target="eduaction"> 
4. Recurrence Relation - Time Complexity of Recursion


 </a>
   


 <a href="https://mega.nz/embed/pkwSBIIR#ucBRGKkWNu76iu9FOlXnnBH-TO_977Ywy9h3QC6EUaY"
target="eduaction"> 

5. Lets Code Recursion

 </a>
   



 <a href="https://mega.nz/embed/googRSpK#2d6CsrJOF4UtO0z5YGON3ehWLlrXYW_vDWocytE7QcQ" allowfullscreen
target="eduaction"> 


6. Static and Global Variables in Recursion
 </a>
   


 <a href="https://mega.nz/embed/0ppUDABJ#1rT3WQOTpc4S6bF-D9QBapElWM_KmvitJsLipYnys50" allowfullscreen
target="eduaction"> 

7. Let's Code Static and Global in Recursion

 </a>
   


 <a href="https://mega.nz/embed/10pgHK5a#nc0-AlH-l_qIezifS0Ia5Q60I_S5EaRAhwIOXPiopHI" allowfullscreen 
target="eduaction"> 


8. Tail Recursion
 </a>
   
   


 <a href="https://mega.nz/embed/kooUCSKA#uLJuczhbX4R2WfnlnDq2U_5oiAY5LmmwCcw5LuYTP5E" 
target="eduaction"> 

9. Head Recursion

 </a>
   


 <a href="https://mega.nz/embed/00o2GSjT#aEWNDB5cE7cDsSeBNhsaYvGw12WpjMaXKcEjHvv8ilI" allowfullscreen 
target="eduaction"> 
10. Tree Recursion


 </a>
   


 <a href="https://mega.nz/embed/44xgWKjS#LEkLe_J6kJxTzlh1l0f_G4oyV1e7YQIZxXbEN3R_rIU" allowfullscreen
target="eduaction"> 


11. Let's Code Tree Recursion
 </a>
   





 <a href="https://mega.nz/embed/s8xQFaCJ#0RGIpNPbpnZwleP08L1weZSrB6X0ZLVsC7NJx1--R9g" allowfullscreen
target="eduaction"> 
12. Indirect Recursion
 </a>
   

   
 <a href="https://mega.nz/embed/slhkCQIR#9iiJxQ8bjBaiaryCZMlr4I0gCPnF2YPhJFk9ROZ5ieY" allowfullscreen
target="eduaction"> 
13. Let's Code Indirect Recursion
 </a>
   


   
 <a href="https://mega.nz/embed/VhhGmKTT#xIbOVYcRX9EhdoQqCjgXXG0IrW8pNdvcw9NsyPhM9U0" allowfullscree
target="eduaction"> 
14. Nested Recursion
 </a>
   


   
 <a href="https://mega.nz/embed/swpggKAR#x73cYwE4L1ULtg_aGxl2Yyk1s_Gi3fx5q12SIujhV1A" allowfullscreen
target="eduaction"> 
15. Let's Code Nested Recursion
 </a>
   


   
 <a href="https://mega.nz/embed/4lhmBAqQ#pRGmpeEDR5PO9B8AHQEfLeljx0X7LuT_F2jDei-OMDU" allowfullscreen
target="eduaction"> 
16. Sum of Natural Number using Recursion
 </a>
   


   
 <a href="https://mega.nz/embed/wh50wIqY#8fNCRfonmwRlpyt7P3FHGH2qeFLa3kEyiMFcYZ8o1E4" allowfullscreen
target="eduaction"> 
17. Let's Code Sum of N using Recursion
 </a>
   


   
 <a href="https://mega.nz/embed/Q44WzYiS#KfTv8A1WFVONz1mRXfQLA5Xjsccc8ABuUgSdbEUgy4c" allowfullscreen 
target="eduaction"> 
18. Factorial using Recursion
 </a>
   


   
 <a href="https://mega.nz/embed/ckgEiASa#UglwqwIli1IniJbjczCLWPEypfhaKCN4C_gwFgCzudg" allowfullscreen
target="eduaction"> 
19. Let's Code Factorial using Recursion
 </a>
   


   
 <a href="https://mega.nz/embed/k1400AJQ#gZIvbpJ-PC7enyqs_eumJx5K_FFEC_COZuCytau20bw" allowfullscreen
target="eduaction"> 
20. Power using Recursion
 </a>
   


   
 <a href="https://mega.nz/embed/J0hA1aDD#H-k6iO3oN38eby1qFNfDbTbfPP2mUSuFS5vzBumQBwI" allowfullscree
target="eduaction"> 
21. Let's Code Power Recursion
 </a>
   


   
 <a href="https://mega.nz/embed/Rk5kmYTA#ZkvBLtjqEx9BeyLpqMtC2FxEyU3x3iT5kxNOINP9TCg" allowfullscreen
target="eduaction"> 
22. Taylor Series using Recursion
 </a>
   

   
 <a href="https://mega.nz/embed/954yFC5b#GLs--uxHX6anCpT31dhzwYdpUQ26w7ZSJbqySAZtxZk" allowfullscreen
target="eduaction"> 
23. Let's Code Taylor Series using Recursion
 </a>
   

   
 <a href="https://mega.nz/embed/RtpgQCia#3G1n2fS6_J62sPmw0RXHjwbDrMOGiG8UQAUAY7zWTD0" allowfullscreen
target="eduaction"> 
24. Taylor Series using Horner's Rule
 </a>
   

   
 

   
 <a href="https://mega.nz/embed/FkpwjYbR#1ux8pOCCnnwAzuzHaUx9xmQzlJIbmSFGCws7DYDA1_o" allowfullscree
target="eduaction"> 
25. Let's Code Taylor Series Horner's Rule - Recursion
 </a>
   

   
 <a href="https://mega.nz/embed/w1wUFASa#53XvF_Zx2pihNceo2rEH1vwMMUwWb9J7Yrm03kpbRiM" allowfullscree
target="eduaction"> 
26. Let's Code Taylor Series Iterative
 </a>
   

   
 <a href="https://mega.nz/embed/M4p0UahL#QFnXsVa-Ru2OM7OxN4nZ0Abnc9S86Mad3nzSpcTsOzc" allowfullscreen
target="eduaction"> 
27. Fibonacci Series using Recursion - Memoization
 </a>
   



 <a href="https://mega.nz/embed/A9gixAxS#o0p03t780joNa4LibxyoxwfqElQ1QnURjX7AmcdVvD8" allowfullscreen
target="eduaction"> 
28. Let's Code Fibonacci
 </a>



 <a href="https://mega.nz/embed/4lpGEQba#82ouSft-Cq-VK2gkUj_rPlXvfF7Vio6tFTRgxNj6P0g" allowfullscreen
target="eduaction"> 
29. nCr using Recursion
 </a>



 <a href="https://mega.nz/embed/9h5whQwA#9fTHEQmQlSfZNmUmbhkuSivj0tInmeqs3qSv6IeoYRg" allowfullscreen
target="eduaction"> 
30. Let's Code nCr using Recursion
 </a>



 <a href="https://mega.nz/embed/ZhwwGYgY#FszP0Xv96FUHZxhFomQLsASO3mVcDwlczEUeh_6mYaY" allowfullscree
target="eduaction"> 
31. Tower of Hanoi Problem
 </a>




 <a href="https://mega.nz/embed/9sJw1BRT#LFaZ4efvk52tY7wXmFG94q___v4gwZfkj52HTxGwS64" allowfullscreen
target="eduaction"> 
32. Let's Code Tower of Hanoi
 </a>




 <a href="https://mega.nz/embed/U1IGjTTJ#UbhMMGqGICVws4QtyFMyqgDv6MC5SDOCIMwlCUgw9Z4" allowfullscreen
target="eduaction"> 
34. Quiz 1 Solutions
 </a>








   

<br/>




    
    </div>

<hr/>








<button class="dropdown-btn" onClick={show} > 6. Arrays Representation
    </button>
    <div class="dropdown-container">
   





 <a href="https://mega.nz/embed/hlAW1JAD#t7uN5x0XJy9G2na5MCQwuQb6fxHx-gtcd7FpuJkXqr0" allowfullscreen
target="eduaction"> 
1. Introduction to Array
 </a>
   
 <a href="https://mega.nz/embed/s5xQhARK#AMpIxV3V4IMs9uhesmTW9Xdj_rMgJOLqaia1vEOXMno" allowfullscreen
target="eduaction"> 
2. Declarations of Array
 </a>

 <a href="https://mega.nz/embed/98IQSBwZ#RQV4pgM4Mlh9qljdm_Er5bArcQu43xx3SUINSlO_tK8" allowfullscreen
target="eduaction"> 
3. Demo - Array Declaration
 </a>

 <a href="https://mega.nz/embed/Z4JEXDzJ#LOXTwSfjYWQuHLFvZP-uSYThtNRd-NislYHl59toF1E" allowfullscreen
target="eduaction"> 
4. Static vs Dynamic Arrays
 </a>

 <a href="https://mega.nz/embed/VlgEVKYA#qDEswvdz0TOv9xE1x_mjZeBv4Goy_HMZhcdPICm1R-c" allowfullscree
target="eduaction"> 
5. Demo - Static vs Dynamic Array
 </a>

 <a href="https://mega.nz/embed/chIg1bja#8o9SYn5BwHH0v_H3pxrcUmB_T4CZSCj0XG2x2Y-D8C8" allowfullscreen
target="eduaction"> 
6. How to Increase Array Size
 </a>

 <a href="https://mega.nz/embed/E0IQSbSZ#l9PmmiEHNHZryoka5_xx5V5kNLjn3EGnAuYikw7_0ik" allowfullscreen
target="eduaction"> 
7. Demo - Increasing Array Size
 </a>

 <a href="https://mega.nz/embed/coxkhQyT#k_Az5w0qsssmhsJOzkORRHx_lYqh0oDsvxclvVZwqlU" allowfullscreen
target="eduaction"> 
8. 2D Arrays
 </a>

 <a href="https://mega.nz/embed/R5h0xQZC#-Hr-taqw0IQQGB3g7cSA_O3kZgmQ6VznCel1HnUZ9qo" allowfullscree
target="eduaction"> 
9. Demo - 2D Array
 </a>

 <a href="https://mega.nz/embed/gso2RQ4b#Zi7Pu0l7_kah0Qx4hErGCp2DobpxM8_Fb40KjfXgqxI" allowfullscree
target="eduaction"> 
10. Array Representation by Compiler
 </a>

 <a href="https://mega.nz/embed/18xGWYQR#lcBnPS47nGc9-gDYxEcig8CUgPTbjkYVmkJIBrlHe6E" allowfullscreen
target="eduaction"> 
11. Row Major Formula for 2D Arrays
 </a>

 <a href="https://mega.nz/embed/w0B2FbwR#WCxJAY1NVOs34-qWy2_kYtnm7_NsDfl-JJR5KCCb6D0" allowfullscree
target="eduaction"> 
12. Column Major Formula for 2D Arrays
 </a>

 <a href="https://mega.nz/embed/RsBCkToJ#QA0mkRpipgRSIVKa1pTkI3ATwig62RSgsVyGxMRsLc8" allowfullscreen
target="eduaction"> 
13. Formulas for nD Arrays
 </a>

 <a href="https://mega.nz/embed/41ZQkLaa#1BPdUzTUg-Kre_YVdGTAdgkYiwtW646V3r8nBps-PVU" allowfullscreen
target="eduaction"> 
14. Formulas for 3D Arrays
 </a>

 
 


 
   



    
    </div>

    <hr/>

    <button class="dropdown-btn" onClick={show} >7. Arrays ADT
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://mega.nz/embed/c94gjCxB#b-_KctW3QyeTkgX6-pCdqIACVwWmjg2y-fzC7PEGG10" allowfullscreen 
target="eduaction"> 
1. Array ADT
 </a>



 <a href="https://mega.nz/embed/ItxQlS5A#9iZwtimbq2zjIknb884JVFgsO-JBj41wtTgtZflD7ZM" allowfullscreen
target="eduaction"> 
2. Demo - Array ADT
 </a>
   

   
 <a href="https://mega.nz/embed/9xwWlIrQ#dGkSyUXUaOAw76p5OuOzKxyuJKa5y7Xji_nJqt1Y9Uw" allowfullscreen
target="eduaction"> 
3. Inserting in an Array
 </a>


 <a href="https://mega.nz/embed/EhokGaDJ#a_5WVuDpfNxwOkP0qvc2JmpPFxVoYt7GTFYO9XTc-fQ" allowfullscreen
target="eduaction"> 
4. Let's Code Insert
 </a>

 <a href="https://mega.nz/embed/BxgwCKAT#RWpxiTDFEjoKf1W13aEh793JOye6SVbhIo2hrU-M2qY" allowfullscreen
target="eduaction"> 
5. Deleting from Array
 </a>

 <a href="https://mega.nz/embed/Z8hkkKxL#cTbq78I2y5MvtBHso-Z7nDMIJrNajiGh4TuSKYWkguo" allowfullscreen
target="eduaction"> 
6. Let's Code Delete
 </a>




 <a href="https://mega.nz/embed/x4x2yYLL#4xzdoqMbFWZG_ZKZZ_6th_DwWHL2O85QXYGHNZWrfJU" allowfullscreen
target="eduaction"> 
7. Linear Search
 </a>



 <a href="https://mega.nz/embed/Vx5WDKaI#NC-G-HhMUw5QX318lX4PF9Gdv3vrMNIRld68xHBSfAI" allowfullscree
target="eduaction"> 
8. Improving Linear Search
 </a>
   

   
 <a href="https://mega.nz/embed/1khwiYrL#JXMRK5yQ2cvKscLgJhxkU6q9u2ieQzxbfr6t4NYJRjY" allowfullscreen 
target="eduaction"> 
9. Let's Code Linear Search
 </a>


 <a href="https://mega.nz/embed/ssx0FYQa#iYqoFj_wsm4EX4cB4Pq6di4nIhWXEoRsN8k2FUy0jqY" allowfullscreen
target="eduaction"> 
10. Binary Search
 </a>

 <a href="https://mega.nz/embed/YtokBIrC#F-tsM4IuY_KxDgtOeZ1wGygj38aEk7XRLgs8vXxZUDw" allowfullscreen
target="eduaction"> 
11. Binary Search Algorithm
 </a>

 <a href="https://mega.nz/embed/QkgW1SrQ#oEaRK5kIMsiQQNtKIxRaKiR1CpubGMqMBs7wENGc6Gw" allowfullscreen
target="eduaction"> 
12. Let's Code Binary Search
 </a>


 
 <a href="https://mega.nz/embed/BhgwzSBR#5n7hMnYSfKasfSezdapVM5xF42kkCI898-3q6IDzuBE" allowfullscreen
target="eduaction"> 
13. Analysis of Binary Search
 </a>



 <a href="https://mega.nz/embed/1hQUTLYB#GZqd6GF6yq9YpY8vKGaVM_jHMt7cbs73FMdMAlz5vZI" allowfullscree
target="eduaction"> 
14. Average Case Analysis of Binary Search
 </a>
   

   
 <a href="https://mega.nz/embed/NkACiZRC#LzVfwrlHSf5Yt-RiluScMO6xtUc_BwBgQiDzFqBPsvU" allowfullscreen
target="eduaction"> 
15. Get( ) Set( ) Avg( ) Max( ) functions on Array
 </a>


 <a href="https://mega.nz/embed/NsI20ZgC#Yu3Pufqvn-v8khXCr9vNILntX1qpjFIb0_ejIi96AZU" allowfullscreen
target="eduaction"> 
16. Let's Code Get() Set() Max() on Array
 </a>

 <a href="https://mega.nz/embed/Jhggna4T#e-RPbh_v1h5AnDrD9vnOn1EENKnPTl_19pSJTMpmv_o" allowfullscreen
target="eduaction"> 
17. Reverse and Shift an Array
 </a>

 <a href="https://mega.nz/embed/4kxCGAzb#bcm80GcnarX8S7MBkq0nzOrC4eZQsrzPSyMX5eD1O20" allowfullscreen
target="eduaction"> 
18. Lest's Code Reversing an Array
 </a>

 <a href="https://mega.nz/embed/QwYClZxD#XLqsPqlkCm_M0hSrMPJJc_o6-fhuWnlGIHUcytogQdE" allowfullscreen
target="eduaction"> 
19. Check if Array is Sorted
 </a>


 <a href="https://mega.nz/embed/5wxEVQqB#XI3gEnIoSxFvt9LKKsOUKnf4s8dPnqfNxjb3n5K1Hl0" allowfullscreen 
target="eduaction"> 
20. Let's Code to check if Array is Sorted
 </a>

 <a href="https://mega.nz/embed/cpRSCJpK#dCK2PnQhuNvKfE6xCCOca9uSdvQ-z4txAinEARrfnVY" allowfullscreen
target="eduaction"> 
21. Merging Arrays
 </a>

 <a href="https://mega.nz/embed/ZoRwEbRT#bFnZwxupve-Qg3GOLsIH_l-U0-ukBK_5rZVPgSIVjxY" allowfullscreen
target="eduaction"> 
22. Let's Code to Merge Arrays
 </a>

 <a href="https://mega.nz/embed/Y95GxILA#pFMjY1Xo_a5X1I5CRLS4CfVt_iKb8Mml2um3yd3TD2E" allowfullscreen
target="eduaction"> 
23. Set operations on Array - Union, Intersection and Difference
 </a>


 <a href="https://mega.nz/embed/J5oCSAoD#etjRmJ3alDjCsMehaV8nI00AXecZzTNJ7JhjxecyCQ0" allowfullscreen
target="eduaction"> 
24. Let's Code Set operations on Array
 </a>

 <a href="https://mega.nz/embed/skg2RI6J#-qAKaUmzTX4QXXF-5_pMRaNAcZrH0mqTOB2J_SYcuuc" allowfullscreen
target="eduaction"> 
25. Let's Code a Menu Driver program for Arrays
 </a>

 <a href="https://mega.nz/embed/FpxSwCLR#C5w3Qz7UsqpjlKllUzJGQIkvPqxgY6gfYI5YroDIXuw" allowfullscreen
target="eduaction"> 
26. Let's convert C program for Array to C++
 </a>


 <a href="https://mega.nz/embed/dlwQlQCZ#iGG9jlSmj0ZQLqgELwqOrF7fJujIdh_YxWkIWii5Dds" allowfullscreen
target="eduaction"> 
27. Let's Put all together in C++ program for Array
 </a>


 <a href="https://mega.nz/embed/lkISVRgC#emlv6rbO9tF8fZtlJJkYh78HpOR3oDASitDsFu5-o_s" allowfullscreen
target="eduaction"> 
28. Student Challenge  Finding Single Missing Element in an Array
 </a>

 <a href="https://mega.nz/embed/1oBCCB4T#JXrPHz7O1pQjJkgKDLpDM_c_gyQOcob1P1Q5uG0Ya-o" allowfullscreen
target="eduaction"> 
29. Student Challenge  Finding Multiple Missing Elements in an Array
 </a>

 <a href="https://mega.nz/embed/gsZmSJJL#Cc9NcDdbNkX1bmPpMqFcFLkJP4Lh-tnWmBPHXGzunPI" allowfullscreen
target="eduaction"> 
30. Student Challenge  Finding Missing Element in an Array Method 2
 </a>


 <a href="https://mega.nz/embed/hsZ2GRob#81sQuaz1vIUqZ87175dhFIxic2yTX4tipQ4JVTREn90" allowfullscreen
target="eduaction"> 
31. Student Challenge Finding Duplicates in a Sorted Array
 </a>


 <a href="https://mega.nz/embed/spZWFLoZ#tVg44R0Ji4hEztPtZ4ZTzH9FNca0QLjBDA1IZNIFzM0" allowfullscreen
target="eduaction"> 
32. Student Challenge  Finding Duplicates in Sorted Array using Hashing
 </a>

 <a href="https://mega.nz/embed/h0QCHRwB#GLh2YTJZSmFfGhbWf6ZMozqzFmBUGiH2SV0PN_CaLjM" allowfullscreen
target="eduaction"> 
33. Student Challenge  Finding Duplicates in a Unsorted Array
 </a>

 <a href="https://mega.nz/embed/w4BU0Jib#R4t1nml5lCUrcocSE7snGwZQR4baqqIMxoOjRHaB5Zs" allowfullscreen
target="eduaction"> 
34. Student Challenge  Finding a Pair of Elements with sum K
 </a>


 <a href="https://mega.nz/embed/BwQwCT5a#KRrWVsmvRC9FNwNnFz6lw_kfOBlKNo1NouUYGrUErYE" allowfullscreen
target="eduaction"> 
35. Student Challenge  Finding a Pair of Elements with sum K in Sorted Array
 </a>


 <a href="https://mega.nz/embed/8hByhJpT#JrQJZx23jEcMGjBzQJS8lawLnf4Q5eF8GMsq6Qxm1_Q" allowfullscreen
target="eduaction"> 
36. Student Challenge  Finding Max and Min in a single Scan
 </a>










    
  </div>

<hr/>


<button class="dropdown-btn" onClick={show} >8. Strings
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://mega.nz/embed/HngSxSQJ#JPAx7_FNCF-nkI7FqkyItIQK-sRZfYeQBM3CQhA9dec" allowfullscreen
target="eduaction"> 
1. Introduction to Strings
 </a>



 <a href="https://mega.nz/embed/KvASALBS#4YmlzNxrDFSPU-SXSq2LSAJDKrIVnLtmtChUT8-aPO8" allowfullscreen
target="eduaction"> 
2. Finding Length of a String
 </a>

 <a href="https://mega.nz/embed/myYQFBiC#mV2HZLX10DuEvVy2rQsp9PgQL5E3WX5vKXs-EUsl-u4" allowfullscreen
target="eduaction"> 
3. Changing Case of a String
 </a>



 <a href="https://mega.nz/embed/KmRSWbAD#oe8dM3IQeEqsQB5DKsGeS5RdrZlWkTKE4iU152WlmvQ" allowfullscreen
target="eduaction"> 
4. Counting Words and Vowels in a String
 </a>


 <a href="https://mega.nz/embed/uuREQDYI#oanIIeZl5ZT-SCaaGp8s1VpI0AJwVr56UC8gsCQ2WsI" allowfullscreen
target="eduaction"> 
5. Validating a String
 </a>



 <a href="https://mega.nz/embed/vuhimSrQ#jdeT4UIEfS7rHeLkw5Te8NNEjcBp5VFE2uIM0SofnvY" allowfullscreen
target="eduaction"> 
6. Reversing a String
 </a>


 <a href="https://mega.nz/embed/6qg2jYgK#kFMlNBDDY6bT1lJnlhjXvitjzYxyA3qvApJ0tRZRyNc" allowfullscreen
target="eduaction"> 
7. Comparing Strings and Checking Palindrome
 </a>



 <a href="https://mega.nz/embed/Siw23S6b#rsmuI8bAvwc1ppH25nNmsXDJx2QjLWJy1aFDu8KBOXE" allowfullscreen
target="eduaction"> 
8. Finding Duplicates in a String
 </a>


 <a href="https://mega.nz/embed/ivY02RwS#8runyqijzRgtBADrArN7C-_ac6K9SgM4mtmlFxN07jM" allowfullscreen
target="eduaction"> 
9. Finding Duplicates in a String using Bitwise Operations
 </a>



 <a href="https://mega.nz/embed/G3Jw2DoR#TFd0N2bUSsmyQV_WAkk1OvR8BwrYIBXbzgIpbcsB_7M" allowfullscreen
target="eduaction"> 
10. Checking if 2 Strings are Anagram
 </a>


 <a href="https://mega.nz/embed/y3Y2EZJB#sjQEgJvBpu0I1FNAOMSK57rMFbhynTNDKxgKUNmFKBk" allowfullscree
target="eduaction"> 
11. Permutation of String
 </a>





   
    
  </div>

<hr/>



<button class="dropdown-btn" onClick={show} >9. Matrices
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://mega.nz/embed/aj5EUIJA#Y48SIxAFOyX-2hhu-HyXT1sI9P9jopvApJCyM2fn4us" allowfullscreen
target="eduaction"> 
1. Section Introduction
 </a>



 <a href="https://mega.nz/embed/qrR0WDBQ#FKXWYLecVDYUbmlL4nC6sSihabg7ROZLaBv3DC3v9L8" allowfullscreen
target="eduaction"> 
2. Diagonal Matrix
 </a>

 
 <a href="https://mega.nz/embed/rnIGBRjb#1g70vRx72Yb3EhPV8D57IjfJg48esKBkeQDhkHCDGjI" allowfullscreen
target="eduaction"> 
3. Let's Code Diagonal Matrix
 </a>


 <a href="https://mega.nz/embed/byYSxRyZ#Ys8Jz0CalT9Q4UJMi5QNgEVRdSc-jUZeWImLuSxNJF8" allowfullscreen
target="eduaction"> 
4. C++ class for Diagonal Matrix
 </a>



 <a href="https://mega.nz/embed/LuYSzbSa#qpzPY8HoCcL6OTNncV_DfbJ0P7eyuL62su2GjhZfTxA" allowfullscreen
target="eduaction"> 
5. Let's Code C++ class for Diagonal matrix
 </a>


 <a href="https://mega.nz/embed/bmYWGZYR#GQLY3n7_LiQgx9TFinci8eRyTgbCZYGUJ_NGeVHSffc" allowfullscreen
target="eduaction"> 
6. Lower Triangular Matrix Row-Major Mapping
 </a>



 <a href="https://mega.nz/embed/WnAUwTIY#24kTaihsVWkIo-5vlkgGpPjDDwnhfGfF1nkBBREhevg" allowfullscreen 
target="eduaction"> 
7. Lower Triangular Matrix Column-Major Mapping
 </a>


 <a href="https://mega.nz/embed/jzAwgbqA#dLsMd-0SS7aeiPTi39_GVnwgsUlQYNUP1tlgMc9GF3U" allowfullscreen
target="eduaction"> 
8. Let's Code Lower Triangular Matrix in C
 </a>



 <a href="https://mega.nz/embed/urx0QArJ#opr0annTDn9BGGS51vTyMP28fxkTpkXhJRjUkDwqhz0" allowfullscreen
target="eduaction"> 
9. Let's Code Lower Triangular Matrix in C++
 </a>

 <a href="https://mega.nz/embed/myhU0aKa#NcyqzcWc14YySK8a337Dwo33lVk3yy0E19_smg3j6NA" allowfullscree
target="eduaction"> 
10. Upper Triangular Matrix Row-Major Mapping
 </a>



 <a href="https://mega.nz/embed/y2oQ3aKZ#__lSVGAdveF8Ef_iB2_aqdoo8p0QhH3pAF0j5P9Hw3M" allowfullscree
target="eduaction"> 
11. Upper Triangular Matrix Column-Major Mapping
 </a>


 <a href="https://mega.nz/embed/en4QGKoB#HXD4ZStH3qtFZWetu1ifxhfzJ2dJPpm2ihRCf4nAMsI" allowfullscreen
target="eduaction"> 
12. Symmetric Matrix
 </a>



 <a href="https://mega.nz/embed/imhkFKJI#BiS9Cty_c01TmWSVbUf4Nvi2r-F6OQGC0boqjRMXgc8"
target="eduaction"> 
13. Tri-Diagonal and Tri-Band Matrix
 </a>

 <a href="https://mega.nz/embed/auI00BbQ#BKpXE3uqNVwgswlnpl6AKLaWIbltguu9loD04_-qaIc" allowfullscreen
target="eduaction"> 
14. Toeplitz Matrix
 </a>



 <a href="https://mega.nz/embed/HiAUARCJ#B1mfONKjp59pXyjfL_qFFIAjb8wO4nRUfFMWDvINT9g" allowfullscreen 
target="eduaction"> 
15. Menu Driven Program for Matrices
 </a>

 <a href="https://mega.nz/embed/DrBQWJBQ#5XdhhIpNIvX57qdav4WcJGeGxztV71lZUVDYbXGFSZg" allowfullscreen
target="eduaction"> 
16. Menu Driven Program for Matrices using Functions
 </a>



 <a href="https://mega.nz/embed/WroijCSR#X8ijXJWbZbfLE7VgFQRYJOUaxMJtk03DyKuH8qtH2u0" allowfullscreen
target="eduaction"> 
17. How to Write C++ Classes for All Matrices
 </a>








   
    
  </div>

<hr/>



<button class="dropdown-btn" onClick={show} >10. Sparse Matrix and Polynomial Representation
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://mega.nz/embed/77xmHYbT#6uFFAKwAIrDSkS-vq5AtiZLKj21E-XgP9taXGDfdMPw" allowfullscreen
target="eduaction"> 
1. Sparse Matrix Representation
 </a>



 <a href="https://mega.nz/embed/qm40HaRS#AuLMATOoN8jokMAhT-fCwoJMxQ_imqCZo_9o-QIjApM" allowfullscreen
target="eduaction"> 
2. Addition of Sparse Matrices
 </a>
 
 <a href="https://mega.nz/embed/OzwkhIxJ#dDipu4ktro-AyXHz8ZTFsMHsI-VC7j_EZWnsgyfGm1g" allowfullscreen
target="eduaction"> 
3. Array Representation of Sparse Matrix
 </a>


 <a href="https://mega.nz/embed/mjxgCY5K#tDT5eaooC-9w7I_F-lTV4vpCCKJi7h9FP2tVJMEptcc" allowfullscreen
target="eduaction"> 
4. Let's Code to Create Sparse Matrix
 </a>



 <a href="https://mega.nz/embed/bzI2VRzQ#en5IwMJ98snpCSUy_g8OAM5xT6Jk5rijy8F8DqPOtNk" allowfullscreen
target="eduaction"> 
5. Program for Adding Sparse Matrix
 </a>


 <a href="https://mega.nz/embed/avYQyRpa#0BIkuMbTGeroZ_gyDyNFtMiHRImpFfx0KRhZgUJFzvQ" allowfullscreen
target="eduaction"> 
6. Let's Code to Add Sparse Matrix
 </a>



 <a href="https://mega.nz/embed/yiYizJKD#b6lRlliTi2b2VMIn6Y-kwZibQDcY7P5oRFV1zIH1wEM" allowfullscreen
target="eduaction"> 
7. Let's Code Sparse Matrix using C++
 </a>


 <a href="https://mega.nz/embed/inQkwRiS#ex3DhZ5n0XjTFYRfPFR5A3MgCLq1mZJu8zEQszyoMc0" allowfullscreen
target="eduaction"> 
8. Let's Code Sparse Matrix using C++ Continued.....
 </a>



 <a href="https://mega.nz/embed/ruRQmLSZ#xzIl6jgAy_0LDTdRly7mR5U-noKOXhjXreXkBg79Ykw" allowfullscreen
target="eduaction"> 
9. Polynomial Representation
 </a>

 <a href="https://mega.nz/embed/LqJ2jBAY#2XrE7xH9r9ldbp1XACsFvv6J4S3OsngcGe250HnK0fM" allowfullscree
target="eduaction"> 
10. Polynomial Evaluation
 </a>



 <a href="https://mega.nz/embed/WqJWBJYa#0HLC6S0JSFqTVfKZYnUYVoO-IT1FSBWlpPSKOg3f_T8" allowfullscreen
target="eduaction"> 
11. Polynomial Addition
 </a>


 <a href="https://mega.nz/embed/D3Y0WDiY#-gKbXcxWEKY0EE_6dhfRr4EYHvF-16Zolh6yRov8PAA" allowfullscreen
target="eduaction"> 
12. Let's Code Polynomial
 </a>




   
    
  </div>

<hr/>


<button class="dropdown-btn" onClick={show} >11. Linked List
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://mega.nz/embed/T3Bk3Z4A#j5VmrcQQqmtrnzycSIMp3O_6e-OtctyzDW8ZYOMaeLw" allowfullscreen 
target="eduaction"> 
1. Why we need Dynamic Data Structure Linked List
 </a>



 <a href="https://mega.nz/embed/uzJGAL4L#4A69afC3FUcfeEzGF8TJ390oU1K8O5XHHI7ZCxtZq1M" allowfullscreen
target="eduaction"> 
2. About Linked List
 </a>

 
 <a href="https://mega.nz/embed/H2ZAlThS#pSdEVQunBWMBBGPakxCq6igN-QIMdX0LqE1S2T-uAjY" allowfullscreen
target="eduaction"> 
3. More About Linked List
 </a>

 <a href="https://mega.nz/embed/PqJmlDQY#VF_PA4LE0h2A-VJ_u-t168e_AY1M05iSDfbP1tuIQS0" allowfullscreen 
target="eduaction"> 
4. Display Linked List
 </a>



 <a href="https://mega.nz/embed/735yUS5b#l-XqBp1Xf9Xm_CV8qoWNmro4aPGDIPurJvCYXVOXVt0" allowfullscreen
target="eduaction"> 
5. Let's Code Display for Linked List
 </a>

 <a href="https://mega.nz/embed/L6IQQbDI#NfaLSiAfdyKvSLZHa-7vgf7QxkXjrlpnZgGk1mBW9lU" allowfullscreen
target="eduaction"> 
6. Recursive Display of Linked List
 </a>



 <a href="https://mega.nz/embed/6rxAiYQR#ZKstiCvYY0F6O_30RAX1topArwEmGwlULcvQImIZBJc" allowfullscreen
target="eduaction"> 
7. Le's Code Recursive Display for Linked List
 </a>




 <a href="https://mega.nz/embed/vj5SlKJZ#c63XOHHccmwu9LnY5oL-PKIp8MkuqTKQyvbX9KkHuvk" allowfullscreen
target="eduaction"> 
8. Counting Nodes in a Linked List
 </a>


 <a href="https://mega.nz/embed/DmxgmQQT#KycfMCnd0SNi7k4oe9mdKUcVddf04cPVN1Q4ZMge0nE" allowfullscree
target="eduaction"> 
9. Sum of All Elements in a Linked List
 </a>



 <a href="https://mega.nz/embed/e2x0zCxL#deajI0Cs9F9CYHgwJisuQwcFnm4sQ5pz2sCVmZGyxJk" allowfullscreen
target="eduaction"> 
10. Let's Code Count and Sum
 </a>


 <a href="https://mega.nz/embed/f6wkzQaQ#yKGqQXj_ZEgJGPx8oPYG0wN3OX4dD9wzXc_mmnqPyz0" allowfullscreen
target="eduaction"> 
11. Maximum Element in a Linked List
 </a>



 <a href="https://mega.nz/embed/z2oSTATa#0i-9J4GdHV_gFZNQHKaFrwy5Y8wOFTa0Hk_qDm5WZoQ" allowfullscreen
target="eduaction"> 
12. Let's Code Max for Linked List
 </a>


 <a href="https://mega.nz/embed/Gih2XIBR#Ul7X8qoFIc0jdlyeZVfM-57x9caBb6e8lX6ULVdbpH4" allowfullscreen
target="eduaction"> 
13. Searching in a Linked List
 </a>



 <a href="https://mega.nz/embed/qmwCTa5b#b73TxFo7XMRD4qEZWJs1VeuXR5zHKl4qnN9mU3aJYgs" allowfullscreen
target="eduaction"> 
14. Improve Searching in Linked List
 </a>

 <a href="https://mega.nz/embed/O7o0lSjI#W0cm6QVUW1IO7NOHr9-zmgA9WZKQP1SiRz-51EzNR_k" allowfullscreen
target="eduaction"> 
15. Let's Code Searching in Linked List
 </a>



 <a href="https://mega.nz/embed/3nxgUSYC#dzeNNzbGHkpxOnsWwZxUFoN318gyMD-hbITgRvAYdJg" allowfullscreen
target="eduaction"> 
16. Inserting in a Linked List
 </a>


 <a href="https://mega.nz/embed/36oUBagL#m_-_2SDg-MJV2b8_TdHMPAyJITewFUNppiX_XALpTqs" allowfullscreen
target="eduaction"> 
17. Let's Code Insert for Linked List
 </a>



 <a href="https://mega.nz/embed/67omhQCB#FDMGT7XAI7jn-NcmuiiyVwBTDyvx3ih73qzgRWIojmE" allowfullscreen
target="eduaction"> 
18. Creating a Linked List using Insert
 </a>

 <a href="https://mega.nz/embed/qzowCChA#tv5e-9w8y6isQmm2gLuRO95-Sevdc6u7eoo1QpIQezc" allowfullscreen
target="eduaction"> 
19. Creating a Linked List by Inserting at Last
 </a>



 <a href="https://mega.nz/embed/7rpSFaqL#bAEyM-BB0ENG34Ugi1Ot2gVKrXOAlDYIhfMxbJ8MvoY" allowfullscreen
target="eduaction"> 
20. Inserting in a Sorted Linked List
 </a>

 <a href="https://mega.nz/embed/72gmyQ6a#DcxZmhgS6GlFblWOeof7lr6UaB4Nkvs0WHJFQFXT1VI" allowfullscreen
target="eduaction"> 
21. Let's Code Insert in Sorted Linked List
 </a>



 <a href="https://mega.nz/embed/v6gSjKaR#oAS73ldXSPe08whFPF_nmPkEM7rrRkac1H2xeJqD_Io" allowfullscreen
target="eduaction"> 
22. Deleting from Linked List
 </a>



 <a href="https://mega.nz/embed/f7pySAoZ#hASNhgxXugn_4v3_RcHLQGW0jhYUWqSYM2d45UG1CQA" allowfullscreen
target="eduaction"> 
23. Let's Code Delete on Linked List
 </a>


 <a href="https://mega.nz/embed/LnxQ1CRZ#tKRf6Yar6IOGjDknfXg0ZjNqINeENDmFfpikUSnN3As" allowfullscreen
target="eduaction"> 
24. Check if a Linked List is Sorted
 </a>



 <a href="https://mega.nz/embed/PrwG3aRL#bGo5Nhn34SJkv0kVO4GseK2DfxAGWUPNNrvM27-Y3_Q" allowfullscreen
target="eduaction"> 
25. Let's Code to check if Linked List is Sorted
 </a>


 <a href="https://mega.nz/embed/emoSSAgQ#KX8xAMYfYGia7jO_-iTQ2b8fgVBv9no5_dNhkG_UuZ4" allowfullscreen
target="eduaction"> 
26. Remove Duplicates from Linked List
 </a>



 <a href="https://mega.nz/embed/f7p0wQKT#QmjqsWUzKiKCqGoGotQaypYR6b85JJ9prbtr89w2kcw" allowfullscreen 
target="eduaction"> 
27. Let's Code to Remove Duplicates from Linked List
 </a>


 <a href="https://mega.nz/embed/e74mUCiK#a3TzaTdpVgay5CKH9n6QaMZvj6GvQvaiIit7yXrUeUU" allowfullscreen
target="eduaction"> 
28. Reversing a Linked List
 </a>



 <a href="https://mega.nz/embed/GiR2zbwR#MZFXcI6jHVN_dr6CGSA2Yj1kbDq4mlBCbA01fkX7RKo" allowfullscreen
target="eduaction"> 
29. Reversing using Sliding Pointers
 </a>

 <a href="https://mega.nz/embed/qjRWFLqD#JSZe7a4fenxGj4LzwPlzjJBCb9usK9mGHATY6frabGo" allowfullscreen
target="eduaction"> 
30. Recursive Reverse for Linked List
 </a>



 <a href="https://mega.nz/embed/quRknZrb#WwP8A60mTiTNcSbq9HTc7xT5zYmLtzUpo4BUiVD9iTQ" allowfullscreen
target="eduaction"> 
31. Let's Code Reversing a Linked List
 </a>


 <a href="https://mega.nz/embed/W3gAhQ7J#v8q2n_DZSE2oJto0D06UnBttPiufK4LN_FK8lltUCCE" allowfullscreen
target="eduaction"> 
32. Concatenating 2 Linked Lists
 </a>



 <a href="https://mega.nz/embed/GipURYJQ#Uqp8R0LOTJYzfrjmQlD-9Sy2NwkRFdiCJMTBArZPNqI" allowfullscreen
target="eduaction"> 
33. Merging 2 Linked Lists
 </a>

 <a href="https://mega.nz/embed/HyxynYiA#aAiLw3pA7YRHyWS_6cZ-YRIrEHe8cJfl3abUDDpanGU" allowfullscreen
target="eduaction"> 
34. Let's Code to Concatenate and Merge Linked Lists
 </a>



 <a href="https://mega.nz/embed/XvYAlbYY#4g6WUTzPQx5rZrFL-6XZxDSVyr4Xt7HxkYII_uiFM5w" allowfullscreen
target="eduaction"> 
35. Check for LOOP in Linked List
 </a>

 <a href="https://mega.nz/embed/WnR2GDiL#rKxwkqfn4Z5hUHfgbU6A01uyhR-2GbwovRDT_3FAfTc" allowfullscreen
target="eduaction"> 
36. Let's Code to Check LOOP
 </a>



 <a href="https://mega.nz/embed/Xu5QHSiJ#UJf2JTI_370hH85A2dfN3H2LVMud9ocE8Eij32wvGgI" allowfullscreen
target="eduaction"> 
37. Let's Code a C++ class for Linked List
 </a>




 <a href="https://mega.nz/embed/66Y0EDJC#z6TjQZS3pJsVmgkPa-y2Z_sVm0_ufSlY9xtyTKL7Y40" allowfullscreen
target="eduaction"> 
38. Circular Linked List
 </a>

 <a href="https://mega.nz/embed/nrYgxT6A#0ox5qrHzbmNexNh25r5GFGdadYdUNQsFEWZ2V7Uw3jQ" allowfullscreen
target="eduaction"> 
39. Display Circular Linked List
 </a>



 <a href="https://mega.nz/embed/fj4mSICL#t1-ol_4KwArre3yzY2yeosx-BYyYXlW9x3ZIdzcL8Os" allowfullscreen
target="eduaction"> 
40. Le's Code Circular Linked List
 </a>

 <a href="https://mega.nz/embed/zr5UBSBb#BIeh5JB9ogIXDF8k4svlfxFUqKJMzYyU6pSpACrj054" allowfullscreen
target="eduaction"> 
41. Inserting in a Circular Linked List
 </a>



 <a href="https://mega.nz/embed/auxEyCjY#J1uH-ZJK146b6D68YHc7q30SQIMW9t60G8Tedl5rEVY" allowfullscreen 
target="eduaction"> 
42. Let's Code Insert for a Circular Linked List
 </a>




 <a href="https://mega.nz/embed/v6xkyCjS#X5DuOpZNBtKBW1S8JXVonjxTtXCKZNw2Blljt9FvV5k" allowfullscreen
target="eduaction"> 
43. Deleting From Circular Linked List
 </a>


 <a href="https://mega.nz/embed/rzJygJRJ#QmeWcMf2B0i3c6Xi8l0GiF1tE0AQAXBPtw6cdyZeoAs" allowfullscreen 
target="eduaction"> 
44. Let's Code for Circular Linked List
 </a>



 <a href="https://mega.nz/embed/GvQgHTpT#0_aw5eksg3dwwyFJcTvStN-ivDFpbZfZz75ACVRp2E4" allowfullscreen
target="eduaction"> 
45. Doubly Linked List
 </a>


 <a href="https://mega.nz/embed/nqRWSDpD#TWNrdvdajxbZGhGqTBHio-YEFYlMB5UWsl3Yc-Hs-tM" allowfullscreen
target="eduaction"> 
46. Let's Code Doubly Linked List
 </a>



 <a href="https://mega.nz/embed/XvBG3RyZ#Q8CFbwZRmYAuFAHICLNUDmdblM1nbFp9jSFnC4Yu8-4" allowfullscreen
target="eduaction"> 
47. Insert in a Doubly Linked List
 </a>


 <a href="https://mega.nz/embed/ynBmULwB#Nkkj424jcOzsWszd6U3L3WWrvaZBArLsbnDSB-pXaKE" allowfullscreen 
target="eduaction"> 
48. Let's Code Insert for Doubly Linked List
 </a>



 <a href="https://mega.nz/embed/PrBglJJI#lY3ZJ4MDh0-_n5REmW-egxTrleBKUgQ95ov5YSY3pxs" allowfullscreen
target="eduaction"> 
49. Deleting from Doubly Linked List
 </a>

 <a href="https://mega.nz/embed/SvxEEaJZ#skmGJTmHg5a5ziQguAdvohR_f0PPPHnz6RKuzK9jp7I" allowfullscreen
target="eduaction"> 
50. Let's Code Delete for Doubly Linked List
 </a>



 <a href="https://mega.nz/embed/Dr4miaQZ#Yrt13xhTgac6T4w9f7R9crOuG-Kwo6kZiN_yPcZ8V_s" allowfullscreen
target="eduaction"> 
51. Reverse a Doubly Linked List
 </a>


 <a href="https://mega.nz/embed/LrgwnQCC#wd6Vem5BIr-hHs-CTZDKKlAZYN66f2f1_ZiJrVYaB_I" allowfullscreen
target="eduaction"> 
52. Let's Code Reverse for Doubly Linked List
 </a>



 <a href="https://mega.nz/embed/72oGXQwT#u2ZdPAcUDy6cbIULwdgbOfPQORu2ckYIm3TMvCzxY8o" allowfullscreen
target="eduaction"> 
53. Circular Doubly Linked List
 </a>

 <a href="https://mega.nz/embed/q7pWRIrR#xRZjYpYPdMbAmsl37gWiOSAfCE8s8kPGmM53Nkxlj6E" allowfullscreen
target="eduaction"> 
54. Comparison of Linked List
 </a>



 <a href="https://mega.nz/embed/z24GQYbD#WAqyLglBwIcUdwbOy7MyMY7knQfKW1xEEylOEpgjIfg" allowfullscreen
target="eduaction"> 
55. Comparison of Array with Linked List
 </a>

 <a href="https://mega.nz/embed/rqYQxLrb#bMceSPGynbisbyeyWcqTwa3PpzwWgG6IUl6Fobkw_kQ" allowfullscreen
target="eduaction"> 
56. Student Challenge  Finding Middle Element of a Linked List.
 </a>



 <a href="https://mega.nz/embed/W3QGATKQ#_o2osfu4q0XytuDlLOCIYiLxiBm-NupCF2W5uTFDCgM" allowfullscreen 
target="eduaction"> 
57. Student Challenge  Finding Intersecting point of Two Linked List
 </a>


   
    
  </div>

<hr/>



<button class="dropdown-btn" onClick={show} >12. Sparse Matrix and Polynomial using Linked List
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://mega.nz/embed/eyBEjTiZ#MMPnkssoK5_m2sSRgVLSM7_GyEjIaoJUHhQGeNzNFfU" allowfullscreen
target="eduaction"> 
1. Student Challenge  Sparse Matrix using Linked List
 </a>



 <a href="https://mega.nz/embed/7qRmVDjD#VM7cjMVNHQBsEis0STDcCCD8E45XLRDVNJUtslKLFec" allowfullscree
target="eduaction"> 
2. Student Challenge Polynomial Representation using Linked List
 </a> 
 
 

 <a href="https://mega.nz/embed/nrAQhDAJ#W_84yM5SWWdZUt01dggXGeKg8DKA-NhykcBsB0pueok" allowfullscree
target="eduaction"> 
3. Let's Code Polynomial
 </a>




   
    
  </div>

<hr/>


<button class="dropdown-btn" onClick={show} >13. Stack
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://mega.nz/embed/yh8yCTKJ#YTrdIVcSBKJA64NfFRh1kMzAZnb4cDL5IrFaevgri_E" allowfullscreen
target="eduaction"> 
1. Introduction to Stack
 </a>



 <a href="https://mega.nz/embed/Gt9U0ZRT#hqkqW0SylxMWJxUUfcniiaorts_u6CZwJWegyi_w9Ew" allowfullscreen
target="eduaction"> 
2. Stack using Array
 </a>
   
 
 <a href="https://mega.nz/embed/n41C2bhD#jyjcUjfrjdw-phSywNQDdb9dUTgTHX26C8ZrTpDUPko" allowfullscreen
target="eduaction"> 
3. Implementation os Stack using Array
 </a>

 <a href="https://mega.nz/embed/LslUDDYJ#rK9ukCYi4DvnJgdCGPlLzaOWRYMGvOtWTu5_Y5x5Fx0" allowfullscreen
target="eduaction"> 
4. Let's Code Stack using Array
 </a>



 <a href="https://mega.nz/embed/q89wmTJK#bMts5MoihiuV6T9b7KIjGi1-zJzhnJ4jkEWPyLr0Yu8" allowfullscreen
target="eduaction"> 
5. Stack using Linked List
 </a>


 <a href="https://mega.nz/embed/G11CXLjT#-F6RRuGX7xHKFJ65aI5ma4g5uX3cW86tvNtsLis3D6s" allowfullscreen
target="eduaction"> 
6. Stack Operations using Linked List
 </a>



 <a href="https://mega.nz/embed/PlskGTLC#MaSAD92wjXId55uq_dcp6_XzCC21D0Bqqow61RWtz6c" allowfullscreen
target="eduaction"> 
7. Let's Code Stack using Linked List
 </a>

 <a href="https://mega.nz/embed/SxsgVTTS#CZmhew-206g6Qumhzq-HqQYu4grLA6EmTdP9MmFO4L0" allowfullscreen
target="eduaction"> 
8. Let's Code C++ class for Stack using Linked List
 </a>



 <a href="https://mega.nz/embed/zs0WkZAZ#DdgwYhRiTHLFBf86wEpz4p711WUTZr_uMs6MUK9nNxU" allowfullscreen
target="eduaction"> 
9. Parenthesis Matching
 </a>

 <a href="https://mega.nz/embed/G4kgDTyS#6k5OpK8HbjgYBPmXzwfJ3879xCIllV-zM3cc-QpHZlU" allowfullscreen 
target="eduaction"> 
10. Program for Parenthesis Matching
 </a>



 <a href="https://mega.nz/embed/mh0kUZwQ#sGK26kRZSzBQPeAl-IHVGi7ao9HLzsH9zaKMtSKaXGo" allowfullscreen
target="eduaction"> 
11. Let's Code Parenthesis Matching
 </a>



 <a href="https://mega.nz/embed/Tws2wJ4K#Ig69F-6XG-CcpJ3qxdBapvCcADHcU2ErXFUrqP_MuE0" allowfullscreen 
target="eduaction"> 
12. More on Parenthesis Matching
 </a>


 <a href="https://mega.nz/embed/a18mQDLb#JF4ZkPWGCZjv5VMRc3QI6m0bdrbVK9hqNCADW_S2DXA" allowfullscreen
target="eduaction"> 
13. Infix to Postfix Conversion
 </a>



 <a href="https://mega.nz/embed/apt0xRJT#PTJoB7Itb669K73vTeDyAgVB2_mvHLra_sAZJX5adOg" allowfullscreen
target="eduaction"> 
14. Associativity and Unary Operators
 </a>


 <a href="https://mega.nz/embed/TssyiRiZ#JrUQZlEDC-T1FobMbje9Fmp7OvefRSVrrvVhahY2s1I" allowfullscreen 
target="eduaction"> 
15. Infix to Postfix using Stack Method 1
 </a>



 <a href="https://mega.nz/embed/z41i1DDC#R3ClAvyq2M-bIFQYYNviQMQ0lTcKouvrvCVWNM5GDT0" allowfullscreen
target="eduaction"> 
16. Infix to Postfix using Stack Method 2
 </a>



 <a href="https://mega.nz/embed/Sh9G0B5I#XG6UhCrCF5OUhW2NZpccuUjwFrUil1xrj22Oedw5xus" allowfullscreen
target="eduaction"> 
17. Program for Infix to Postfix Conversion
 </a>
 
  <a href="https://mega.nz/embed/TwtmSRIZ#GbliBvN2kw6XYcTtZV5K_n1CFcZmYFiiywxk_HKgSZo" allowfullscreen
target="eduaction"> 
18. Let's Code Infix to Postfix Conversion
 </a>



 <a href="https://mega.nz/embed/C492wT6T#vYEjCzcPP5HyRw56MeTa-2SGLe3jOJv1tzrCspI0x_k" allowfullscreen
target="eduaction"> 
19. Student Challenge Infix to Postfix with Associativity and Parenthesis
 </a> 


 <a href="https://mega.nz/embed/bpkmRLSA#T_v355Xu_dtyusjGaehQzVaRbc3gAY2wXZThvd2QNAw" allowfullscreen
target="eduaction"> 
20. Evaluation of Postfix Expression
 </a>



 <a href="https://mega.nz/embed/a0kWEbpZ#FQSrN_Bn8ddy0-E5YAeQPS6Jd5iQkdr2FR-0fSfHAMc" allowfullscreen
target="eduaction"> 
21. Program for Evaluation of Postfix
 </a>
  

 <a href="https://mega.nz/embed/7g0mkZrB#v1MpoviEZjTC1BiRMs_AqzvEd-qiXT0mwVTax_AcdI8" allowfullscreen 
target="eduaction"> 
22. Let's Code Evaluation of Postfix
 </a>




    
  </div>

<hr/>


<button class="dropdown-btn" onClick={show} >14. Queues
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://mega.nz/embed/XwliEJyJ#oKETZz-jAVc_8viJsfS26QCXxEEDUue7k-pEYj3MH4o" allowfullscreen 
target="eduaction"> 
1. Queue ADT
 </a>



 <a href="https://mega.nz/embed/DslWxTaT#VSd3JrRxhRascxQAD1ZptSLrgNxAblQtA5cV-_Fx1tU" allowfullscreen
target="eduaction"> 
2. Queue using Single Pointer
 </a> 
 
 
  <a href="https://mega.nz/embed/m9tSkZ5A#5FQ_LPD_2zBE8b_qlWG9uuEtkOb8wjpT1iVZ6MmrW8o" allowfullscreen
target="eduaction"> 
3. Queue using Two Pointers
 </a>

 
 <a href="https://mega.nz/embed/Cw12xbaL#KbnbXmkNyk6clm_iv9x1mz4OoYaXVzRo2nmEJ9cQxec" allowfullscreen
target="eduaction"> 
4. Implementing Queue using Array
 </a>



 <a href="https://mega.nz/embed/r59WFZQS#3T2SMAIH06MRUSx5XYrOT7CyAe-VmsXsavacFuNzDdI" allowfullscreen
target="eduaction"> 
5. Let's Code Queue using Array
 </a> 
 
 
  <a href="https://mega.nz/embed/W01QgJjL#2_FzoXxeqM2k3SnFOyOc0I_7u2HbJn0eOhA3idkNQ7I" allowfullscreen
target="eduaction"> 
6. Let's Code Queue in C++
 </a>

 

 <a href="https://mega.nz/embed/nokUATiY#e8InexDikRh-oRvjbfGnK5UlwmRWroatTCpOvRoj3Sk" allowfullscreen
target="eduaction"> 
7. Drawback of Queue using Array
 </a>



 <a href="https://mega.nz/embed/nk0wUJiI#71g1tXt4uFUm0Lj-en_4kJCwcP34eliEDPqhjvOohuo" allowfullscreen
target="eduaction"> 
8. Circular Queue
 </a> 
 
 
  <a href="https://mega.nz/embed/u10QjLhQ#SFs8ks9VouASclv_WYdrEFS4B6lToIe0Pzhnr9Iz67c" allowfullscreen 
target="eduaction"> 
9. Let's Code Circular Queue
 </a>

 


 <a href="https://mega.nz/embed/K0900BrI#07pLs9yacpOdvmv-XAZHhEgYxaUMCyruziTm3ah1UDg" allowfullscreen
target="eduaction"> 
10. Queue using Linked List
 </a>



 <a href="https://mega.nz/embed/vk802Z6Q#dKyu1hiZv2i5KYe0G9PSGHaJlf4ogTqcdMT1IPlnvfU" allowfullscreen 
target="eduaction"> 
11. Let's Code Queue using Linked List
 </a> 
 
 
  <a href="https://mega.nz/embed/ztly2bIA#5uXB1hoNXTnLs6u_m-cQavJCYKbMfQaoC5cmdq0Ij0c" allowfullscreen
target="eduaction"> 
12. Double Ended Queue DEQUEUE
 </a>

 


 <a href="https://mega.nz/embed/2lkgWDaD#8G1sUJf24-zSTAty0NFZ0mAy5LD9RC2s5ENAYFDZphA" allowfullscreen 
target="eduaction"> 
13. Priority Queues
 </a>



 <a href="https://mega.nz/embed/GpsWzB6S#H5bApHUxlaITTVatdfyBS6PS43hFoJn4-mW71yXMPAo" allowfullscreen
target="eduaction"> 
14. Queue using 2 Stacks
 </a> 
 
 

   
    
  </div>

<hr/>


<button class="dropdown-btn" onClick={show} >15. Trees
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://mega.nz/embed/ep10wTiQ#Hc5oqH-IhwiwPckTaaZZGhlerR3M7uelQau0lLxH38A" allowfullscree
target="eduaction"> 
1. Terminology
 </a>



 <a href="https://mega.nz/embed/XxtlkSTb#UPV7WrZvimPE9bruvrLANmbAdGYn-JPBwndIbf8iK5c" allowfullscree
target="eduaction"> 
2. Number of Binary Trees using N Nodes
 </a>
 
 
 
  <a href="https://mega.nz/embed/7s9BDSQB#BsjP3GQ0b7czKzkfWgAXfbGMpzA15ezlmZD_bDJ_uZM" allowfullscree
target="eduaction"> 
3. Height vs Nodes in Binary Tree
 </a>

 


 <a href="https://mega.nz/embed/Pp0jRSLS#J1vK9Hyui4HolLgILaHctfJy_0NcjWN5vvpvw5RDLmc" allowfullscreen
target="eduaction"> 
4. Internal Nodes vs External Nodes in Binary Tree
 </a>



 <a href="https://mega.nz/embed/jptxRYKL#JMxaGeUeOQ1h83BKP8RcgJhLEncRlj3oxU0mwC-uxcc" allowfullscre
target="eduaction"> 
5. Strict Binary Tree
 </a> 
 
 
  <a href="https://mega.nz/embed/r5kjgYIB#grHQ7mPX2qT3UEwi8ihn9ZteDALAzmpBdfbbyMl7KQI" allowfullscreen 
target="eduaction"> 
6. Height vs Node of String Binary Tree
 </a>

 

 
 <a href="https://mega.nz/embed/Hw93jYKL#z0S9_6wgJYHwcKr7HlqKzClMPhDhGcC2ya8K4V_n1Ok" allowfullscree
target="eduaction"> 
7. Internal vs External Nodes of Strict Binary Trees
 </a>



 <a href="https://mega.nz/embed/q50EmJBA#dFZDG13HqTzXD3wn_tuXJfkSLlAi17aVxlv727xpXoU" allowfullscreen
target="eduaction"> 
8. n-ary Trees
 </a>
 
 
 
  <a href="https://mega.nz/embed/jglRgIiA#DgsK1VIzzppc0-9lSEeIwEqAqJkzroHu9jRmp0L36V8" allowfullscreen
target="eduaction"> 
9. Analysis of n-Ary Trees
 </a>

 


 <a href="https://mega.nz/embed/Gp1HyaIC#gmttBSfrf7HEIg5ipNx5yEsUEBt4Hno2QNmuArwMBxg" allowfullscree
target="eduaction"> 
10. Representation of Binary Tree
 </a>



 <a href="https://mega.nz/embed/rtl1mYDJ#o2WA5oQny8hVlKGVbNNWY5PZICoxycYsgdbEx5XRjaw" allowfullscree
target="eduaction"> 
11. Linked Representation of Binary Tree
 </a> 
 
 
  <a href="https://mega.nz/embed/jstDlA4I#YQMWd6ua_-MrDVuUpgVJLv5AKXdmBGDZhp74y8Lk6Rg" allowfullscree
target="eduaction"> 
12. Full vs Complete Binary Tree
 </a>

 

 
 <a href="https://mega.nz/embed/Tp0D1YYJ#2AWjdvAWoIiiP8kzTdpIlyrpLvzqs5Qu_bcZLrn4ZvY" allowfullscreen 
target="eduaction"> 
13. Strict vs Complete Binary Tree
 </a>



 <a href="https://mega.nz/embed/bssyWbxQ#gZxZwFu2ewk58XeGhLlUPtWw2GBj-ZY3UDy4EfQhi5Y" allowfullscre
target="eduaction"> 
14. Binary Tree Traversals
 </a>
 
 
 
  <a href="https://mega.nz/embed/v8k1TKDb#wzHid72sARvOty_4oPh4IzzncLg0lpp0Tfyp7yNvYBo" allowfullscreen
target="eduaction"> 
15. Binary Tree Traversal Easy Method 1
 </a>

 


 <a href="https://mega.nz/embed/PwsyEZgR#S11fKdx5FJSn_gbIAp_K2al9L_1Vnf-80-4IQmFUW6I" allowfullscreen
target="eduaction"> 
16. Binary Tree Traversal Easy Method 2
 </a>



 <a href="https://mega.nz/embed/zl8AWBJC#9Nb-ZpDQlKaXVNTqeUYPTb734f9voIzOpm6Iu3ZgSbc" allowfullscree
target="eduaction"> 
17. Binary Tree Traversal Easy Method 3
 </a> 
 
 
  <a href="https://mega.nz/embed/Xx8HBIhQ#LA5U66dHft9_QCNh8qclsCyufXd7H7eObsXrDeCTBUE" allowfullscree
target="eduaction"> 
18. Creating Binary Tree
 </a>

 <a href="https://mega.nz/embed/qo9VACxT#aCDJ9AZBRDmHey76CC17r6TOoE0Lg-B-cHlQoxGTd_c" allowfullscreen
target="eduaction"> 
19. Program to Create Binary Tree
 </a>



 <a href="https://mega.nz/embed/Tp1zTQyb#KBHnfk5qnIsGzJ5CRU8iHlQ1YjkbX_BZvnfxhcxGUuQ" allowfullscreen
target="eduaction"> 
20. Let's Code Creating Binary Tree
 </a>
 
 
 
  <a href="https://mega.nz/embed/Dg0WDLhB#DUbUoHF-d_zjplCEFHME2RRn-V1BRmVcQC2_IxnR23A" allowfullscreen
target="eduaction"> 
21. Let's Code Creating Binary Tree in C++
 </a>

 


 <a href="https://mega.nz/embed/OwlC2ZiS#4G9HkUX0HKaVP7dskPT4Apbk3JUvFyYggdFrMqitMz4" allowfullscreen
target="eduaction"> 
22. Preorder Tree Traversal
 </a>



 <a href="https://mega.nz/embed/388EFTzK#8cmsl6chyhpL1PvBOoihgrkYWAgHbDMaFhiA35BZvP8" allowfullscree
target="eduaction"> 
23. Inorder Tree Traversals Functions
 </a> 
 
 
  <a href="https://mega.nz/embed/31k0yRYT#5fgHECLXLf1KpT5cQq5Gsl6ZoOfINlLpxuzKPpTXySU" allowfullscreen
target="eduaction"> 
24. Iterative Preorder
 </a>

 

 
 <a href="https://mega.nz/embed/Wg0y3LgD#MpY8KU5Y2z4zjoXD75FcA0DN1fJcaQSAW5h3A8fxUWg" allowfullscreen
target="eduaction"> 
25. Iterative Inorder
 </a>



 <a href="https://mega.nz/embed/790kVZLB#Ec-tG9qycAWPikKDTHP6C5Qq00Cw-jGIuLKk6v-HgBo" allowfullscree
target="eduaction"> 
26. Let's Code Iterative Traversals
 </a>
 
 
 
  <a href="https://mega.nz/embed/n48iDDAL#7_S860P9lqHSguQHRAMJZTDrpJoCiyU9COHCHQwCiwM" allowfullscreen
target="eduaction"> 
27. Level Order Traversal
 </a>

 


 <a href="https://mega.nz/embed/q91jUQAZ#mgPX8237Jxq2FKL2dQ_LQCpYjtjcl9IC8EJwU84qMa4" allowfullscreen 
target="eduaction"> 
28. Let's Code Level Order Traversal
 </a>



 <a href="https://mega.nz/embed/a8llVASS#tnX0LDnHzsJZxhHd3wso0k34P3-68HQ6mVW2PLkINWo" allowfullscreen
target="eduaction"> 
29. Can we Generate Tree from Traversals
 </a> 
 
 
  <a href="https://mega.nz/embed/399TwYIC#b2NnJvbTIdtZK4viAVrnLy9yyBuTscNQzEvSTxp3-jc" allowfullscreen 
target="eduaction"> 
30. Generating Tree from Traversals
 </a>

 


 <a href="https://mega.nz/embed/2tkVhYrI#f7FT1swogPoVL2krqMnB2vT4E6mk37h6WFMJIx6B4Wk" allowfullscreen
target="eduaction"> 
31. Height and Count of Binary Tree
 </a>
 
 
 
  <a href="https://mega.nz/embed/ngkAHB7D#7-Z4XI4OtHY0zSUivNleIsjovitjfr70Y2IMqXryiUM" allowfullscree
target="eduaction"> 
32. Let's Code Height and Count
 </a>

 


 <a href="https://mega.nz/embed/Tk0UXZAY#jHO6MXjObBSxwURqBPhlUcFZf6ZKYpjmeWLOYu_di5w" allowfullscree
target="eduaction"> 
33. Student Challenge  Count Leaf Nodes of a Binary Tree
 </a>





 
 


 

   
    
  </div>

<hr/>


<button class="dropdown-btn" onClick={show} >16. Binary Search Trees
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://mega.nz/embed/S00z0ITD#dv7AlSlQLbweYAo1_Yd8Q4_Y1ViACyR70Dg4IrHkK-c" allowfullscreen
target="eduaction"> 
1. BST intro
 </a>



 <a href="https://mega.nz/embed/us0HCAIJ#N68FCIDBFUsemM9UIYmc9MXslEINrVUtIFnJZ5dLJLk" allowfullscreen
target="eduaction"> 
2. Searching in a Binary Search Tree
 </a>
 
 
  <a href="https://mega.nz/embed/75kwFTBA#m1DiqVMfj8r8ii_h_FFljFR4HHFDnqopHD4PIlykJPQ" allowfullscreen
target="eduaction"> 
3. Inserting in a Binary Search Tree
 </a> 
 
 
  <a href="https://mega.nz/embed/DxthUI6S#c_Sacg_vbfUHz7ufj3zYzAjtupcC7QHGdqjU0cM2_20" allowfullscreen
target="eduaction"> 
4. Recursive Insert in Binary Search Tree
 </a>

 
 <a href="https://mega.nz/embed/fl9hkQYK#tGxP0DOQNgO0k0CvXMt9mecKAJBx0--Bnu0_OJjyF_Q" allowfullscreen
target="eduaction"> 
5. Creating a Binary Search Tree
 </a>



 <a href="https://mega.nz/embed/bltlDQQC#oIE4ko-iThGCk7wxZtFmWYm9n3Hi29_Gh0tkiFI4zdc" allowfullscree
target="eduaction"> 
6. Let's code Binary Search Tree
 </a>
 
 
  <a href="https://mega.nz/embed/3kk11STJ#w9NLEKxIUVaAEOwNMLkEFG5Ibk0NJXnIQC74wveyW7g" allowfullscreen 
target="eduaction"> 
7. Deleting from Binary Search Tree
 </a> 
 
 
  <a href="https://mega.nz/embed/GxkjTSRB#HL51CY1nTQllTU29lMv1Xm5LwQHg5OKhlVwZpRIdjVs" allowfullscreen
target="eduaction"> 
8. Let's Code Recursive Insert and Delete on BST
 </a>

 
 <a href="https://mega.nz/embed/zg8H3C5b#XQ1HUsmWdqaRsR-0GltygpecyoykM0eDm905xMOSG6A" allowfullscren
target="eduaction"> 
9. Generating BST from Preorder
 </a>



 <a href="https://mega.nz/embed/SslllSII#92jCBly0cZtOFG2g6tG7Xsc8lV2FdK3CCOgCR0r9KB0" allowfullscreen
target="eduaction"> 
10. Program for Generating BST from Preorder
 </a>
 
 
  <a href="https://mega.nz/embed/m9tByIrY#CJ5EU0b0oLvQsC5-zNU_YSH9Je7WfJfcg96rmpPg4Eo" allowfullscreen
target="eduaction"> 
11. Drawbacks of Binary Search Tree
 </a> 
 
 
  

 

   
    
  </div>

<hr/>




<button class="dropdown-btn" onClick={show} >17. AVL Trees
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">

  <a 
target="eduaction"> 
Not Here , You can see on Youtube
 </a>


 
   
    
  </div>

<hr/>





<button class="dropdown-btn" onClick={show} >18. Search Trees
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://mega.nz/embed/upsDTAZC#K-cgd3RCeN9phHFDO1-6TIZvOsnflL7fKPOl1OsAJ08" allowfullscreen
target="eduaction"> 
1. 2-3 Trees
 </a>



 <a href="https://mega.nz/embed/W98gULRZ#HarDBXDXj0FAEAbjo3L0KiWgVhfAIqmf_dBI4URN-CI" allowfullscreen
target="eduaction"> 
2. 2-3-4 Trees
 </a>
 
 <a href="https://mega.nz/embed/X99yTDib#xARXRvxUs-5XBmEp7skyUTpTebdhM_1y7cQGDxVFYDw" allowfullscreen
target="eduaction"> 
3. Re-Black Trees Introduction
 </a>


 <a href="https://mega.nz/embed/m5tXTISA#vCBYLdkWjm2tzggnxlyu--PxFjxali5ZvdXcAXHx0GY" allowfullscreen
target="eduaction"> 
4. Red-Black Tree creation
 </a>



 <a href="https://mega.nz/embed/7o9iwZAS#DtsDKi_oms7ZF4aA-I-J1CnxYADl4q7HUAgVN9ppP9E" allowfullscreen
target="eduaction"> 
5. Red-Black Trees vs 2-3-4 Trees
 </a>
 
 <a href="https://mega.nz/embed/6wknVAgZ#VKqx9x__hjfjsqjCRrvbS8Fj6mNESQy1QC9zB4D71zI" allowfullscreen
target="eduaction"> 
6. Creating Red-Black Tree similar to Creating 2-3-4 Tree
 </a>

 <a href="https://mega.nz/embed/mtt1jCCQ#obLNfdBQSnVaWnjjC7UVzuCBrqpsLBXBB9hkn6eQcxM" allowfullscreen
target="eduaction"> 
7. Red-Black Tree Deletion Cases
 </a>


 <a href="https://mega.nz/embed/K8kkgJqY#SRi8uf_f6pOXBMe3uWm6tK2B27JzWKdkN9vLG9fI3dQ" allowfullscreen 
target="eduaction"> 
8. Red-Black Tree Deletion Examples
 </a>
 
 <a href="https://mega.nz/embed/v41HHKZA#XZqw61efbKP-B6-5ZsrBhN_GWmDDIsE86xEugTRCzHw" allowfullscreen 
target="eduaction"> 
9. Red-Black Tree vs 2-3-4 Tree Deletion
 </a>



   
    
  </div>

<hr/>


<button class="dropdown-btn" onClick={show} >19. Heaps
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">


  <a 
target="eduaction"> 
Not Here , As it's available on Youtube
 </a>
    {/* 



 <a href=
target="eduaction"> 

 </a> */}
   
    
  </div>

  <hr/>



<button class="dropdown-btn" onClick={show} >20. Sorting Techniques
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    



 <a href="https://mega.nz/embed/E58HwIIT#GsPQf-YMSbKzQFC1qX6DkNhopQZ9kZ_PXtmMlrcg6AA" allowfullscreen
target="eduaction"> 
1. Criteria used for Analysing Sorts
 </a>
 
 
 <a href="https://mega.nz/embed/Jp1wETCS#jSERXqxds8bmdUYThBLmm_mRLfWqgnV1KsIPYGSdGKQ" allowfullscreen
target="eduaction"> 
2. Bubble Sort
 </a>
 
 <a href="https://mega.nz/embed/M11WVRga#p-N-afHhz1hf6pjAHiiM4K5UZkPUzEWAI7FY8AUBYZM" allowfullscreen
target="eduaction"> 
3. Let's Code Bubble Sort
 </a>
 
 <a href="https://mega.nz/embed/JgkBySIS#13ev_fsdyP-t4Tl_ShCPLHl771vWeeuUIV62QbVocLo" allowfullscreen 
target="eduaction"> 
4. Insertion Sort
 </a>
 
 <a href="https://mega.nz/embed/Fs1zxCRa#toUoRcB2IV1d_tnY9Zk72rnXqH__8dXNjHcFt6-qxrY" allowfullscreen
target="eduaction"> 
5. Insertion Sort  Continued....
 </a>
 
 <a href="https://mega.nz/embed/Nw9zgAYQ#df0W0dHPxyg7lMMBnRoYD7VNTH-hgtTNDDsZknfK7Eo" allowfullscreen
target="eduaction"> 
6. Program for Insertion Sort
 </a>

 <a href="https://mega.nz/embed/RklTgahZ#dzvlXF50Fo_vKQOIjVQzAsXS0-upkUBhbPLGsAvCPdQ" allowfullscreen
target="eduaction"> 
7. Analysis of Insertion Sort
 </a>

 <a href="https://mega.nz/embed/Qk8lyCjQ#UyOZwARq5pVekb6rJXbr6TS7OcZTU8-ONCbFUc89vPY" allowfullscreen
target="eduaction"> 
8. Let's Code Insertion Sort
 </a>

 <a href="https://mega.nz/embed/A1tzlCLI#3EvP8P-5o7_XmcrUbNalacyE2umGF-4CzfUFjGB6Lpo" allowfullscree
target="eduaction"> 
9. Comparing Bubble and Insertion Sort
 </a>

 <a href="https://mega.nz/embed/ts1xya7I#QFcLmFqdTSWXeuV2px6-fuduu00bdnzZGobTkPzZBuY" allowfullscreen 
target="eduaction"> 
10. Selection Sort
 </a>

 <a href="https://mega.nz/embed/V90zAK4K#GpXsYJcWKkcuf9JQaz5Bdtn2gH_Dpx3ImfqghIwn58c" allowfullscreen
target="eduaction"> 
11. Program for Selection Sort
 </a>

 <a href="https://mega.nz/embed/wl9HkCZL#2hG_eUharhrWoAN8EK9w-gOLTdzSaqCa0yUvsbWE9tE" allowfullscreen
target="eduaction"> 
12. Analysis of Selection Sort
 </a>

 <a href="https://mega.nz/embed/sw0XzCSJ#m87giBRBkMwUNZkCT3TjdnfW4XhF0x7TMfQmHQ7RiC8" allowfullscreen 
target="eduaction"> 
13. Let's Code Selection Sort
 </a>

 <a href="https://mega.nz/embed/F11xHCiA#tAYkwmff9OuoG4BVIitUBTQs69Ym2R9gQ3urKCoe8Rw" allowfullscreen
target="eduaction"> 
14. Idea behind Quick Sort
 </a>

 <a href="https://mega.nz/embed/RokxzYSS#ypAB4z64XUCGYA3Y3wPh0y58ROkWcU6QXJMWSSwKUBI" allowfullscreen 
target="eduaction"> 
15. Quick Sort
 </a>

 <a href="https://mega.nz/embed/k08HQCBa#jz7kBttYmqwAb9AwM-AS-uEqNKyDhTc6qqEb88xyk0Q" allowfullscreen 
target="eduaction"> 
16. Analysis of Quick Sort
 </a>

 <a href="https://mega.nz/embed/MotWRJSZ#khQKqdIWK2-wESYowcM3YiJMsYEvrhG_tCcTY2iXmmU" allowfullscreen
target="eduaction"> 
17. Analysis of Quick Sort Continued.....
 </a>

 <a href="https://mega.nz/embed/Eg1yDZTS#S0mIo-YfTSSMBw671hAEHrn2vpKIQ4Ij2DrRyDH_LGc" allowfullscreen 
target="eduaction"> 
18. Let's Code Quick Sort
 </a>

 <a href="https://mega.nz/embed/9slElLzS#cyN_jO6tSiM0Sm9VJJR4v3sJIm5Iorox_NTabajsy_Q" allowfullscreen 
target="eduaction"> 
19. Merging
 </a>

 <a href="https://mega.nz/embed/4k1nhCII#2vKLal-obNyFQuxV8utGCc1mJAs-YGsh1vJo3PVtVao" allowfullscreen
target="eduaction"> 
20. Iterative Merge Sort
 </a>


<a href="https://mega.nz/embed/008lmAyY#8yhbqqZKkuGP09exQMw98oB87R2gJMoLM6Fpq-3pkj8" allowfullscreen
target="eduaction"> 
21. Let's Code Iterative Merge Sort
 </a>

 <a href="https://mega.nz/embed/8o83RYCR#mMqaZoq2UTBNFuYJbw_pT4mJzMqmPql2I9IuxGJvlkY" allowfullscreen
target="eduaction"> 
22. Recursive Merge Sort
 </a>

 <a href="https://mega.nz/embed/c41lCSbS#lbI4LK0bP9nZncJJSBjMUl-Pc4rB9ab7TqCFRtqaPwY" allowfullscreen
target="eduaction"> 
23. Let's Code Recursive Merge Sort
 </a>

 <a href="https://mega.nz/embed/089xxIZB#4L1oDAACKHrkoeT5ap74WEGSJOPEGQMG6k5gjmDKrg8" allowfullscreen
target="eduaction"> 
24. Count Sort
 </a>

 <a href="https://mega.nz/embed/9skRSSoA#rrLnTTceKiUabYXB6HCX6TtcBk9evMwguJDdcxz9R2I" allowfullscreen 
target="eduaction"> 
25. Let's Code Count Sort
 </a>

 <a href="https://mega.nz/embed/o5kjAIrS#i3mdkNJ_TBC2eBNu2tf3BMO0Fy1mbdoo2ao8MQmomdk" allowfullscreen
target="eduaction"> 
26. Bin  Bucket Sort
 </a>

 <a href="https://mega.nz/embed/BhsVQQDY#zQ9_5VE39r0ZCiVeI13pAJ0FFnOy-BRrcDS2ejJVRYA" allowfullscreen
target="eduaction"> 
27. Radix Sort
 </a>

 <a href="https://mega.nz/embed/Z0kRnIwb#J04J6hC0aA7bUBipcQSpPfXbesUHEQgurzT22_USkLY" allowfullscreen 
target="eduaction"> 
28. Shell Sort
 </a>

 <a href="https://mega.nz/embed/9lkxyaYA#ldcFho-j0LN7RympsnVpKok_7r1EO9chovBafi1AjaA" allowfullscreen 
target="eduaction"> 
29. Let's Code Shell Sort
 </a>





   
    
  </div>

<hr/>


<button class="dropdown-btn" onClick={show} >21. Hashing Techniques
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">


  <a 
target="eduaction"> 
Not Here , As it's available on Youtube
 </a>
    {/* 



 <a href=
target="eduaction"> 

 </a> */}
   
    
  </div>

  <hr/>





<button class="dropdown-btn" onClick={show} >22. Graphs
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://mega.nz/embed/8tsXHSpJ#fulDT9V6zVfu_taTcH7QHUkiNpzB3F1JrkLvK-TIxRA" allowfullscreen 
target="eduaction"> 
1. Introduction to Graphs
 </a>



 <a href="https://mega.nz/embed/Zk8TCSSB#ht1xXHl5o6pBYmL95wq05_a-KEMvk1sGCuE1K6zXBBY" allowfullscreen
target="eduaction"> 
2. Representation of Undirected Graph
 </a>
 
 
  <a href="https://mega.nz/embed/pxtFmAAZ#wL72pB2MPFT8qJFGf91arzq2uWFP29YcR0WilvVV6tQ" allowfullscreen 
target="eduaction"> 
3. Representation of Directed Graphs
 </a>


 <a href="https://mega.nz/embed/g0sHmK5Q#ILTacW6KAyM-5RxB2t9-akjBfKvf9T0vXEGZyBHIR_I" allowfullscreen 
target="eduaction"> 
4. Breadth First Search
 </a>



 <a href="https://mega.nz/embed/1ls1CQTQ#Yzp2oyNbEs1dWTaLWi2zvqv0XbxVLOAp-g-y3pZmBp8" allowfullscreen 
target="eduaction"> 
5. Program for BFS
 </a>
 
 
  <a href="https://mega.nz/embed/I1tnGKzD#U4Xfogxaus7n52Qs-KUmhKcWayqZr88BuZQSfrEdyIU" allowfullscreen 
target="eduaction"> 
6. Depth First Search
 </a>

 
 


 <a href="https://mega.nz/embed/Is8mgRYD#njq_pAQcqMkwkUduDVAOVgLT7G8azW8MF-bwBh5ERhA" allowfullscreen
target="eduaction"> 
7. Program for DFS
 </a>



 <a href="https://mega.nz/embed/slk0XZDZ#PHkq_MVU1izBWxK06opt7nT6sMp2vunuHHYd7XM9JF4" allowfullscreen
target="eduaction"> 
8. Let's Code BFS & DFS
 </a>
 
 
  <a href="https://mega.nz/embed/1o9QhRrB#Ni36ua7BZas2Oez27IZHaHU5TwiTc5jfO2iRIrkXs4E" allowfullscreen 
target="eduaction"> 
9. Spanning Trees
 </a>

 
 


 <a href="https://mega.nz/embed/po8BWAzY#TCf61oHLLFmNNkyVw-WaVkFnlsvHfYmeA5211f6dguw" allowfullscreen
target="eduaction"> 
10. Prim's Minimum Cost Spanning Tree
 </a>



 <a href="https://mega.nz/embed/l802EZBS#WpRgO6yHkibYhHx3E5FyWuGYmNaMTBgFvbgk_Flt-cs" allowfullscreen 
target="eduaction"> 
11. Prim's Program
 </a>
 
 
  <a href="https://mega.nz/embed/1x9QVbAB#CBsK5LUgK6oIOAUltiBd9iQIpZbjaoIR0euzhdhQA18" allowfullscreen
target="eduaction"> 
12. Let's Code Prim's using
 </a>

 
 <a href="https://mega.nz/embed/h5k3XC7K#LJqqc0o7WT4r5_COwP-lwj3r5hYs853AANuhnLQeG_Y" allowfullscreen
target="eduaction"> 
13. Kruskal's Minimum Cost Spanning Tree
 </a>



 <a href="https://mega.nz/embed/wwkliQDC#neHfkdHpb7Rz6laVoDso7jGtIRGOwFiJUmfY38_QbT8" allowfullscreen
target="eduaction"> 
14. Disjoint Subsets
 </a>  
 
 <a href="https://mega.nz/embed/40lnCIgI#em8aHc80wRtRB9v0S7gQGPWhSyK2_vfZbmJg6_0F--E" allowfullscree
target="eduaction"> 
15. Kruskal's Program
 </a>



 <a href="https://mega.nz/embed/YstxRC5Y#KYCUF6kka77TtRW2o_XD7gv0iwGZd7HA_WmIiRYuvxI" allowfullscreen 
target="eduaction"> 
16. Let's Code Kruskla's Program
 </a>  
 

 

   
    
  </div>

<hr/>




<button class="dropdown-btn" onClick={show} >23. Asymptotic Notations
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">



    <a href="https://mega.nz/embed/0tlnFKzb#URMO61eCYUiqYSSZdCp87YafFDPFbQtZG_BbBArz9V8" allowfullscreen 
target="eduaction"> 
1. Asymptotic Notations Big Oh , Omega , Theta
 </a>




   
    
  </div>

<hr/>







<button class="dropdown-btn" onClick={show} >
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






</div>
</div>
    )
}

export default AbdulBari;
