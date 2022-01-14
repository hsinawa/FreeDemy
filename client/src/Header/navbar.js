import react from 'react'
import { useDispatch } from 'react-redux'
import { LogOutAction } from '../Action/useraction'
import './navbar.css'
const NavBar=()=>{



    const currentuser = JSON.parse(localStorage.getItem('currentuser'))
    const dispatch = useDispatch()

    const logout=()=>{
       console.log('Log Out')

       dispatch(LogOutAction())

    }

    return(<div  >

{
    currentuser ? (
        <div id="navbartop" className="gridbar" >
<a href="/homepage"><p id="freedemy"  >
    
<i class="fas fa-home"></i>Home
    
      </p> </a>
<a href="/userprofile" ><p> <i class="fa fa-user" aria-hidden="true"></i>   
Profile </p> </a>
<a onClick={ ()=>{ console.log('logout');
 dispatch(LogOutAction()) }
  } ><p > <i class="fas fa-sign-out-alt"></i> Logout </p> </a>




</div>
    ) : (<div id="navbartop" className="gridbar" >
    <a href="/"><p id="freedemy"  >Freedemy</p> </a>
    <a href="/login"><p>Login</p> </a>
    <a href="/signup"><p>SignUp</p> </a>



</div>
        ) 
}





    </div>)
}

export default NavBar;