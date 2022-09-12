import { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {

    const NewComponent = () => {

        const [count, setCount] = useState(4);

        function handler() {
            setCount(prevCount => prevCount + 1);
        }

        return (
            <div>
                <OriginalComponent name='value from HOC' count={count} handler={handler} />
            </div>
        )
    }

    return NewComponent;
}

export default UpdatedComponent;

//updated comp is HOC as it is taking another function as an argument and also returning a new function 
/*function UpdatedComponent(OriginalComponent){ 
    return NewComponent
}
*/