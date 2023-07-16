export const MessageReducer=(state={} , action )=>{

    switch(action.type)
    {
        case 'Message_request' : return{
            ...state ,
            loading : true 
             
        }

        case 'Message_success' :return {
...state ,
loading : false ,
success : true 
        }

        case 'Message_error' : return {
            ...state ,
            loading : false ,
            error : true 
        }


        default : return state 

    }



}