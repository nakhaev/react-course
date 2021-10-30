import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types';
import './Car.css'
import withClass from '../HOC/withClass';
import {withRouter} from 'react-router-dom';

const Car = props => {
    const inputRef = useRef(null);

    useEffect(() => {
        if(props.index === 1) inputRef.current.focus();
    }, []);

    const inputClasses = ['input']

    if (props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')
    }

    if (props.name.length > 4) {
      inputClasses.push('bold')
    }

    return (
      <div onClick={() => props.history.push(`/cars/${props.name.toLowerCase()}`)}>
        <h3>Сar name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input
          type="text"
          ref={inputRef}
          onChange={props.onChangeName}
          value={props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={props.onDelete}>Delete</button>
      </div>
    )
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

export default withRouter(withClass(Car, 'Car'));
