
import { wind } from 'fontawesome';
import React , {useState , useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux'
import {RegisterUserReducer} from '../Reducer/userreducer'
import {registeruseraction} from '../Action/useraction'
import './login.css'
const RegisterFreedemy=()=>{

    const registreducer = useSelector(state=>state.RegisterUserReducer)


const {loading , success , error } = registreducer

    const [name , setname ] = useState('')
    const [lname , setlname ] = useState('')
    const [email , setemail ] = useState('')
    const [phone , setphone ] = useState()
    const [password , setpassword ] = useState('')
    const [cpassword , setcpassword ] = useState('')


const dispatch = useDispatch()

const register=(e)=>{
    e.preventDefault()

    const user = {
        name : name ,
        lname : lname ,
        password : password ,
        email : email ,
        phone : phone
    }

    if(password==cpassword)
    {
        dispatch(registeruseraction(user))
    }
    else{
document.getElementById('messagetext').innerHTML=`Passwords Didn't Match`
    }
}



    return(<div>


<div className="grid" >

    <p>
<img src='https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg'  id="imagestyle"   />
    </p>


<p id="rightpart">

<h1 id="h2" > Register </h1>

<form onSubmit={register} >

<div className="grid" >
<input type="text" value={name} required  placeholder="Enter First Name*" id="styleinp"   

onChange={ (e)=>{ setname(e.target.value) } }

/>

<input type="text" value={lname} required  placeholder="Enter Last Name*" id="styleinp"

onChange={ (e)=>{ setlname(e.target.value) } }
/>

    </div>
       
      <br/><br/>

 



   
      



<div className="grid" >
<input type="password" value={password} required  placeholder="Enter Password*" id="styleinp" 

onChange={ (e)=>{ setpassword(e.target.value) } }
/>

<input type="password" value={cpassword} required  placeholder="Confirm Password*" id="styleinp"
onChange={ (e)=>{ setcpassword(e.target.value) } }
 />




    </div>


    <br/><br/>

    <input type="text" value={email} required  placeholder="Enter Email Id* " id="styleinpanother" 

   

onChange={ (e)=>{ setemail(e.target.value) } }
/>
<br/><br/><br/><br/>
<input type="Number" value={phone}   placeholder=" Contact Number " id="styleinpanother"  

onChange={ (e)=>{ setphone(e.target.value) } }
/>
 
<br/><br/><br/><br/>
<button type='submit' id="btn" style={{backgroundColor:'#8ecae6' , color:'white'  }} >Register</button>


<p id="messagetext" style={{color:'#00688B' , fontSize:'20px' }} ></p>


{error && ( <p  style={{color:'#00688B' , fontSize:'20px' }} >Email Already Registered</p> )  }

{success && ( <p  style={{color:'#00688B' , fontSize:'20px' }} > Registered Successfully</p> ) }

</form>

    
</p>



</div>




    </div>)
}

export default RegisterFreedemy;