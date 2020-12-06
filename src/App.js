import React from 'react';
import './App.css';

import Chunk from './Chunk';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      chunks: []
    }
    
    for (let y = 0; y < 10; ++y) {
      for (let x = 0; x < 10; ++x) {
        let chunk = {};
        chunk.rows = [];
        chunk.x = x;
        chunk.y = y;

        for (let hexy = 0; hexy < 5; ++hexy) {
          let row = [];

          for (let hexx = 0; hexx < 5; ++hexx) {
            let hex = {};
            hex.x = chunk.x * 5 + hexx;
            hex.y = chunk.y * 5 + hexy;

            switch(Math.floor(Math.random() * Math.floor(5))) {
              case 0:
                  hex.resource = "wood";
                  break;
              case 1:
                  hex.resource = "clay";
                  break;
              case 2:
                  hex.resource = "wheat";
                  break;
              case 3:
                  hex.resource = "stone";
                  break;
              case 4:
                  hex.resource = "sheep";
                  break;
              default:
            }

            row.push(hex);
          }

          chunk.rows.push(row);
        }
        this.state.chunks.push(chunk);
      }
    }
  }

  
  render(){
    return (
      <div className="board">
        <div className="App">
          { this.state.chunks.map((chunk) => {
            return <Chunk chunk={chunk} key={`chunk-${chunk.x}-${chunk.y}`}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
