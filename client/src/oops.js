import React from 'react';
import { useHistory } from "react-router-dom";

const LogoutOOPS = () => {
    const history = useHistory()
    return(
        <div>
<h1 style={{color:'black'}} onClick={ ()=> history.push('/login') } > Login To Continue </h1>
<a href="/login" >
            <img src="https://cdn.dribbble.com/users/20580/screenshots/1276530/artisan-errors.gif"
            
            style={{width:'80%' , height:'450px', marginLeft:'8%' }}
            />
</a>
            
            
        </div>
    )
}

export default LogoutOOPS;