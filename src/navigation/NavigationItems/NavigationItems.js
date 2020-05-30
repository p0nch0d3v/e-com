import React, { Component } from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

class NavigationItems extends Component {
   render(){
        return (
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/">Home</NavigationItem>
                <NavigationItem link="/about">About</NavigationItem>
                <NavigationItem link="/service">Services</NavigationItem>
                <NavigationItem link="/contact">Contact</NavigationItem>
            </ul>
        );
    }
}

export default NavigationItems;