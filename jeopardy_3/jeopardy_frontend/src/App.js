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
    if (this.state.data) {
      return (<p>I'm true</p>)
    }

    return(
      <div>
        <button onClick={() => {
          this.setState(
            {data: true}
          )
        }}> don't press me</button>
        <p>hello I'm a react app and I have</p>
      </div>
    )
  }
}

export default App