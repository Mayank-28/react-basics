import UpdatedComponent from "./high-order-comp";

const Counter = (props)=>{
  //   const [count, setCount] = useState(4);

  // function handler(){
  //   setCount(prevCount => prevCount+1);
  // }

  return(
    <div>
      <div>{props.name} Hover</div>
      <button onClick={props.handler}>Click for count</button>
      <div>{props.count}</div>

    </div>
)
}

export default UpdatedComponent(Counter);