import { wind } from 'fontawesome';
import React , {useState , useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux'
import { LoginAction } from '../Action/useraction';
import { LoginReducer } from '../Reducer/userreducer';
import './login.css'

const LoginFreedemy=()=>{

    const logreducer = useSelector( state=>state.LoginReducer )

    const {loading , success , error } = logreducer

    const [name,setname]=useState('')
    const [password,setpassword] = useState('')
    const [email,setemail] = useState('')
    const dispatch = useDispatch()

const login=(e)=>{

    e.preventDefault()

    const user = {
       name : name ,
        email:email ,
        password : password
    }

    
dispatch(LoginAction(user))



   
}

useEffect( ()=>{
if(localStorage.getItem('currentuser'))
{
    window.href='/homepage'
}
} , [] )



    return(<div>


<div className="grid" >

    <p>
        <img src='https://media.istockphoto.com/vectors/password-login-verification-code-push-message-or-sms-for-2fa-notice-vector-id1226932404?k=20&m=1226932404&s=170667a&w=0&h=n1kB5ALJOqPJIdKWxscESOLysLaa6WglauzaZSsS3_E='  id="imageleft"  />
</p>



    <p id="rightpart" >

        <h1 id="h1" > Welcome Back !</h1>
        <p id="subtext" > Login to continue  </p>

<br/> <br/> 
        <form onSubmit={login}  style={{textAlign:'left'}} >
        

            <input type="text" value={email} required placeholder='Enter Email'
            
            onChange={ (e)=>{setemail(e.target.value)} }
            
           
            ></input>
            <br/><br/> <br/>
            <input type="password" value={password} required placeholder='Enter Password' 
              onChange={ (e)=>{setpassword(e.target.value)} } ></input>


<br/><br/> <br/><br/>
<button type='submit' id="btn" style={{backgroundColor:'#8ecae6' , color:'white'  }} >Login</button>
        
        {error && ( <p  style={{color:'#00688B' , fontSize:'20px' }} >Invalid Credentials</p> )  }
        
        
        </form>



    </p>

</div>




    </div>)
}

export default LoginFreedemy;