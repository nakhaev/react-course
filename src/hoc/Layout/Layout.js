import React, { useState } from 'react';
import classes from './Layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';

const Layout = props => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenuHandler = () => {
        setMenuOpen(prevState => !prevState);
    }

    const menuCloseHandler = () => {
        setMenuOpen(false)
    }

    return (
        <div className={classes.Layout}>
            <Drawer isOpen={menuOpen} onClose={menuCloseHandler}/>
            <MenuToggle isOpen={menuOpen} onToggle={toggleMenuHandler}/>
            <main>
                { props.children }
            </main>
        </div>
    )
}

export default Layout;
