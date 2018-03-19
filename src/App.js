import React, { Component } from 'react';
import formatElapsedTime from './formatElapsedTime';
import './App.css';

class App extends Component {
  state = {
    time: 0,
    lap: [],
    // is counting is a state which represent if the stopwatch is 
    // currently on or off
    isCounting: false,
    // intervalcounter will be a reference for the setinterval later
    intervalCounter: null
  }

  startStopWatch() {
    // create a reference for the interval so it can be accessed later
    const interval = setInterval(() => {
      this.setState({ time: this.state.time + 10})
    }, 10);
    this.setState({ intervalCounter: interval })
    this.setState({ isCounting: true});
  }

  stopStopWatch() {
    clearInterval(this.state.intervalCounter);
    this.setState({ isCounting: false});
  }

  resetStopWatch() {
    this.setState({ time : 0, lap: [] });
  }

  addLap() {
    this.setState({ lap: [ ...this.state.lap, this.state.time ] })
  }

  render() {
    const { time, lap, isCounting } = this.state;
    const lapList = lap.map((item, idx) => <li key={idx} >{`${idx+1}.`} {formatElapsedTime(item)}</li>)
    return (
      <div className="stop-watch-container">

        <h1>{formatElapsedTime(time)}</h1>
        {
          lap.length > 0 &&
          <ul>
          { lapList }
          </ul>
        }

        {
          isCounting && 
          <div>
            <button onClick={this.stopStopWatch.bind(this)} >Stop</button>
            <button onClick={this.addLap.bind(this)} >Lap</button>
          </div>
        }
        {
          !isCounting && 
          <div>
            <button onClick={this.startStopWatch.bind(this)} >{ time === 0 ? 'Start' : 'Resume' }</button>
            <button onClick={this.resetStopWatch.bind(this)} >Reset</button>
          </div>
        }
      </div>
    );
  }
}

export default App;
