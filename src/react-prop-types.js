import PropTypes from 'prop-types';

// Component
const ReactPropType = (props) => {
    return (
        <div>
            <h1>
                {props.arrayProp}
                <br />

                {props.stringProp}
                <br />

                {props.numberProp}
                <br />

                {props.boolProp}
                <br />
            </h1>
        </div>
    );
}

// Validating prop types
ReactPropType.propTypes = {
    arrayProp: PropTypes.array,
    stringProp: PropTypes.string,
    numberProp: PropTypes.number,
    boolProp: PropTypes.bool,
}

// Creating default props
ReactPropType.defaultProps = {

    arrayProp: ['Ram', 'Shyam', 'Raghav'],
    stringProp: "GeeksforGeeks",
    numberProp: "10",
    boolProp: true,
}

export default ReactPropType;
