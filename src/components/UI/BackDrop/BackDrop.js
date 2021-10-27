import React from 'react';
import classes from './BackDrop.module.css';

const BackDrop = (props) => {
    const {onClick} = props;

    return (
        <div className={classes.BackDrop} onClick={onClick} />
    )
}

export default BackDrop;
