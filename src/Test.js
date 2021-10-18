import React from 'react';
import PropTypes from 'prop-types';

const Test = (props) => {
    const {name, age} = props;
    return(<>
            <h2>Test component</h2>
            <p>{name}</p>
            <p>{age}</p>
        </>)
}

Test.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default Test;
