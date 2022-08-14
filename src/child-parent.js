import { useState } from "react"

const ChildComp = (props) => {
    const personData = {
        name: "mike",
        age: 20,
        skills: ['react', 'node']
    }
    const buttonHandler = () => {
        props.passData(personData)
    }
    return (
        <div>
            <button onClick={buttonHandler}>Click from child</button>
        </div>
    )
}

//we will pass a callback function from parent to child comp 
//and child comp will send data in the function and parent will receive the data

const Parent = () => {

    const [data ,setData] = useState({});

    const passData = (props) =>{
        console.log(props)
        setData(props)
    }
    return (
        <div>
            <ChildComp passData ={passData}/>
            {data.name}
        </div>
    )
}

export default Parent;