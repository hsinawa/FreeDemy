export const RegisterUserReducer=(state={} , action )=>{

    switch(action.type)
    {
        case 'user_registration_request' : return { ...state ,
        
            loading : true 

        }

        case 'user_registration_success': return {
            ...state , 
            loading : false ,
            success : true ,
            error : false 
        }

        case 'user_registration_failed' : return {
            ...state ,
            loading : false ,
            error : true  ,
            success:true
        }

        default : return state
    }

}



export const LoginReducer=(state={} , action )=>{

    switch(action.type)
    {
        case 'user_login_request':return {
            ...state ,
            loading : true ,
            
        }

        case 'user_login_success' :return {
            ...state ,
            loading : false ,
            success : true 
            
        }

        case 'user_login_failed' : return {
            ...state ,
            loading : false ,
            error : 'Invalid Credentials' 
        }

        default : return state 
    }


}






















export const UpdateProfileReducer=( state={} , action )=>{

    switch(action.type)
    {
        case 'User_Update_Request' : return { ...state ,
            loading : true 
        }

        case 'User_Update_Success' : return {
            ...state , 
            success : true ,
            error : false ,
            loading : false 
        }

        case 'User_Update_Failed' : return {
            ...state ,

            loading : false ,
            error : true ,
            success : false
        }

        default : return state 


    }


}








export const DeleteProfileReducer=(state={} , action )=>{


 switch(action.type)
    {
        case 'User_Delete_Request':return {
            ...state ,
            loading : true ,
            
        }

        case 'User_Delete_Success' :return {
            ...state ,
            loading : false ,
            successdel : true 
            
        }

        case 'User_Delete_Failed' : return {
            ...state ,
            loading : true ,
            errordel : action.payload
        }

        default : return state 
    }


}