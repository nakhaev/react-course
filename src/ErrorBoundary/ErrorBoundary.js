import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
    state ={
        hasError: false,
        error: null,
        errorInfo: ''
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch', error, errorInfo);
        this.setState({hasError: true, error, errorInfo})
    }

    render() {
        if(this.state.hasError) {
            return (
                <div>
                    <h3 style={{color: 'red'}}>Something went wrong...</h3>
                </div>
            );
        }
        return this.props.children;
    }
}
