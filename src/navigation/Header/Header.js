import React, { Component } from 'react';
import classes from './Header.module.css';
import NavigationItems from '../NavigationItems/NavigationItems'

class Header extends Component {
    render(){
        return (
            <header className={classes.Toolbar}>
                <NavigationItems></NavigationItems>
            </header>
        );
    }
}

export default Header;