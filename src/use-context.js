import { useState, createContext, useContext } from "react";

/*-------------without use context, passing data 1 by 1 to each component.------------*/

// const Mycode = () => {

//     const [data, setData] = useState('Data coming from App component(my-code)')
//     return (
//         <div>
//             wihout Using Context Hook Example
//             <Component2 data={data} />
//         </div>
//     )
// }

// const Component2 = (props) => {
//     return (
//         <div>
//             <Component3 data2={props.data} />
//         </div>
//     )
// }
// const Component3 = ({data2}) => {
//     return (
//         <div>
//             <Component4 data3={data2}/>
//         </div>
//     )
// }
// const Component4 = ({data3}) => {
//     return (
//         <div>
//             <p>Component 4</p>
//             <p>{data3}</p>
//         </div>
//     )
// }
// export default Mycode;


/* ----------using use contenxt hook ------------ */

const MyContext = createContext();
const Mycode = () => {

    const [data, setData] = useState('Data coming directly from App component(my-code)')
    return (
        <MyContext.Provider value={data}>
        <div>
            Use Context Hook Example
            <Component2 />
        </div>
        </MyContext.Provider>
    )
}

const Component2 = () => {
    return (
        <div>
            <Component3 />
        </div>
    )
}
const Component3 = () => {
    return (
        <div>
            <Component4 />
        </div>
    )
}
const Component4 = () => {
    const user = useContext(MyContext);
    return (
        <div>
            <p>Component 4</p>
            <p>{user}</p>
        </div>
    )
}
export default Mycode;