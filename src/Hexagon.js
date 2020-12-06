import React from 'react';

import './Hexagon.css';

class Hexagon extends React.Component {
 
    constructor(props) { 
        super(props);
    }

 
    render() {
        return (
            <div className={`hexagon ${this.props.hex.resource}`}>
                <div className="debug">{this.props.hex.x} / {this.props.hex.y}</div>
                <div className="point top"></div>
                <div className="point top-right"></div>

                <div className="street street-left"></div>
                <div className="street street-top-left"></div>
                <div className="street street-top-right"></div>
            </div>
        );
    }
}

export default Hexagon;