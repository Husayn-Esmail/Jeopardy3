import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    data: '',
    color: false
  }

  componentDidMount() {
    axios.get('http://localhost:8000/dat/')
    .then(res=> {
      // data = res.data;
      this.setState({
        data: res.data
      })
    })
    .catch(err => {})
  }

  render() {
    // if (this.state.data) {
    //   return (<p>I'm true</p>)
    // }
    console.log(this.state.data)
    let color;
    if (this.state.color) {
      color = 'blue'
    } else {
      color = 'red'
    }
    // let x = this.context

    return(
      <div style={{ backgroundColor: color }}>
        <button  onClick={() => {
          if (this.state.color === false){
            this.setState(
              {color: true}
            )
          } else {
            this.setState({color: false})
          }
        }}> don't press me</button> 
        <p>hello I'm a react app and I have {color}</p>
        <JoepQ />
      </div>
    )
  }
}

class JoepQ extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      used: false 
    }
  }

  render() {
    return (
    <div>
      <p>state: {this.state.used}</p>
      <button onClick={() => {
        if (this.state.used === false) {
          this.setState({ used: true })
        } else {
          this.setState({ used: false })
        }
      }}>flip</button>
    </div>
    )
  }
}

export default App