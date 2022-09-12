import IdApp from "./id-app";
import RefsApp from "./refs-app"

const ParentRefs = () =>{
    return(
        <div>
        <RefsApp />
        <RefsApp />
        <IdApp />
        <IdApp />
        </div>
    )
}

export default ParentRefs;