import React, { useEffect } from 'react'
import axios from 'axios'
import Table from './Table'

function MyForm(){
    const[firstName,setFirstName]=React.useState('')
    const[lastName,setFastName]=React.useState('')

    const[fname,setFname]=React.useState('')
    const[lname,setLName]=React.useState('')

    const userobj={
        "firstName" :'',
        "lastName"  :'',
        "city"      :'',
        "email"     :'',
        "address"   :[]
    }



    const[user,setUser]=React.useState(userobj)
    
    const onChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    
    const sendData=()=>{
        console.log(user);
        axios.post("http://localhost:8989/api/saveUser",user)
        .then(response=>response.data)
        .then(res=>{
            if (res.status===201){
                getUserList()
            }
        })
            // console.log(response)
    }
    
    const[userList,setUserList]=React.useState([])
    useEffect(()=>{
          getUserList()  
    },[])
    
    const getUserList=()=>{
        axios.get('http://localhost:8989/api/Users')
        .then(response=>response.data)
        .then(res=>{
            setUserList(res)
        })

    }
    // fetch,axios
    // const getData=()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.json())
    //     .then(res=>{
    //         setUserList(res)
    //     })
    // }
    
    const getData=()=>{
        // axios.get("https://jsonplaceholder.typicode.com/users")
        // .then(response=>response.data)
        // .then(res=>{
        //     setUserList(res)
        // })
    }

    // useEffect
    // usage 1
    // useEffect(()=>{
    //     console.log("Hiiiiiiiii")
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.data)
    //     .then(res=>{
    //         setUserList(res)
    //     })
    // })

    // // usage 2
    // useEffect(()=>{
    //     console.log("Hiiiiiiiii")
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.data)
    //     .then(res=>{
    //         setUserList(res)
    //     })
    // },[])

    const[number,setNumber]=React.useState(0)
    // usage 3
    // useEffect(()=>{
    //     console.log("Hiiiiiiiii")
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.data)
    //     .then(res=>{
    //         setUserList(res)
    //     })
    // },[number])

    //  Menu1, Menu2  // React Query

    const incrementValue=()=>{
        setNumber(number+1) 
    }

return(
    <div>
        <label htmlFor="firstName">First Name :</label>
        <input type="text" name="firstName" onChange={onChange}/>  
        
        <label htmlFor="lastName">Last Name :</label>
        <input type="text" name="lastName" onChange={onChange}/>
        
        <label htmlFor="city">City :</label>
        <input type="text" name="city" onChange={onChange}/>

        <label htmlFor="email">Email :</label>
        <input type="email" name="email" onChange={onChange}/>

        <button type="button">Show Name</button>
        <button type="button" onClick={sendData}>Submit</button>
        <button type="button" onClick={incrementValue}>Add</button>
        <button type="button" onClick={getData}>Get Data</button>

        {/* <ul>
            {userList.map((user)=>(
                <li key={user.id}>{user.name+ "|" + user.email}</li>                        
            ))}
        </ul> */}

        <Table userList={userList}/>
        
    </div>
)
}
 
export default MyForm