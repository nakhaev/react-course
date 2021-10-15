import React, {Component} from 'react';

export default class LifeCyclesChild extends Component {
    constructor(props) {
        console.log('[LifeCyclesChild] constructor');
        super(props);
        this.state = {
            inputValue: 'test'
        }
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('[LifeCyclesChild] componentWillReceiveProps', nextProps, nextContext);
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[LifeCyclesChild] componentWillReceiveProps', nextProps, nextState, nextContext);
        return true;
    }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log('[LifeCyclesChild] shouldComponentUpdate', nextProps, nextState, nextContext);
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('[LifeCyclesChild] getDerivedStateFromProps', nextProps, prevState);
        return prevState;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[LifeCyclesChild] getSnapshotBeforeUpdate',prevProps, prevState);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[LifeCyclesChild] componentDidUpdate', prevProps, prevState, snapshot);
    }

    // componentWillMount() {
    //     console.log('[LifeCyclesChild] componentWillMount');
    // }

    componentDidMount() {
        console.log('[LifeCyclesChild] componentDidMount');
    }

    componentWillUnmount() {
        console.log('[LifeCyclesChild] componentWillUnmount');
    }

    changeHandler = (e) => {
        this.setState({inputValue: e.target.value});
    }


    render() {
        console.log('[LifeCyclesChild] render');
        if(Math.random() > 0.5) {
            throw new Error('Component crashed!!!');
        }
        return (
            <div>
                <div>LifeCyclesChild {this.state.inputValue}</div>
                <input type="text" value={this.state.inputValue} onChange={this.changeHandler}/>
            </div>
        )
    }
}
