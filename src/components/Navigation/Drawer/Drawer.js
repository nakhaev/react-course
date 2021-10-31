import React, {Component} from 'react';
import classes from './Drawer.module.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import { NavLink } from 'react-router-dom';

const links = [
    {to: '/', title: 'Quiz List', exact: true},
    {to: 'quiz-creator', title: 'Quiz Creator', exact: false},
    {to: '/auth', title: 'Auth', exact: false}
]

class Drawer extends Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        onClick={this.props.onClose}
                        exact={link.exact}
                        activeClassName={classes.active}
                    >
                        {link.title}
                    </NavLink>
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