import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function UserInfo(){
    const {id}=useParams()
    const userObj={
        firstName:'',
        lastName:'',
        city:''
    }
    const [recvUser,setrecvUser]=React.useState(userObj)
    console.log(id)
    // console.log(props.location.state.userId)

    useEffect(()=>{
        axios.get(`http://localhost:8989/api/user/${id}`)
        .then(response=>response.data)
        
        .then(res=>{
            console.log(res)
            setrecvUser({...res})
        })
    },[])
    
    return(
        <div>
            <h1>User Info</h1>
            <p>FirstName:{recvUser.firstName}</p>
            <p>LastName:{recvUser.lastName}</p>
            <p>City:{recvUser.city}</p>
        </div>
    )
}

export default UserInfo