import React, { Component } from 'react';
import classes from './Header.module.css';

class Header extends Component {
    render(){
        return (
            <header className={classes.Toolbar}>
                e-com
                <nav>
                    <ul>
                        <li>1</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;