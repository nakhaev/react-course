import React, {Component} from 'react';
import classes from './Drawer.module.css';
import BackDrop from '../../UI/BackDrop/BackDrop';

const links = [1,2,3]

class Drawer extends Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a href="#" > Link {link} </a>
                </li>
            )
        })
    }

    render() {
        const {isOpen, onClose} = this.props;

        const cls = [classes.Drawer];
        if(!isOpen) cls.push(classes.close);
        return (
            <>
                {isOpen && <BackDrop onClick={onClose}/>}
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
            </>
        )
    }
}

export default Drawer;
