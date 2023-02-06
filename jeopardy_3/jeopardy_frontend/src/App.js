import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    data: '',
    color: false
  }

  // componentDidMount() {
  //   axios.get('http://localhost:8000/dat/')
  //   .then(res=> {
  //     // data = res.data;
  //     this.setState({
  //       data: res.data
  //     })
  //   })
  //   .catch(err => {})
  // }

  render() {
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
        <GameBoard />
        {/* <JoepQ question="hello?" answer="goodbye" value="100" question_id="1"/> */}
      </div>
    )
  }
}

class GameBoard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      cats_and_qs:[]
    };
  }


  componentDidMount() {
    axios.get('http://localhost:8000/dat/')
    .then(res => {
      this.setState({
        cats_and_qs: res.data
      })
    })
    .catch(err => {})
  };

  render() {
    console.log(this.state.cats_and_qs)
    let cats = [];
    // extract category names
    for (let key in this.state.cats_and_qs) {
      cats.push(key)
    }

    return ( 
      <div>
        <p>{cats}</p>
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
      <button onClick={() => {
        this.setState({ used: true})
      }} className="question_button">{ this.props.value }</button>
    </div>
    )
  }
}

export default App