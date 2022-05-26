import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';

class App extends React.Component {
  constructor (props){
    super(props)

    this.state = {
      mount:true
    }

    this.mountCounter = () => this.setState({mount:true});
    this.unmountCounter = () => this.setState({mount:false});
  }

  render () {
    return (
      <div>
        <button onClick = {this.mountCounter} disabled = {this.state.mount}> Mount </button>
        <button onClick = {this.unmountCounter} disabled = {!this.state.mount}> Unmount counter</button>
        {this.state.mount ? <Counter /> : null}
      </div>
    )
  }
}

ReactDOM.render(<App /> , document.getElementById('root'));
export default App