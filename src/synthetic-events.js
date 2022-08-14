function SyntheticEvents() {
    const handlepreventDefault = e => {
        e.preventDefault();
        console.log("clicked on preventDefault")
    }
    const handlestopPropagation = e => {
        e.stopPropagation();
        console.log("clicked on stopPropagation")
    }
  
    const insideDiv = (e) => {
        e.stopPropagation();
        console.log("clicked on Div")
    }
    return (
        <div className="App">
            <form>
                Type anything: <input />
                <button type="submit" 
                    onClick={handlepreventDefault}>
                    preventDefault()
                </button>
                <span onClick={handlestopPropagation}>
                    stopPropagation()
                    <span onClick={insideDiv}> Inside div</span>
                </span>
                <button type="submit">submit</button>
  
            </form>
        </div>
    );
}
  
export default SyntheticEvents;