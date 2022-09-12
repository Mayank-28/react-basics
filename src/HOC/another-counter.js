import UpdatedComponent from "./high-order-comp";

const HoverCounter = (props)=>{
//     const [count, setCount] = useState(4);

//   function handler(){
//     setCount(prevCount => prevCount+1);
//   }

  return(
    <div>
        <div>{props.name} Click</div>
      <button onMouseOver={props.handler}>Hover for count</button>
      <div>{props.count}</div>
    </div>
)
}

export default UpdatedComponent(HoverCounter);