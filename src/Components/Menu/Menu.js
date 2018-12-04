import React, { Component } from 'react';
import "./Menu.css";

class Menu extends Component {

    constructor(props) {
        super(props);
     

    }
    render() {
        if (this.props.show) return null;
        return (
            <div className="menu">
            

            </div>


        );
    }
}
export default Menu;
