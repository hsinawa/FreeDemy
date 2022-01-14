import React, { useState } from "react";
import { UpdateUserAction } from '../Action/useraction'
import { useDispatch, useSelector } from 'react-redux'
import './profile.css'
import { UpdateProfileReducer } from "../Reducer/userreducer";
import { DeleteProfileReducer } from "../Reducer/userreducer";
import {DeleteUserAction} from '../Action/useraction'


const UserProfile = () => {


    const updatereducer = useSelector(state=>state.UpdateProfileReducer)
    const {loading , success , error } = updatereducer


    const deletuser = useSelector(state=> state.DeleteProfileReducer )
    const {  successdel , errordel } = deletuser



    const curuser = JSON.parse(localStorage.getItem('currentuser'))

    const [name, setname] = useState('')
    const [lname, setlname] = useState(curuser.name)

    const [email, setemail] = useState('')
    const [newmail, setnewmail] = useState(curuser.email)

    const [password, setnewpass] = useState('')

    const [cnewpass, setcnewpass] = useState('')


    const dispatch = useDispatch()

    const updateuser = (e) => {

        e.preventDefault()
        if (password == cnewpass) {
            const upuser = {
                name: name,
                email: email,
                password: password
            }

            console.log(upuser)

            dispatch(UpdateUserAction(upuser, curuser._id))


        }
        else {
            document.getElementById('message').innerHTML = `Passwords didn't match`

        }





    }



    const DeleteUser=()=>{

        dispatch(DeleteUserAction(curuser._id))


    }






    return (
        <div  >



            <h1>{curuser.name}'s Profile</h1>



            <div className="gridanother"  >

                <div id="boxstyle" className="bgmimg"  >
                    <i class="fa fa-user" aria-hidden="true" id="icon"   ></i>
                    <i class="fas fa-edit" id="icon"></i>
                    <span> Either Fill a New Entry or Repeat Old  </span>
                    <br /> <br />



                    <form onSubmit={updateuser} >
                        <div className="grid" >

                            <input type="text" value={lname} placeholder='First Name' />

                            <input type="text" value={name} placeholder='Enter New Name'

                                onChange={(e) => { setname(e.target.value) }} required

                            />

                        </div>

                        <br />

                        <div className="grid" >

                            <input type="text" value={newmail} placeholder='Email Id' />

                            <input type="text" value={email} placeholder='Enter New Email'

                                onChange={(e) => { setemail(e.target.value) }}

                                required

                            />

                        </div>


                        <br />

                        <div className="grid" >

                            <input type="password" value={password} placeholder='New Password'

                                onChange={(e) => { setnewpass(e.target.value) }}

                                required

                            />

                            <input type="password" value={cnewpass} placeholder='Confirm Password'

                                onChange={(e) => { setcnewpass(e.target.value) }}

                                required
                            />

                        </div>



                        <br /> <br />



                        <button id="btn" value='submit' style={{ backgroundColor: '#8ecae6', color: 'white' }}>
                            <i class="fa fa-refresh" aria-hidden="true"></i>
                            Update</button>

                        <br />

                        <span id="message" style={{ fontSize: "25px", color: '#023047' }} ></span>
                        { success && ( <span  style={{ fontSize: "25px", color: '#023047' }} >Updated Successfully</span>  ) }
                        { error && ( <span  style={{ fontSize: "25px", color: '#023047' }} >Something Went Wrong</span>  ) }
                    </form>





                    <br />





                </div>

                <div>

                    <div className="vergrid">

                        <div id="boxstyle">
                            Hello {curuser.name} !
                            <br />
                            You can email the developer <br />
                            at awanishmishra003@gmail.com  <br />
                            for more queries
                        </div >


                        <br />
                        <div id="boxstyle">


                            <i class="fas fa-trash-alt" id="icondel" onClick={ DeleteUser } ></i>

                            <br />
                            Delete Your Account
                            <br />

                            It'll be the Hardest GoodBye

                        </div>


                    </div>


                </div>


            </div>




        </div>
    )

}



export default UserProfile;