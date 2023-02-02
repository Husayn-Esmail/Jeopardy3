import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {

  }

  componentDidMount() {
    let data;
    axios.get('http://localhost:8000')
    .then(res=> {
      data = res.data;
      console.log(data)
      this.setState({

      })
    })
    .catch(err => {})
  }

  render() {
    return(
      <div>
        <p>hello I'm a react app</p>
      </div>
    )
  }
}

export default App