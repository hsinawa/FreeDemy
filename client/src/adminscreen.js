import React, { useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'
import {getall} from './Action/useraction'
import { getalluser } from "./Reducer/userreducer";

const AdminScreen=()=>{

    const seeuser = useSelector( state=>state.getalluser )

const {users , loading , error } = seeuser

    const dispatch = useDispatch()

useEffect( ()=>{
    dispatch(getall())
} , [] )

let idx  = 0

    return(
        <div>
            This is Admin Screen
showing all

<br/>

<table style={{border:'1px solid black'}} >

<thead>
    <tr>
    <th> Index </th>
<th> Name </th>
<th> Email </th>
<th> Phone </th>

</tr>
</thead>

  

{users && ( users.map(use=>{

return <tr  >
<td  >
    {++idx}
    </td>

<td>
{use.name}
</td>

<td>
{use.email}
</td>

<td>
{use.phone}
</td>

</tr>

}) ) }
  </table>

        </div>
    )
}

export default AdminScreen;