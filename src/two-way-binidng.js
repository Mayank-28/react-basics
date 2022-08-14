import { Fragment, useState } from "react";

// example of Controlled Component also bcuz input value has been controlled by react
const TwoWayBinding = () => {

    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <Fragment>
            <div>
                <label htmlFor="userName">User Name</label>
                <input type='text' name="userName" value={name} onChange={handleChange} />
            </div>

            <p>{name}</p>
        </Fragment>
    )
}

export default TwoWayBinding;