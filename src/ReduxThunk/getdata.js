import { connect } from "react-redux";
import { Fragment } from "react";
import { getUsers } from './action'

const DataCollection = (props) => {

    return (
        <Fragment>
            <p>Hello Thunk</p>
            <button onClick={props.getData}>Get users data</button>
            {props.users && props.users.map(data => {
                return (
                    <p key={data.id}>{data.title} <span>{data.id}</span></p>
                )
            })}
        </Fragment>
    )

}

const mapStatetoProps = (state) => {
    return {
        users: state.users,
        loading: state.loading,
        error: state.error
    }

}

const mapDispatchtoProps = (dispatch) => {
    return {
        getData: () => { dispatch(getUsers()) }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(DataCollection);