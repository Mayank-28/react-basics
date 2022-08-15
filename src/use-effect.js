import { useEffect, useState } from "react"

const UseEffect = () => {

    const [count, setCount] = useState(0);

    // without giving any dependency it will run on first render and after that on every render
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(prevState =>prevState+1)
    //     },1000)
    // })

    //by giving empty array it will on first render only  (componentDidMount)
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(prevState =>prevState+2)
    //     },1000)
    // },[])

    //by giving dpendency in array it will run on first render 
    //and when specified dependecy gets changed (componentDidUpdate)
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(prevState =>prevState+2)
    //     },1000)
    // },[count])

    //by providing the return function in use effect (componentWillUnmount)
    useEffect(()=>{
        var timer = setTimeout(()=>{
            setCount(prevState => prevState+2)
        },1000)

        return function clean(){
            if(count > 10)
            clearTimeout(timer)
        };
    },[count])

    return(
        <div>
           <p>Use effect example</p> 
           <p>{count}</p>
        </div>
    )
}

export default UseEffect