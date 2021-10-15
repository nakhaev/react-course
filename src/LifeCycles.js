import React, {Component} from 'react';
import LifeCyclesChild from './LifeCyclesChild';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

export default class LifeCycles extends Component {
    constructor(props) {
        console.log('[LifeCyclesParent] constructor');
        super(props);
        this.state = {
            test: 'test'
        }
    }

    componentWillMount() {
        console.log('[LifeCyclesParent] componentWillMount');
    }

    componentDidMount() {
        console.log('[LifeCyclesParent] componentDidMount');
    }


    render() {
        console.log('[LifeCyclesParent] render');
        return (
            <div>
                <div>LifeCycles {this.state.test}</div>
                <ErrorBoundary>
                    <LifeCyclesChild />
                </ErrorBoundary>
            </div>
        )
    }
}
