import React from "react";
import Dot from "./Dot";

class NextShape extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shape: Array(8).fill(0),
    };
  }

  getShape(index) {
    const shapes = [
      [1, 1, 0, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 1, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 1, 0],
      [1, 1, 0, 0, 1, 1, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 0, 1, 1, 1, 0],
    ];

    if (index < 0 || index >= shapes.length) {
      return [0, 0, 0, 0, 0, 0, 0, 0];
    }

    return shapes[index];
  }

  random(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  render() {
    return (
      <>
        <div className="game-title">Next Shape</div>
        {this.state.shape.map((value, index) => {
          return index === 3 ? (
            <>
              <Dot key={index} style={value} />
              <br />
            </>
          ) : (
            <Dot key={index} style={value} />
          );
        })}
        <br />
        <button
          onClick={() => {
            this.setState({ shape: this.getShape(this.random(0, 6)) });
          }}
        >
          New shape
        </button>
      </>
    );
  }
}

export default NextShape;
