import React,{ useState } from "react";
const MyApp = () =>{

  const [count, setCOunt] = useState(4);

  function handler(){
    setCOunt(count+1);
  }

  function anotherHandler(){
    setCOunt(prevCount => prevCount+1)
  }
  
return(
    <div>
      <button onClick={anotherHandler}>Click for count</button>
      <div>{count}</div>
    </div>

    //JSX version of the above div structure
    
  /*  React.createElement('div',{},React.createElement('button',{onClick:anotherHandler},'Click from JSX'),
    React.createElement('div',{},count))*/
)
}

export default MyApp;