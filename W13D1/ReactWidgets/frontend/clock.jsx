import React from "react";

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
}

tick() {
  const time = new Date();
  this.setState({ time });
}

componentDidMount() {
  let timer = setInterval(this.tick, 1000);
  this.timer = timer;
}

componentWillUnmount() {
  // debugger;
  clearInterval(this.timer);
}

render(state) {
    const time = this.state.time.toLocaleTimeString();
    const date = this.state.time.toLocaleDateString();
    // debugger;
    return <section>
      <h1>Clock</h1>
      <div id="clock">
        <ul id="time-list1">
            <li>Time: </li>
            <li>{ time }</li>
        </ul>
        <ul id="time-list2">
            <li>Date: </li>
            <li>{ date }</li>           
        </ul>
    </div>
    </section>;
  }
}

export default Clock;