
function MySoftApp2({person}){
    return(
        <div>
            <h2>Mysoft App2 Component</h2>
            <p>This is MysoftApp2</p>
            {/* <p>{message}</p> */}
            <p>{person.name}</p>
            <p>{person.city}</p>
            <p>{person.salary}</p>
        </div>
    )
}

export default MySoftApp2