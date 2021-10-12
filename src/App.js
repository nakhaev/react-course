import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import config from './config';
import { Button, ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col  } from 'reactstrap';

function App() {
  const {apiUrl} = config;

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{apiUrl}</p>
        <p>Bootstrap buttons</p>
        <Row>
          <Col>
            <ButtonGroup>
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                Button Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Button color="primary">primary</Button>{' '}
              <Button color="secondary">secondary</Button>{' '}
              <Button color="success">success</Button>{' '}
              <Button color="info">info</Button>{' '}
              <Button color="warning">warning</Button>{' '}
              <Button color="danger">danger</Button>{' '}
              <Button color="link">link</Button>
            </div>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
