import React, {createRef} from 'react'
import PropTypes from 'prop-types';
import './Car.css'
import withClass from '../HOC/withClass';

class Car extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = createRef();
    }

    componentDidMount() {
        if(this.props.index === 1) this.inputRef.current.focus();
    }

  render() {

    const inputClasses = ['input']

    if (this.props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')
    }

    if (this.props.name.length > 4) {
      inputClasses.push('bold')
    }

    return (
      <>
        <h3>Сar name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
          type="text"
          ref={this.inputRef}
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </>
    )
  }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

export default withClass(Car, 'Car');
