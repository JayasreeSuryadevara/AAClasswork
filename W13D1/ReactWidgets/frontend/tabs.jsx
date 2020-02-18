import React from "react";

  class Tabs extends React.Component {
    constructor (props) {
      super(props);
      this.state = { index: 0 };
  }

  render() {
      debugger;
    const titles = this.props.tabs.map((tab,i) => {
        return <li key={ i }> { tab.title }</li>
    });
    return <span id="tabs">
        <h1>Tabs</h1>
        <span id="tab-header">
        <ul>{ titles }</ul>
        </span>
        <span id="tab-content">{this.props.tabs[this.state.index].content}</span>
    </span>;
  }
}
//tabs[0].content
export default Tabs;