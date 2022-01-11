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
            console.log(res.firstName)
            setrecvUser(res)
            console.log(recvUser)
        })
    },[])
    
    return(
        <div>
            <h1>User Info</h1>
            {/* <p>FirstName:{user.firstName}</p>
            <p>LastName:{user.lastName}</p>
            <p>City:{user.city}</p> */}
        </div>
    )
}

export default UserInfo