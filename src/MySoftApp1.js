import MySoftApp2 from './MySoftApp2'
import MySoftApp3 from './MySoftApp3'


const users=[
    {id:1,name:"Peter"},
    {id:2,name:"Richard"},
    {id:3,name:"John"}
]

function MySoftApp1(){
    const message = "Hello Props!!! How Are You"
    const person={
        name:"John",
        city:"Pune",
        salary: 75000
    }

    return(
        <div>
            <h1>Mysoft App1 Component </h1>
            <p>This is Mysoft App1</p>
            {/* <MySoftApp2 message={message}/> */}
            <MySoftApp2 person={person}/>
            <MySoftApp3 userList={users}/>
        </div>
    )
}

export default MySoftApp1