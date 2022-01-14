import axios from 'axios'
import { wind } from 'fontawesome';
import { useHistory } from "react-router-dom";


export const registeruseraction=(user)=> dispatch=>{

    dispatch({type:'user_registration_request'})

    axios.post('/api/users/register', user ).then(res=>{
        dispatch({type:'user_registration_success'})
      
    } ).catch(err=>{
        dispatch({type:'user_registration_failed' , payload:err } )
    })

}


export const LoginAction=(user)=>dispatch=>{

    dispatch({type:'user_login_request'})

    axios.post('/api/users/login' , user ).then( res=>{
        dispatch({type:'user_login_success'})
    
        localStorage.setItem('currentuser' , JSON.stringify(res.data) )
        window.location.href='/homepage'
        console.log(res)

    } ).catch(err=>{
        dispatch({type:'user_login_failed' , payload:err } )
    })

}




export const LogOutAction=()=>dispatch=>{

    localStorage.removeItem('currentuser')

    dispatch({type:'Logout_User'})

   
    window.location.href='/login'

}





export const UpdateUserAction=(upuser , userid )=>dispatch=>{

    dispatch({type:'User_Update_Request'})

    axios.post( '/api/users/updateuser' , {upuser , userid} ).then( res=>{
        dispatch({type:'User_Update_Success'})

    } ).catch(err=>{
        dispatch({type:'User_Update_Failed' , payload:err })
    })




}




export const DeleteUserAction=(userid)=>dispatch=>{

    dispatch({type:'User_Delete_Request'})

    axios.post( '/api/users/deleteid' , userid ).then(res=>{
        dispatch({type:'User_Delete_Success' , payload:res.data })
        localStorage.removeItem('currentuser')
        window.location.href='/login'

        // window.location.reload()

    }).catch(
        err=>{
            dispatch({type:'User_Delete_Failed' , payload:err })
        }
    )



    
}