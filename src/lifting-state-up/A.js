import { useState } from "react";
import B from "./B";
import C from "./C";

const A = () => {

    const [text, setText] = useState('');

    const changeHandler = (newText) => {
        setText(newText)
    }
    return (
        <div>
            <B changeHandler = {changeHandler}/>
            <C text={text}/>
        </div>
    )
}

export default A;