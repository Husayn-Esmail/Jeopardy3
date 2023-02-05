import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {

  }

  componentDidMount() {
    // let data = 0;
    axios.get('http://localhost:8000/')
    .then(res=> {
      // data = res.data;
      this.setState({
        data: false
        // the fields that were serialized will appear here
        // and will have to be set in the state section
      })
    })
    .catch(err => {})
  }

  render() {
    // if (this.state.data) {
    //   return (<p>I'm true</p>)
    // }
    let color;
    if (this.state.data) {
      color = 'blue'
    } else {
      color = 'red'
    }


    return(
      <div style={{ backgroundColor: color }}>
        <button  onClick={() => {
          if (this.state.data === false){
            this.setState(
              {data: true}
            )
          } else {
            this.setState({data: false})
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