import Hexagon from './Hexagon';
import React from 'react';
import './Chunk.css';

class Chunk extends React.Component {
 
    constructor(props) { 
        super(props)
    }
 
    render() {
        return (
            <div className={`chunk ${ this.props.chunk.y % 2 ? 'odd-chunk' : 'even-chunk' }`} style={{transform: `translateX(${this.props.chunk.x * 100}%) translateY(${this.props.chunk.y * 100}%)`}}>
                <div className="chunk-wrapper">

                    { this.props.chunk.rows.map((row, index) => {
                        return (
                            <div className={`row ${ this.props.chunk.y % 2 ? 'odd-chunk' : 'even-chunk' }`} key={`row-${ this.props.chunk.x}-${this.props.chunk.y}-${index}`}>
                                { row.map((hex) => {
                                    return <Hexagon x={hex.x} y={hex.y} hex={hex} key={`hex-${hex.x}-${hex.y}`}/>
                                })}
                            </div>
                        )
                    })};
                </div>
            </div>
        );
    }
}

export default Chunk;