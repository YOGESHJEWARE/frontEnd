function MySoftApp3({userList}){
    return(
        <div>
            <h3>MySoft App3 Component </h3>
            <ul>
                {userList.map((user)=>(
                    <li key={user.id}>{"Id : "+ user.id+", Name: "+user.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default MySoftApp3