import DataCollection from "./getdata";
import { Provider } from "react-redux";
import userStore from './store';

const UserData = () => {
    return (
        <Provider store={userStore}>
            <h6>Users Data</h6>
            <DataCollection />
        </Provider>
    )
}

export default UserData;