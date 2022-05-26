import React from 'react'

class Counter extends React.Component {
    constructor (props) {
        console.log("constructor")
        super(props);

        this.state = {
            counter: 0
        }

        this.increment = () => this.setState({counter: this.state.counter + 1});
        this.decrement = () => this.setState({counter: this.state.counter - 1});
    }

    componentDidMount() {
        //Right after render, this function is called
        console.log("Component Did Mount");
        console.log(' -------------------');
    }

    render() {
        console.log('Render');
        return (
            <div>
                <button onClick = {this.increment}> Increment </button>
                <button onClick = {this.decrement}> Decrement </button>

                <div className = "counter">
                    Counter: {this.state.counter}
                </div>
            
            </div>
        )
        
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Component did update');
        console.log('---------------------');
    }

    componentWillUnmount(){
        console.log("component will unmount");
        console.log('----------------------');
    }
}

export default Counter;

