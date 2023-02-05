import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {

  }

  componentDidMount() {
    let data;
    axios.get('http://localhost:8000/')
    .then(res=> {
      data = res.data;
      this.setState({
        // the fields that were serialized will appear here
        // and will have to be set in the state section
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