import { Component, Fragment } from "react";

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error) {
        this.setState({ hasError: true })
    }

    render() {

        if (this.state.hasError) {
            return (
                <Fragment>
                    <p>An error has occoured . Please check</p>
                </Fragment>
            );
        }
        return this.props.children
    }
}

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        if (this.state.counter === 3) {

            // Simulate a JS error
            throw new Error('Crashed!!!!');
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
}

class EApp extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Fragment>
                <ErrorBoundary>
                    <Counter />
                </ErrorBoundary>
                <Counter />
            </Fragment>

        )
    }
}

export default EApp;