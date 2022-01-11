import React from 'react'

class Component2 extends React.Component{
    componentWillUnmount(){
        console.log("Component2 Unmounted!!!");
    }

    render(){

        return(
            <div>
                <h1>Component2</h1>
                <p>This is Component2!!!</p>
            </div>
        )
    }
}

export default Component2