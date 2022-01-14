import axios from 'axios'
import { wind } from 'fontawesome';
import { useHistory } from "react-router-dom";


export const MessageAction=(messagesend)=>dispatch=>{

    dispatch({type:'Message_request'}  )

    axios.post('/api/message/messagesend' , messagesend ).then(res=>{

        dispatch({type:'Message_success'}  )

    }).catch(err=>{
        dispatch({type:'Message_error'}  )

    })


}