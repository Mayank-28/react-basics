import { Provider } from 'react-redux';
import { Fragment } from 'react';
import Counter from './counter';
import store from './store';

function ReactIndex() {
    console.log(store);

    return (
        <Fragment>
            <div>React Redux Example</div>
            <Provider store={store}>
                <Counter/>
            </Provider>
        </Fragment>
    )

}

export default ReactIndex;