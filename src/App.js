import React, { Component } from 'react'
import './App.scss'
import Counter from './Counter/Counter'
import Cars from './Cars';

export const ClickedContext = React.createContext(false);

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
      cars: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2010}
      ],
      pageTitle: 'React components',
      showCars: false,
      showCounters: false,
    }
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  toggleCountersHandler = () => {
    this.setState({
      showCounters: !this.state.showCounters
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({cars});
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({cars});
  }


  render() {
    const divStyle = {
      textAlign: 'center'
    }

    return (
      <div style={divStyle}>
        <h1>{this.props.title}</h1>
        <hr/>
        <button style={{margin: '10px 0'}} className={'AppButton'} onClick={this.toggleCountersHandler} >Toggle Counters</button>
        {this.state.showCounters && <div>
          <ClickedContext.Provider value={this.state.clicked}>
            <Counter />
          </ClickedContext.Provider>
          <button onClick={() => this.setState({clicked: true})}>Change Clicked</button>
        </div>}

        <hr/>
        <button style={{margin: '10px 0'}} className={'AppButton'} onClick={this.toggleCarsHandler} >Toggle cars</button>
        <div style={{width: 400, margin: 'auto'}}>
          <Cars
              data={this.state.cars}
              showCars={this.state.showCars}
              deleteHandler={this.deleteHandler.bind(this)}
              onChangeName={this.onChangeName.bind(this)}
          />
        </div>
        <hr/>
      </div>
    );
  }
}

export default App
