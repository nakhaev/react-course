import React, {Component} from 'react'
import Auxiliary from '../HOC/Auxiliary'
import Counter2 from '../Counter2/Counter2';

export default class Counter extends Component {
  state = {
    counter: 0
  }

  addCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    // return (
    //   <div>
    //     <h2>Counter {this.state.counter}</h2>
    //     <button onClick={this.addCounter}>+</button>
    //     <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
    //   </div>
    // )

    // return [
    //     <h2 key={'1'}>Counter {this.state.counter}</h2>,
    //     <button key={'2'} onClick={this.addCounter}>+</button>,
    //     <button key={'3'} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
    // ]
    //
    //   return (
    //       <React.Fragment>
    //           <h2>Counter {this.state.counter}</h2>
    //           <button onClick={this.addCounter}>+</button>
    //           <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
    //       </React.Fragment>
    //   )

      return (
          <Auxiliary>
              <h2>Counter {this.state.counter}</h2>
              <Counter2 />
              <button onClick={this.addCounter}>+</button>
              <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
          </Auxiliary>
      )
  }
}
