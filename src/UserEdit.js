import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function UserEdit(){
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
    
    console.log(recvUser)

    // const[user,setUser]=React.useState(userObj)
    
    const onChange=(event)=>{
        setrecvUser({...recvUser,[event.target.name]:event.target.value})
    }
    const sendData=()=>{
        console.log(recvUser);
        axios.put(`http://localhost:8989/api/editUser/${id}`,recvUser)
        .then(response=>response.data)
        .then(res=>{
            console.log("Data Updated")
        })
            // console.log(response)
    }

    return(
        <div>
            <h1>User Edit</h1>
            <label htmlFor="firstName">First Name :</label>
            <input type="text" name="firstName" value={recvUser.firstName} onChange={onChange}/>  
            
            <label htmlFor="lastName">Last Name :</label>
            <input type="text" name="lastName" value={recvUser.lastName}  onChange={onChange}/>
            
            <label htmlFor="city">City :</label>
            <input type="text" name="city"  value={recvUser.city} onChange={onChange}/>

            <button type="button" onClick={sendData}>Update</button>
            
        </div>
    )
}

export default UserEdit