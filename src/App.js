import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom';

import './App.scss'
import Counter from './Counter/Counter'
import Cars from './Cars';
import Home from './Home';
import About from './About';
import CarDetail from './CarDetail';

export const ClickedContext = React.createContext(false);

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
      pageTitle: 'React components',
      showCounters: false,
    }
  }


  toggleCountersHandler = () => {
    this.setState({
      showCounters: !this.state.showCounters
    })
  }


  render() {
    const divStyle = {
      textAlign: 'center'
    }

    const counters = (
      <>
        <button style={{margin: '10px 0'}} className={'AppButton'} onClick={this.toggleCountersHandler} >Toggle Counters</button>
        {this.state.showCounters && <div>
          <ClickedContext.Provider value={this.state.clicked}>
            <Counter />
          </ClickedContext.Provider>
          <button onClick={() => this.setState({clicked: true})}>Change Clicked</button>
        </div>}
      </>
    )

    return (
      <div style={divStyle}>
        <h1>{this.props.title}</h1>

        <nav>
          <ul style={{listStyle: 'none'}}>
            <li><NavLink to="/" exact activeClassName={'custom-active'}>Home</NavLink></li>
            <li><NavLink to="/about" activeStyle={{color: 'blue'}}>About</NavLink></li>
            <li><NavLink to={{
                pathname: "/cars",
                search: "?name=Mazda&sort=year&sort_direction=asc",
                hash: "#some_hash"
            }}>Cars</NavLink></li>
            <li><NavLink to="/counters">Counters</NavLink></li>
          </ul>
        </nav>

        <hr/>

          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' render={About} />
              <Route path='/counters' component={() => counters} />
              <Route path='/cars/:name' component={CarDetail} />
              <Route path='/cars' component={Cars} />
          </Switch>
      </div>
    );
  }
}

export default App
