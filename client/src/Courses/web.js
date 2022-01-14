




import React from 'react'
import './template.css'

const DSA = () => {


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
        <div  >

<iframe id="mainscreen" frameborder="0" 

src="https://drive.google.com/file/d/1tsv-QRnayMyxOnIFOmBnGggFqNjlfeK6/preview"

name="eduaction"
allowfullscreen />
            
            <div class="sidenav">
            <br></br>




  <button class="dropdown-btn" onClick={show} >Welcome to Course
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">
  <a href="https://drive.google.com/file/d/1tsv-QRnayMyxOnIFOmBnGggFqNjlfeK6/preview" target="eduaction">Course Orientation</a>
    <a href="https://drive.google.com/file/d/17RBOFqCe3Y47rjbhr_3VzsRQLtjSkZ2Z/preview" target="eduaction" >How to do this course</a>
    
  </div>

<hr/>


  <button class="dropdown-btn" onClick={show} >Arrays and Vectors
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">
  <a href="https://drive.google.com/file/d/1qtrhMGQU4UaikLWJ7fRmMKEGzc7GiR1E/preview" target="eduaction">
    Introduction </a>
    <a href="https://drive.google.com/file/d/1d73FFsFOh5EwunVDBkONYWeoBYSI5swV/preview"  target="eduaction" >
    Vector STL</a>

    <a href="https://drive.google.com/file/d/1XCO3Nuu83zebZHrZ70fx_gWPvbQhzqyx/preview"  target="eduaction" >
    Vector of Vector</a>


      <a href="https://drive.google.com/file/d/1ovImttRcWBxgZ3qaEeUsnd6ChS7iteRF/preview"  target="eduaction" >
    How to submit Coding Exercise</a>


      <a href="https://drive.google.com/file/d/1Xh7uDe5yRKmcAPjvGB9ZFGbSG-Tm3rPL/preview"  target="eduaction" >
    Pairs</a>


      <a href="https://drive.google.com/file/d/11veoOClRVBGsl0OEYUNmmGZJPgVXZlV-/preview"  target="eduaction" >
    Pairs Code</a>   

    <a href=
    "https://drive.google.com/file/d/1FwOIvonmgZ3dvqOc_MnpZhHd2ptlyhSg/preview"
      target="eduaction" >
    Triplets</a>  


    <a href=
    "https://drive.google.com/file/d/1FwOIvonmgZ3dvqOc_MnpZhHd2ptlyhSg/preview"
      target="eduaction" >
    Triplets Code</a>  


    <a href=
    "https://drive.google.com/file/d/1523-qiDeAosNU0Bc57X8ueAyEQsBRv8K/preview"
      target="eduaction" >
    Mountain</a>  


    <a href=
    "https://drive.google.com/file/d/1523-qiDeAosNU0Bc57X8ueAyEQsBRv8K/preview"
      target="eduaction" >
    Mountain</a>  


    <a href=
   "https://drive.google.com/file/d/1RPvYeB_uEGxayzpG6LZnmBMnurkcP_lh/preview"
      target="eduaction" >
    Mountain Code</a>  


    <a href=
    "https://drive.google.com/file/d/10IM8DMzsSgLRwaXO8sT1FztfBGhX8W1Z/preview"
      target="eduaction" >
    Longest Band</a>  


    <a href=
    "https://drive.google.com/file/d/102FpNAno1quhKU57zVx3nbEsO2y4tG1L/preview"
      target="eduaction" >
    Longest Band Code</a>  


    <a href=
    "https://drive.google.com/file/d/1lM6ZjvVjO6TvE0weINnLFQXm5XlwfBLb/preview"
      target="eduaction" >
    Rains</a>  



    <a href=
   "https://drive.google.com/file/d/1A4ASW3Y2bifrFoZNoegkxFa_2a-TXct2/preview"
      target="eduaction" >
    Rains Code</a>  



    <a href=
   "https://drive.google.com/file/d/14RUIxhnM7SJYUGnJu6_3l38KrAM-EsbU/preview"
      target="eduaction" >
    Sub Array Sort</a>  


    <a href=
    "https://drive.google.com/file/d/1wqXHLNcLjudQilLh2XJRURcdeLlxEDYm/preview"
      target="eduaction" >
   Sub Array Sort Code</a>  


    <a href=
    "https://drive.google.com/file/d/1ruOo9ymyaOJVLtirelZwGCO_K19G6yGb/preview"
      target="eduaction" >
    Minimum Swaps</a>  

    <a href=
    "https://drive.google.com/file/d/1wVmPYtQ_Ko4F_zaf66An2nWjw62M1SuS/preview"
      target="eduaction" >
    Minimum Swaps Code</a>  


 
    
  </div>


  <hr/>


  <button class="dropdown-btn" onClick={show} >String Problems
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">


  <a href=
    "https://drive.google.com/file/d/1dwVdctTO_b2bqncrEYxS6pIoGJ5WQ3NJ/preview"
      target="eduaction" >
    Strings Introduction</a> 

    <a href=
    //"https://drive.google.com/file/d/1523-qiDeAosNU0Bc57X8ueAyEQsBRv8K/preview"
    "https://drive.google.com/file/d/19MiLsJsiD5VKe7x2lZJ4WVKfQkyhNhsZ/preview"
      target="eduaction" >
   Searching Strings </a> 


   <a href="https://drive.google.com/file/d/1D7qm2UdkPbeBQkqmLDwCcCqnwTbrkAtr/preview"
   // "https://drive.google.com/file/d/1523-qiDeAosNU0Bc57X8ueAyEQsBRv8K/preview"
      target="eduaction" >
   Space 20 </a> 

   <a href="https://drive.google.com/file/d/1gQDsdtjZ_9iCbqKlAOFJKY1ukB3uq2Jw/preview"
    //"https://drive.google.com/file/d/1523-qiDeAosNU0Bc57X8ueAyEQsBRv8K/preview"
      target="eduaction" >
   Space 20 Implentation </a> 

   <a href="https://drive.google.com/file/d/1Hl-rncR35_IWFhCRczy-zxnh4llB-u8c/preview"
    
      target="eduaction" >
  Tokenisation (using sstream) </a>


  <a href="https://drive.google.com/file/d/1tN4SA8maLr7Ma84yJVFUZuqFsMgHLxxn/preview"
    
    target="eduaction" >
Tokenisation (using strtok) </a>

<a href="https://drive.google.com/file/d/1nrhqdQ1pTiVxGLOwXQy0nyreerR_chvY/preview" 
    
    target="eduaction" >
Designing our own String Tokeniser! </a>


<a href="https://drive.google.com/file/d/1uZ-JTfvp34IV6Umn4bSxm53U-oFUDJG8/preview"
    
    target="eduaction" >

 String Key Sort
</a>



<a href="https://drive.google.com/file/d/1CLfwhGu_KeKe3zIVBzjAwtt1ctOqJIHE/preview"
    
    target="eduaction" >

 String Key Sort Implementation
</a>



<a href="https://drive.google.com/file/d/136cyG49p7dr_C6IIbSzpR4THtZgtDU1w/preview"
    
    target="eduaction" >

 Check Subsets
</a>



<a href="https://drive.google.com/file/d/1n1lKlIR1pO7GDj5KPE_jfjG-fJ80yFsd/preview"
    
    target="eduaction" >
Check Subsets Implementation

</a>



<a href="https://drive.google.com/file/d/1WELGh_ZWf7hnId0Vln3IRurfC-MkBqqw/preview"
    
    target="eduaction" >

Sort Subsequences
</a>

<a href="https://drive.google.com/file/d/1lIiUSIUKOs8GMaAzEN8edxZNqUI6-uWT/preview"
    
    target="eduaction" >
Sort Subsequences
Code
</a>


{/* <a href=
    
    target="eduaction" >


</a> */}





  </div>

  <hr/>

  <button class="dropdown-btn" onClick={show} >Sliding Window Problems
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">
  
  <a href=
    "https://drive.google.com/file/d/1523-qiDeAosNU0Bc57X8ueAyEQsBRv8K/preview"
      target="eduaction" >
   001 Sliding Window Introduction</a> 

   <a href="https://drive.google.com/file/d/1l4WnRiwRl5RJWHprQcXqRq40vJdMSJc_/preview"
    
      target="eduaction" >
   002 Housing (Two Pointer)   </a> 

  <a href="https://drive.google.com/file/d/1Puw5BL0EWnJaUjB0AT05OIo8-91DMDpe/preview"
    
    target="eduaction" >
  003 Housing Implementation  </a> 



<a href="https://drive.google.com/file/d/137jntmv-lp_jGIr_ljYKVaccqChTWHWE/preview"
    
    target="eduaction" >
  004 Unique Substring (Hashing)  </a> 


  <a href="https://drive.google.com/file/d/1KYObUhIQCDsgE109pu0y70GYjGCk4_pi/preview"
    
    target="eduaction" >
   005 Unique Substring Implementation </a> 


    <a href="https://drive.google.com/file/d/1oNOmv4K3RQ4vLIq7Mp8jfF1urjMLkdZ4/preview"
    
    target="eduaction" >
   006 String Window </a> 


    <a href="https://drive.google.com/file/d/1dyb9O3nKc3MSxFmiOPLnRf9VJdt1SJJS/preview" 
    
    target="eduaction" >
   007 String Window Implementation </a> 




   


  </div>
  <hr/>


  <button class="dropdown-btn" onClick={show} >Sorting and Searchin
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">
  <a href="https://drive.google.com/file/d/16i8MT3VRUgAl9c_gB3tQD3fJ3cyLVKpy/preview"

  target="eduaction"> 
   001 Merge Sort </a>


   <a href="https://drive.google.com/file/d/1Ix5tTePOAmRWVMj-3vOyQSdg_AJg5XOU/preview"

target="eduaction"> 
     002 Merge Sort Code
     </a>

 <a href="https://drive.google.com/file/d/1cEPWhlqzMVcms7w3KO_BiALrXtbHyB69/preview"

target="eduaction"> 
003 Inversion Count </a>

 <a href="https://drive.google.com/file/d/1RAhMBIdxCYZ1HLrPTvCFYe08xU9PslWs/preview"

target="eduaction"> 
004 Inversion Count Code </a>

 <a href="https://drive.google.com/file/d/1Axz_bY0K4Vfl7toqRG7o4NR01q_yY0W-/preview"

target="eduaction"> 
005 Quick Sort </a>


 <a href="https://drive.google.com/file/d/1x17e4S5mbMoxeb_bXjekxTHTUHv_y4jp/preview" 

target="eduaction"> 
006 Quick Sort Code </a>

 <a href="https://drive.google.com/file/d/1zhN3ZOPEFj8f7Qftm-DD9D9isjPKFsW_/preview"

target="eduaction"> 
 007 Quick Select</a>

 <a href="https://drive.google.com/file/d/1VarGVSQkKCH89qOFGgVU8rkU2Y8pTXPj/preview"

target="eduaction"> 
 008 Quick Select Code</a>

 <a href="https://drive.google.com/file/d/1-yU_CX_cUpwG60DLvRHZiJ5puOly9loG/preview"

target="eduaction"> 
 009 Smallest String
 </a>

 <a href="https://drive.google.com/file/d/1Vmja-i0s-fwPGl4cjz2lRtlq3MWCvEyw/preview"

target="eduaction"> 
 010 Smallest String Code
 </a>



 <a href="https://drive.google.com/file/d/1ReqzdAxFYU_GcaeQxt3TNX5DHNGkt4ob/preview"

target="eduaction"> 
 011 Sparse Search
 </a>



 <a href="https://drive.google.com/file/d/1wAjFv5_OFL4yfzJJGVtLNcwYf862cUb6/preview"

target="eduaction"> 
 012 Sparse Search Code
 </a>




   
    
  </div>




  <hr/>



  <button class="dropdown-btn" onClick={show} >Binary Search
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">

  <a href="https://drive.google.com/file/d/12lmJRL4pDVzvJG7TbwkqH13XvHog_HqY/preview"

target="eduaction"> 
 001 Binary Search - Recap!
 </a>


 <a href="https://drive.google.com/file/d/1OCPn1TDAc-Mzh_uDr_0Lne4f4cmol_37/preview"

target="eduaction"> 
 002 Frequency Count
 </a>



 <a href="https://drive.google.com/file/d/1K1TVqo7OGhqLAYRyEafSPiGEBUv-1oiN/preview"

target="eduaction"> 
 003 Frequency Count Code-I
 </a>



 <a href="https://drive.google.com/file/d/1Z9Q_Jo34pG-XRdmrKgm9Iv5k0JXZ3E6f/preview"

target="eduaction"> 
 004 Frequency Count Code-II
 </a>


 <a href="https://drive.google.com/file/d/1ZgRi3EeaoyqNasgbxpMe41adGMaeywAq/preview"

target="eduaction"> 
 005 Rotated Search
 </a>


 <a href="https://drive.google.com/file/d/1-OXYlJJ7SxivNV-KG4wuuSaeRya_1Mll/preview"

target="eduaction"> 
 006 Rotated Search Code
 </a>


 <a href="https://drive.google.com/file/d/1HrT-nnNGhF5_-s55Tlzz6pjEqQ-4lkaq/preview"

target="eduaction"> 
 007 Finding Roots
 </a>


 <a href="https://drive.google.com/file/d/18mCt_--Dj6Qeih_4TZiMLnOJvu47qQtP/preview"

target="eduaction"> 
 008 Square Roots Code
 </a>


 <a href="https://drive.google.com/file/d/1lc_4UVOjjiRlDPRCKrkM4QilWBzAPMky/preview"

target="eduaction"> 
 009 Angry Birds
 </a>


 <a href="https://drive.google.com/file/d/15Q6RiXgkv0l2tc91DitrOuiV1g8SGoG2/preview"

target="eduaction"> 
 010 Angry Birds Code
 </a>


 <a href="https://drive.google.com/file/d/1n-0HEKuwB6rYxh4VYGo3mrxTPa9Jdqqd/preview"

target="eduaction"> 
 011 Min Pairs
 </a>


 <a href="https://drive.google.com/file/d/1mypwT81XpTU968Z7QzKxguIVxoMB7LR8/preview"

target="eduaction"> 
 012 Min Pairs Code
 </a>






  </div>

  <hr/>

  <button class="dropdown-btn" onClick={show} > Recursion
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">


  <a href="https://drive.google.com/file/d/1Smvrnqum3J24uZh9RjvRe9_haE0nHWph/preview"

target="eduaction"> 
 001 Recursion Recap
 </a>


 <a href="https://drive.google.com/file/d/17GhJhVb0AAqTX5ud3Wzo073WasVAdKjf/preview" 

target="eduaction"> 
 002 Ladders Concept
 </a>

   <a href="https://drive.google.com/file/d/1h5Xwwxi08AQg6T03YlxO_lagtTrbF0Tz/preview"

target="eduaction"> 
 003 Ladders Code
 </a>



 <a href="https://drive.google.com/file/d/1X8IYbT-mYQuOg4e5CQofp6K5hBj3WSZx/preview"

target="eduaction"> 
 004 Subsequence Based Problems
 </a>



 <a href="https://drive.google.com/file/d/1X1MDmALgbaiIjMzGD0KGPaSf9qUco2ab/preview" 

target="eduaction"> 
 005 Subset Sum to X
 </a>


 <a href="https://drive.google.com/file/d/1mfBKJJ9_vjlQYWzts3C26dsYiN45LhsS/preview" 

target="eduaction"> 
 006 Subset Sum to X Code
 </a>



 <a href="https://drive.google.com/file/d/1YkdecNUKIBYvmg0BJCTnGu5GlHSeGvVq/preview"

target="eduaction"> 
 007 Generate Brackets
 </a>


 <a href="https://drive.google.com/file/d/1q8dO9sVpyZGr40ufjaVVgQuAooZdLgpb/preview"

target="eduaction"> 
 008 Generate Brackets Code
 </a>


 <a href="https://drive.google.com/file/d/1zH1p_-3tPzCmscAvwEvVyGFLDhWk1BNA/preview" 

target="eduaction"> 
 009 Smart Keypad
 </a>


 <a href="https://drive.google.com/file/d/1aWFLFxbV-fzB4BtBaKrzea-itIeuIXtY/preview"

target="eduaction"> 
 010 Smart Keypad Code
 </a>



 <a href="https://drive.google.com/file/d/10DofeaA5npUNzRAbcB17qtulSjz1ACV3/preview"
target="eduaction"> 
011 Permutations
 </a>



 <a href="https://drive.google.com/file/d/1j2BzBd8GMF7JM7TZr1UE9Bpw4k-pZKl0/preview"
target="eduaction"> 
012 Sudoku
 </a>



 <a href="https://drive.google.com/file/d/1NqF_XvbpLEMeVsYPzmLR_V9ecWtzSbC5/preview"
target="eduaction"> 
013 Sudoku Code
 </a>






  </div>

  <hr/>

  <button class="dropdown-btn" onClick={show} >Linked List
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">
  

  <a href="https://drive.google.com/file/d/1T2WqqY4hytPCDSoJMrZfsX6dnUKx-Q3o/preview"
target="eduaction"> 
001 Linked List Section Introduction
 </a>
 <a href="https://drive.google.com/file/d/1bFT5adrTVRxSBihNQd287hu4jbEudL88/preview"
target="eduaction"> 
002 Warm Up - Creating a Linked List
 </a>




 <a href="https://drive.google.com/file/d/1bumMcn-Onbv3QzXa95bk_eFIbO-rP-pf/preview"
target="eduaction"> 
003 Practice  - Insertion in the Middle
 </a>




 <a href="https://drive.google.com/file/d/1Zxbxzu1QOjJE2kbd29Q2nwiGTtukMw7y/preview"
target="eduaction"> 
004 Recursive Reverse a Linked List
 </a>




 <a href="https://drive.google.com/file/d/1A8RFL95YPvk_f2221ZeoFVBqvLUlAMx6/preview"
target="eduaction"> 
005 Recursively Reverse a Linked List Code
 </a>




 <a href="https://drive.google.com/file/d/1Ng8f-9YnClC3q_7H2lR8BlAQJbWQGLwZ/preview"
target="eduaction"> 
006 Iterative Reverse
 </a>



 <a href="https://drive.google.com/file/d/1-vaHfoIme-pwcF9D4GfblR0lyhP_fJCA/preview"
target="eduaction"> 
007 Iteratively Reverse a Linked List Code
 </a>



 <a href="https://drive.google.com/file/d/1SpUCUH8A3Z0XUArT_yryT_OfcKAUb1aA/preview" 
target="eduaction"> 
008 K-Reverse a Linked List
 </a>



 <a href="https://drive.google.com/file/d/1ihans3zJoLiC0xd87G_UfN2v-NtYoyQ5/preview"
target="eduaction"> 
009 K-Reverse Code
 </a>



 <a href="https://drive.google.com/file/d/102mTT0Djk2PM4WWutdxfHRiayrzJtkhB/preview"
target="eduaction"> 
010 Merge Two Sorted Linked Lists
 </a>


 <a href="https://drive.google.com/file/d/1nJ6bfn0BNXh6oeyTIQIST5VKtSL-7UjN/preview"
target="eduaction"> 
011 Merge Two Sorted Linked Lists Code
 </a>


 <a href="https://drive.google.com/file/d/1H1gPTYQrswbaVJ23Lsw2Pt9ZymwgMqj-/preview"
target="eduaction"> 
012 Runner Technique
 </a>



 <a href="https://drive.google.com/file/d/1n7XX3IVQxufS_ZwgCYFR7TukNSYNiogm/preview"
target="eduaction"> 
013 Merge Sort on Linked List
 </a>



 <a href="https://drive.google.com/file/d/1a1zaTikpQHxoi_s7dIDujLj4nM8DuL4I/preview"
target="eduaction"> 
014 Merge Sort Linked List Code
 </a>





  </div>

  <hr/>

  <button class="dropdown-btn" onClick={show} >Stack and Queue
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">
 


  <a href="https://drive.google.com/file/d/1dav2bMCNaiSOPn4jJtowNBD__pWK1U0N/preview"
target="eduaction"> 
001 Stacks, Queue, Deque Recap
 </a>



 <a href="https://drive.google.com/file/d/1V-MzRXCrrCedqiWyuVTRWVdrzyPst-qC/preview"
target="eduaction"> 
002 Balanced Paranthesis.mp4
 </a>



 <a href="https://drive.google.com/file/d/1zvPd_gDOvEk64drCYzJwvLe-LLOouZLk/preview"
target="eduaction"> 
003 Balanced Paranthesis Code
 </a>



 <a href="https://drive.google.com/file/d/1p4_yTovY99e_yJQUhotvLTY7uXS57VFc/preview"
target="eduaction"> 
004 Redundant Paranthesis
 </a>



 <a href="https://drive.google.com/file/d/1wcZd1DasZ3Dd6GOH-o1jYDKtLmEzGR17/preview"
target="eduaction"> 
005 Redundant Paranthesis Code
 </a>





 <a href="https://drive.google.com/file/d/1Lu3MGuIJkam44a_vL6bGRqqqpks_YJa3/preview"
target="eduaction"> 
006 First Non-Repeating Letter
 </a>



 <a href="https://drive.google.com/file/d/1-pG1Az6J20tbMf1jNpAYT_MIuyeo5KK0/preview"
target="eduaction"> 
007 First Non-Repeating Code
 </a>



 <a href="https://drive.google.com/file/d/1Lkufo-LYjgM_18uewSAOhSWUENhvZhhS/preview"
target="eduaction"> 
008 Max Subarray (Sliding Window + Deque)
 </a>



 <a href="https://drive.google.com/file/d/1wSMH0sy-Sxk1Q00ds-dlJW8KbPRRm8PT/preview"
target="eduaction"> 
009 Simplify Path
 </a>



 <a href="https://drive.google.com/file/d/1UzneNmuV8FtYqTPo04gt8thD5fuSU31-/preview"
target="eduaction"> 
010 Simplify Path Code
 </a>








  </div>
  <hr/>


  <button class="dropdown-btn" onClick={show} > Binary Trees
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">
    



  <a href="https://drive.google.com/file/d/1pp_Cr8qv9UwQb3qmd2DozyOHTzj0icQ0/preview"
target="eduaction"> 
001 Binary Trees Recap
 </a>



 <a href="https://drive.google.com/file/d/1dZsQJWOzeRdn-n3tRdDr2YXM3dwzebCW/preview"
target="eduaction"> 
002 Build Tree - Boilerplate Code
 </a>



 <a href="https://drive.google.com/file/d/1Lpbz6-lAJa0ZWrs36iOthPHN28NEg3Z3/preview"
target="eduaction"> 
003 Level Order Print
 </a>



 <a href="https://drive.google.com/file/d/1uSqQfJkvILKtrAeXS0MoTowJIGAaEazl/preview"
target="eduaction"> 
004 Level Order Print Code
 </a>



 <a href="https://drive.google.com/file/d/1BsgLPxU9-CyWg6VWWInmvh6OHwO6uW3n/preview"
target="eduaction"> 
005 Level Order Build
 </a>




 <a href="https://drive.google.com/file/d/1L0mKvct8Mkw3DEW4sJdCQs0NLoxq-zWn/preview"
target="eduaction"> 
006 Level Order Build Code
 </a>



 <a href="https://drive.google.com/file/d/1-JaQzkE6V7n5MFLZ8zS-SOBe9Kx71BBq/preview"
target="eduaction"> 
007 Tree Diameter Concept
 </a>



 <a href="https://drive.google.com/file/d/1Hc9pP28Fwcwiv8yLGyr6_QJPyAFuNCPq/preview"
target="eduaction"> 
008 Tree Diameter Code
 </a>



 <a href="https://drive.google.com/file/d/1NGroKnF4_YpV5a2i2V4CyaCDGdNtShtl/preview"
target="eduaction"> 
009 Tree Diameter Optimised Code
 </a>



 <a href="https://drive.google.com/file/d/1Hlvu0WBk3FisymPYJJj0zdkDvNcU95OT/preview"
target="eduaction"> 
010 Replace with Descendant Sum
 </a>






 <a href="https://drive.google.com/file/d/1k50pB2LqsQpyYceaOTr-l3MBwKkClx_F/preview"
target="eduaction"> 
011 Replace with Descendant Sum Code
 </a>



 <a href="https://drive.google.com/file/d/1atC6AY-xH-BTClMpAWA9rDSPKIbr0czf/preview"
target="eduaction"> 
012 Height Balanced Tree Concept
 </a>



 <a href="https://drive.google.com/file/d/1JKyeQSyHigk8l2cLJ3XvZQdDSJupqbID/preview"
target="eduaction"> 
013 Height Balanced Tree Code
 </a>



 <a href="https://drive.google.com/file/d/1Ehn7lfAwQZrCjvEr3y6G-s1KikslI2U4/preview"
target="eduaction"> 
014 Max Subset Sum Tree
 </a>



 <a href="https://drive.google.com/file/d/1Uw5xIbpsfPlfpGBQ_EBWDcd_cXt0HB71/preview"
target="eduaction"> 
015 Max Subset Sum Tree Code
 </a>




 <a href="https://drive.google.com/file/d/1McUX195w_6oEZ-KfU5lnzhTPELlaiNAG/preview"
target="eduaction"> 
016 Print At LevelK
 </a>



 <a href="https://drive.google.com/file/d/1t0VsZZbeSVzmL5dgt3PssTBS4PZzfhM_/preview"
target="eduaction"> 
017 Nodes at Distance K
 </a>



 <a href="https://drive.google.com/file/d/12XNyIcBmUlHIrs3Oa9A19j5e4_267vP7/preview"
target="eduaction"> 
018 Nodes at Distance K Code
 </a>



 <a href="https://drive.google.com/file/d/1lD1loBpp2Ermd1kGL6QzGSZfS-e03Spn/preview"
target="eduaction"> 
019 Vertical Order Print
 </a>



 <a href="https://drive.google.com/file/d/1Mn5VhCJz7qDX5VAgfgZOGIU2C-iWNYwo/preview"
target="eduaction"> 
020 Vertical Order Print Code
 </a>










  </div>
  <hr/>


  <button class="dropdown-btn" onClick={show} > Binary Search Tree
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">
   



  <a href="https://drive.google.com/file/d/1Z7RfR34BNNjLEhX_64hIPpwSaqlezCi-/preview"
target="eduaction"> 
001 BST Introduction
 </a>



 <a href="https://drive.google.com/file/d/19FmYhxxprFH8Lev00Tsl9DaFGdSN6RC4/preview"
target="eduaction"> 
002 BST Creation Recap
 </a>



 <a href="https://drive.google.com/file/d/1rOT8qLTLIQ2X_AOZOn1gNwNUvYqy4wX9/preview"
target="eduaction"> 
003 Minimum Height BST
 </a>



 <a href="https://drive.google.com/file/d/1hwpUIZsDdSoHKtiRU8qGygFTf1pSkH1q/preview"
target="eduaction"> 
004 Finding Cabs Implementation
 </a>



 <a href="https://drive.google.com/file/d/1C3MCKIKl7fadwAv_0jDFnWdJqRPlzCfL/preview"
target="eduaction"> 
005 Closest in BST
 </a>




 <a href="https://drive.google.com/file/d/1XvmVlwrh60huNqoZDCfNy4SZAHHk10Qj/preview"
target="eduaction"> 
006 Closest in BST Code
 </a>



 <a href="https://drive.google.com/file/d/1Bw9mYBbrDSNWd_qsaq1KK4pgtATXXppN/preview" 
target="eduaction"> 
007 Tree to Linked List
 </a>



 <a href="https://drive.google.com/file/d/1cO-ODJZrHdtSexHifCN3HR78TtZjVBsa/preview"
target="eduaction"> 
008 Tree 2 Linked List Code
 </a>



 <a href="https://drive.google.com/file/d/17UO8N-ShKituVCTXICvOHQO3vRMfTVTL/preview"
target="eduaction"> 
009 Inorder Successor in BST
 </a>



 <a href="https://drive.google.com/file/d/1CCmxVPq4WCzzgIzN92kCUHVf9f4rxHHj/preview"
target="eduaction"> 
010 Inorder Successor in BST Code
 </a>






 


  </div>
  <hr/>

  <button class="dropdown-btn" onClick={show} > Heaps
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">
   
  <a href="https://drive.google.com/file/d/1tZ7e4zpdAevIUAeNemSQeKXKFYRAtlHr/preview"
target="eduaction"> 
001 Heaps - Recap!
 </a>



 <a href="https://drive.google.com/file/d/1GTqQWdXZmKCmJqGqUvT3ebKk6bKe1sXR/preview" 
target="eduaction"> 
002 Sorting using Heap!
 </a>



 <a href="https://drive.google.com/file/d/14-0jUX5xwCqAR_4_NHDj2d85C038Xmlt/preview"
target="eduaction"> 
003 Finding Cabs
 </a>



 <a href="https://drive.google.com/file/d/1hwpUIZsDdSoHKtiRU8qGygFTf1pSkH1q/preview" 
target="eduaction"> 
004 Finding Cabs Implementation
 </a>



 <a href="https://drive.google.com/file/d/1s1C184q1Ww4QE9te7bMlMxG5McapZxwY/preview"
target="eduaction"> 
005 Merging Ropes
 </a>




 <a href="https://drive.google.com/file/d/1ZK2c5CxPkee0t3TMiTbQBbB3MimStQGI/preview"
target="eduaction"> 
006 Merging Ropes Implementation
 </a>



 <a href="https://drive.google.com/file/d/1jeZbWzCDjBhjG7ELXt8H9tBICYa56osN/preview"
target="eduaction"> 
007 Running Median
 </a>



 <a href="https://drive.google.com/file/d/1A5_o157nAQx8TDyabQFj6lo8daOWCDmZ/preview"
target="eduaction"> 
008 Running Median Implementation
 </a>



 <a href="https://drive.google.com/file/d/1PI5FZh4Oee8xxe6E2o5RVDXhEW2goK2d/preview" 
target="eduaction"> 
009 Merging K-Arrays
 </a>



 <a href="https://drive.google.com/file/d/1CzXCxF2BixqwDQinc_5cztAsb9ZGKWRZ/preview"
target="eduaction"> 
010 Merge K-Sorted Arrays Code
 </a>







  </div>

  <hr/>

  <button class="dropdown-btn" onClick={show} > Hashing
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">

    


 <a href="https://drive.google.com/file/d/19wY2BxRKSocBdRDAcXdlxPLPhqXrS1qs/preview"
target="eduaction"> 
001 Triplets in GP _ Hashing with Slider
 </a>



 <a href="https://drive.google.com/file/d/1t3_X__ScLy5I6bv17juQuNBEa_J8wt_5/preview" 
target="eduaction"> 
002 Triplets in GP Implementation
 </a>



 <a href="https://drive.google.com/file/d/1S8uAwl8lNyaCRbhSkB18TaFaHd0awgS5/preview" 
target="eduaction"> 
003 Counting Rectangles _  Sets
 </a>



 <a href="https://drive.google.com/file/d/1UvqKmEw1A8EfeHqZ8KgUdDJgu7gylAHJ/preview" 
target="eduaction"> 
004 Counting Rectangles Implementation
 </a>



 <a href="https://drive.google.com/file/d/15EBhvmmk4UiapTu99jv0oijRtCRwLpnj/preview" 
target="eduaction"> 
005 Counting Triangles _ Unordered Maps
 </a>




 <a href="https://drive.google.com/file/d/1xCZDEX_gp-lgFKhDip3kfc3Qc3CJYsY7/preview"
target="eduaction"> 
006 Counting Triangles Implementation
 </a>



 <a href="https://drive.google.com/file/d/1tNEQJEnI0xIphJ_tTKqw85QrdodGTzK1/preview"
target="eduaction"> 
007 Anagrams in Substrings _ Maps
 </a>



 <a href="https://drive.google.com/file/d/17PTpgr2qPfWU4tGyu60umHH2t8BbHq7y/preview"
target="eduaction"> 
008 Anagrams in Substrings Implementation
 </a>



 <a href="https://drive.google.com/file/d/1um7LgaklR7KTKGQXzWHuyN2mE09Gosrn/preview"
target="eduaction"> 
009 Quick Brown Fox _ Hashing with DP
 </a>



 <a href="https://drive.google.com/file/d/1JOXcM0vCMMNSpC5B7pquoz9LUYIgEeVq/preview"
target="eduaction"> 
010 Quick Brown Fox Implementation
 </a>






   
  </div>
  <hr/>



  <button class="dropdown-btn" onClick={show} > Tries
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">


 
  <a href="https://drive.google.com/file/d/1vhBGcwIwq4FudM0AsR84V3kdGEdJWC5j/preview"
target="eduaction"> 
001 Tries Introduction
 </a>



 <a href="https://drive.google.com/file/d/1QjLIWygBJeycWCzI_eP5mp-b5cXwoC_f/preview"
target="eduaction"> 
002 Prefix Trie Implementation
 </a>



 <a href="https://drive.google.com/file/d/16g5wkCjQ_GgSEk-aGnn69NLSFebqDm2e/preview"
target="eduaction"> 
003 Suffix Trie
 </a>



 <a href="https://drive.google.com/file/d/1NtBbxwIGZMSMkBUxLzoT_VyFsUw3SZqi/preview"
target="eduaction"> 
004 Suffix Trie Implementation
 </a>



 <a href="https://drive.google.com/file/d/1kz6P-ieHNp3QFhPa7HvLT31DEeKStn7G/preview"
target="eduaction"> 
005 Cute Little Cat (Trie + Hashing)
 </a>




 <a href="https://drive.google.com/file/d/1YepXud2GHl6reUg6HlYb8Wp1bb53edqI/preview"
target="eduaction"> 
006 Cute Little Cat Implementation
 </a>



 <a href="https://drive.google.com/file/d/1ij5YpsVYTWs6iodIWjL51H7gjXV_uAkj/preview"
target="eduaction"> 
007 Biggest XOR (Trie + Bitmasks)
 </a>



 <a href="https://drive.google.com/file/d/1U2Ndp8xGRrowHraRQp2CWvGJrKuEPbZU/preview"
target="eduaction"> 
008 Biggest XOR Implementation
 </a>




  </div>

  <hr/>



  <button class="dropdown-btn" onClick={show} > Graphs
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">
 



  <a href="https://drive.google.com/file/d/1OHaMoQXpQVjC0aiwGduR6kazOXMfoooq/preview"
target="eduaction"> 
001 Graphs Section Introduction
 </a>



 <a href="https://drive.google.com/file/d/1LvU3Zz3XCmnc41J9fr1N4B4mMYtX-dIx/preview"
target="eduaction"> 
002 Graphs 10 Cool Applications
 </a>


 <a href="https://drive.google.com/file/d/17ujE6pjFhEH0j3EL1Vlpb3WDJ_7ypm_5/preview"
target="eduaction"> 
003 Graph Key Terms
 </a>



 <a href="https://drive.google.com/file/d/1YAtU8PO7DVl_auR5jSL_7wzhXaMQGW9u/preview"
target="eduaction"> 
004 Adjacency List Representation
 </a>



 <a href="https://drive.google.com/file/d/1MqYD8_LyOr5LeOEn5fla65wYXIV1IFc2/preview"
target="eduaction"> 
005 Adjacency List Representation with Node Class
 </a>



 <a href="https://drive.google.com/file/d/1maA-M8xKD8r5lPAnXVKwkHPvqbvlS7SQ/preview"
target="eduaction"> 
006 Storing Weighted Graphs
 </a>



 <a href="https://drive.google.com/file/d/1iNdJwhX64-56lughMJ5t5aW8PGh55CVx/preview" 
target="eduaction"> 
007 Breadth First Search (BFS)
 </a>




 <a href="https://drive.google.com/file/d/1mVj4G3FMXymPsnvYFkw7QjswZPdDQkJl/preview"
target="eduaction"> 
008 BFS Code
 </a>



 <a href="https://drive.google.com/file/d/1dmC_8X7LT2u_G2a8IU3d_njLbVPavu03/preview"
target="eduaction"> 
009 Shortest Path using BFS
 </a>



 <a href="https://drive.google.com/file/d/1TDvPPITVHlTBrKqwsmy_QPhgeT9ZIZDU/preview"
target="eduaction"> 
010 Shortest Path using BFS Code
 </a>



 <a href="https://drive.google.com/file/d/1HASIOA92x76CfRijUdJjjCUHPqXD1Oqv/preview"
target="eduaction"> 
011 Depth First Search (DFS)
 </a>



 <a href="https://drive.google.com/file/d/1jjv36qWiWAAgq3PisKmD2QFKekFsVF9C/preview"
target="eduaction"> 
012 DFS Code
 </a>






 <a href="https://drive.google.com/file/d/1J2gxi2Fcx4oEMUUqQAuQIqPyWECxlkbb/preview"
target="eduaction"> 
013 Cycle Detection in Undirected Graphs
 </a>



 <a href="https://drive.google.com/file/d/1lj8IhbjaoU8Yw9Pe2sUaozrEgH2H2l_w/preview"
target="eduaction"> 
014 Solution -  Cycle Detection in Undirected Graph
 </a>



 <a href="https://drive.google.com/file/d/1nce8WRmFn-K2DmUCe4uAT52dW9Ge0P2Y/preview"
target="eduaction"> 
015 Backedge Detection
 </a>



 <a href="https://drive.google.com/file/d/10vRcCQscCLamGirz3IUHxUF0yagS6oXW/preview"
target="eduaction"> 
016 Solution - Cycle Detection in Directed Graph
 </a>



 <a href="https://drive.google.com/file/d/1Wc0C0UNiEdWIpBjYRvHh8tXFxRjHX7Yu/preview"
target="eduaction"> 
017 Dijkshtra's Algorithm
 </a>




 <a href="https://drive.google.com/file/d/1A4T5_YL0KKzawP7IuIW2YuHCVMrJYm-D/preview"
target="eduaction"> 
018 Dijkshtra's Algorithm Code
 </a>



 <a href="https://drive.google.com/file/d/1wno9NX4RXtJFgay_3Nxm93On6KlytNaB/preview"
target="eduaction"> 
019 Board Game Implementation
 </a>



 <a href="https://drive.google.com/file/d/1oHU1hzhQXLfi1wXp8P9Iueqo-i0qyOEJ/preview"
target="eduaction"> 
020 Board Game (Trie+Backtracking+Graph)
 </a>





  </div>
  <hr/>

  <button class="dropdown-btn" onClick={show} > Dynamic Programming 
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">
    
    
    
 <a href="https://drive.google.com/file/d/1cGlpkJ2jfsAqG-t3YPggU0P6eDLI_oBq/preview"
target="eduaction"> 
001 Introduction to Dynamic Programming
 </a>



 <a href="https://drive.google.com/file/d/1bonAop87--Jd2xfrPbbYB3tzhn5BPEsq/preview"
target="eduaction"> 
002 A Note about DP
 </a>






 <a href="https://drive.google.com/file/d/1dz2B7V5RyyVN8id_iMOszZFh-3ztNHzb/preview"
target="eduaction"> 
003 N-K Ladders (3 Approaches)
 </a>



 <a href="https://drive.google.com/file/d/12OGKkItxUcTCmbl20cyVPFXpKyIFE5dy/preview"
target="eduaction"> 
004 N-K Ladders Code (Top Down)
 </a>



 <a href="https://drive.google.com/file/d/1KHWE6LohcjCVF9a7-9veywXWNvVYATMW/preview"
target="eduaction"   > 
005 N-K Ladders Code (Bottom Up)
 </a>



 <a href="https://drive.google.com/file/d/1sGV257k-gUvVeH3H1FQb_AM61piD_QzP/preview"
target="eduaction"> 
006 Coin Change
 </a>



 <a href="https://drive.google.com/file/d/1-NcUXalvsdDiyMsKZYaXzh0nPxjVZ-p4/preview"
target="eduaction"> 
007 Coin Change Code
 </a>




 <a href="https://drive.google.com/file/d/1IBFtH90AJl2wfhepR_A4bVDl9pyvH5oR/preview"
target="eduaction"> 
008 Cutting Rods Solved!
 </a>



 <a href="https://drive.google.com/file/d/1nni33BMwqjcczQtswI0lr6Xkn7Nmreqs/preview"
target="eduaction"> 
009 Min Array Jumps
 </a>



 <a href="https://drive.google.com/file/d/1Yoig6KRNWc64niyXUINsS5XoxNQzi2cx/preview"
target="eduaction"> 
010 Min Array Jumps Code
 </a>



 <a href="https://drive.google.com/file/d/1flOZPP70jhOF51U9wcGqvJSnZy-UNzAX/preview"
target="eduaction"> 
011 Frog's Min Cost-I
 </a>



 <a href="https://drive.google.com/file/d/1NmBNVlZxE6rBlR8RScEW5yZ55EhVb2BX/preview"
target="eduaction"> 
012 Frog's Min Cost-I Code
 </a>


 <a href="https://drive.google.com/file/d/1ezTBcbyxwuG3fTAT3qdGWCB9CGD6BO-e/preview"
target="eduaction"> 
013 Maximum Non Adjacent Sum
 </a>



 <a href="https://drive.google.com/file/d/1X_yXdyDdfQVWR1eKnM1IQX5anUI5afEd/preview"
target="eduaction"> 
014 Maximum Non Adjacent Sum Code
 </a>



 <a href="https://drive.google.com/file/d/1qmoM1jk_6Gntn-VzgTkuRUa4ixMqOSyB/preview"
target="eduaction"> 
015 Longest Increasing Sequence
 </a>



 <a href="https://drive.google.com/file/d/1t2MBheGdIFRDjV4YT8ceGQDYHVHt2aK2/preview"
target="eduaction"> 
016 Longest Increasing Subsequence Code
 </a>



 <a href="https://drive.google.com/file/d/1eJwIzgD6NTrm0unX552Gb7lxdU1EkXgd/preview"
target="eduaction"> 
017 Box Stacking Problem
 </a>




 <a href="https://drive.google.com/file/d/1z4RoDrs6MgFoMmRABz0UgmgH2sxcjtWK/preview"
target="eduaction"> 
018 Box Stacking Code
 </a>



 <a href="https://drive.google.com/file/d/1ZSECfNKAax6F7eMKbccygn7cUs_4OsU3/preview"
target="eduaction"> 
019 Counting Trees
 </a>



 <a href="https://drive.google.com/file/d/1n1FDnSFSWX97AmjKn07k3fcN79I0ahkr/preview" 
target="eduaction"> 
020 Counting Trees Code
 </a>



    
  </div>

  <hr/>

  <button class="dropdown-btn" onClick={show} > Dynamic Programming 2D
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container">

    
 <a href="https://drive.google.com/file/d/1jtbQyDspnonuMLzQqXJFCTXYRu_UGo7m/preview"
target="eduaction"> 
001 Longest Common Subsequence
 </a>



 <a href="https://drive.google.com/file/d/1MhvNtWbtrGajoFZR3ouwhXDKMxWNoe_p/preview"
target="eduaction"> 
002 LCS Top Down.mp4
 </a>






 <a href="https://drive.google.com/file/d/1QDo0mxYuQ2t3TcHRLocxSEHNHdTXvWPY/preview"
target="eduaction"> 
003 LCS Bottom Up and Print
 </a>



 <a href="https://drive.google.com/file/d/1mg8-gfV9C0cdVWN8itwe5r2QeVuQZ245/preview"
target="eduaction"> 
004 Selling Wines
 </a>



 <a href="https://drive.google.com/file/d/1BWiSJP1bp8Je-WG5gSr0dNFFR2sGIRM3/preview"
target="eduaction"> 
005 Selling Wines - Top Down DP Code
 </a>



 <a href="https://drive.google.com/file/d/1Egt8SsUDKFBMKQvtnfVWowKiuIaOhWDG/preview"
target="eduaction"> 
006 Note about Selling Wines
 </a>



 <a href="https://drive.google.com/file/d/1tUWxpYGqmzTqF5TujT6yU4CRqfI97zWc/preview"
target="eduaction"> 
007 Selling Wines - Diagonal Table Filling
 </a>




 <a href="https://drive.google.com/file/d/1Cna0EbKve7Z-d8A6ad_BEnA_8e6xZ_mU/preview"
target="eduaction"> 
008 Selling Wines - Bottom Up DP Code
 </a>



 <a href="https://drive.google.com/file/d/1M9QaRaA3Lwv47GsyCeLOB_psNRtuIl-Q/preview"
target="eduaction"> 
009 Counting Subsequences
 </a>



 <a href="https://drive.google.com/file/d/167-Xw72SCLXwpkyQhqfAjmHvNbsaZvUA/preview"
target="eduaction"> 
010 Counting Subsequences Recursive
 </a>



 <a href="https://drive.google.com/file/d/1_64hTKN08XrU_dnZPmHcBmOsjD4ELZyu/preview"
target="eduaction"> 
011 Counting Subsequences - Table Filling
 </a>



 <a href="https://drive.google.com/file/d/1EjFspe8GE9A237aHNOi4Tp-U_YhsC3ff/preview"
target="eduaction"> 
012 Counting Subsequences - Bottom Up
 </a>






 <a href="https://drive.google.com/file/d/1O8CF7kabbFyHitRg8j2gm1Uub9zEjWkD/preview"
target="eduaction"> 
013 Knapsack Problem
 </a>



 <a href="https://drive.google.com/file/d/1nYt6UIlUZZ96da9EkPPxVVLjkvx9Hlpr/preview"
target="eduaction"> 
014 Knapsack Problem Recursive
 </a>



 <a href="https://drive.google.com/file/d/1BSUhFJAtxWv2Fz9CQqMD_lPCZn9TZEsV/preview"
target="eduaction"> 
015 Knapsack Problem Bottom Up
 </a>




    
  
  </div>
  <hr/>

  <button class="dropdown-btn" onClick={show} > 
    <i class="fa fa-caret-down/"></i>
  </button>
  <div class="dropdown-container">
    <br></br>
  </div>


</div>




</div>






    )
}

export default DSA;