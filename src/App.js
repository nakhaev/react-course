import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

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
      isLoggedIn: false
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
          <h3>Is Logged In: {this.state.isLoggedIn.toString()}</h3>
          <button onClick={() => this.setState({isLoggedIn: true})}>LogIn</button>
        <hr/>

        <Switch>
            <Route path='/' exact component={Home} />
            {this.state.isLoggedIn ? <Route path='/about' component={About} /> : null } {/* только если пользователь вошел в систему (приватный роут) */}
            <Route path='/counters' render={() => counters} />
            <Route path='/cars/:name' component={CarDetail} />
            <Route path='/cars' component={Cars} />
            <Redirect to={'/'} /> {/*сработает если не найдет совпадения пути*/}
            <Route render={() => <h1>404 not found</h1>}/> {/*сработает если не найдет совпадения пути и если убрать редирект*/}
        </Switch>
      </div>
    );
  }
}

export default App
