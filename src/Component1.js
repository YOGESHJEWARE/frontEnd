import React,{Component} from 'react'

class Component1 extends Component{
    
    componentWillUnmount(){
        console.log("Component1 Unmounted!!!");
    }
    
    render(){

        return(
            <div>
                <h2>Component1</h2>
                <p>This is Component1!!!</p>
            </div>
        )
    }
}

export default Component1