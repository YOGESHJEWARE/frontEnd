import React , {useEffect} from 'react'
import axios from 'axios'

function Table({userList}){
    
    // const [userList,setUserlist]=React.useState([])

    // useEffect(()=>{
    //     axios.get('http://localhost:8989/api/Users')
    //     .then(response=>response.data)
    //     .then(res=>{
    //         setUserlist(res)
    //     })

    // },[])

function viewMoreInfo(id){


}    
    return(
        <div>
            <h1>User Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((user)=>(
                            <tr key={user._id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.city}</td>
                                <td><button onClick={()=>viewMoreInfo(user._id)}>More Info</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}
export default Table