import { useState } from "react";
import Counter from "./counter";
import HoverCounter from "./another-counter";
const HOCApp = (props)=>{
  

  return(
    <div>
      <Counter/>
      <HoverCounter />

    </div>
)
}

export default HOCApp;