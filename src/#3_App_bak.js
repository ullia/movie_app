import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

function add2(){
  console.log("add2");
}

class App extends Component {
  constructor(props){
    super(props);
    console.log("hello! start!");
  }
  state = {
    count : 0
  }
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
    // this.setState({ count: this.state.count + 1 });
    console.log("add");
  }
  minus = () => {
    this.setState({ count: this.state.count - 1 });
    console.log("minus");
  }
  componentDidMount() {
    console.log("rendered");
    
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("state update!");
  }
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUnmount() {
    console.log("this component is done. Good Bye!");
  }
  render() { 
    console.log("rendering...");
    
    return (
      <div>
        <h1>This number is: {this.state.count}</h1>
        <button onClick={add2}>Add</button>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
 
export default App;

