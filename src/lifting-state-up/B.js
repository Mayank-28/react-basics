const B =(props)=>{

    const changeHandler = (e)=>{
        props.changeHandler(e.target.value)
    }
    return(
        <div>
            <input type="text" onChange={changeHandler} />
        </div>
    )
}

export default B;