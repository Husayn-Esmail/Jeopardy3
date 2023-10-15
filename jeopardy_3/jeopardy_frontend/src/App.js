import './App.css';
import React from 'react';
import axios from 'axios';
import Question from './Components/QuestionBlock/QuestionBlock';
import { channels } from './shared/constants';
import Exp from './Components/Experimental/experiment';

class App extends React.Component {
  state = {
    data: '',
    color: false,
  };

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
      color = 'blue';
    } else {
      color = 'red';
    }
    // let x = this.context

    // const getData = () => {
    //   ipcRenderer.send(channels.GET_DATA, { product: 'notebook' });
    // };
    // const getData = () => {
    //   electronAPI.getData({ setTitle });
    // };
    // const getData = electronAPI.setTitle();

    return (
      <div style={{ backgroundColor: color }}>
        <button
          onClick={() => {
            if (this.state.color === false) {
              this.setState({ color: true });
            } else {
              this.setState({ color: false });
            }
          }}
        >
          {' '}
          don't press me
        </button>
        {/* <button onClick={getData}>Get Data</button> */}
        Title: <input id="title" />
        <button id="btn" type="button">
          Set
        </button>
        <Exp />
        {/* <p>
          hello I'm a react app and I have the color <b>{color}</b>
        </p>
        <div className="row">
          <div className="col">
            <Question value="100" />
            <Question value="200" />
            <Question value="300" />
            <Question value="400" />
            <Question value="500" />
          </div>
          <div className="col">
            <Question value="100" />
            <Question value="200" />
            <Question value="300" />
            <Question value="400" />
            <Question value="500" />
          </div>
          <div className="col">
            <Question value="100" />
            <Question value="200" />
            <Question value="300" />
            <Question value="400" />
            <Question value="500" />
          </div>
          <div className="col">
            <Question value="100" />
            <Question value="200" />
            <Question value="300" />
            <Question value="400" />
            <Question value="500" />
          </div>
          <div className="col">
            <Question value="100" />
            <Question value="200" />
            <Question value="300" />
            <Question value="400" />
            <Question value="500" />
          </div>
        </div> */}
        {/* <GameBoard /> */}
        {/* <JoepQ question="hello?" answer="goodbye" value="100" question_id="1"/> */}
      </div>
    );
  }
}

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats_and_qs: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/dat/')
      .then((res) => {
        this.setState({
          cats_and_qs: res.data,
        });
      })
      .catch((err) => {});
  }

  // for mapping categories
  /**
   * maps through category names using the passed in array
   * uses the category name as the key
   * @param {*} arr
   * @returns array of category components
   */
  makeCatBlocks = (arr) => {
    return arr.map((value) => <Category key={value} category_name={value} />);
  };

  render() {
    console.log(this.state.cats_and_qs);
    let cats = [];
    // extract category names
    for (let key in this.state.cats_and_qs) {
      cats.push(key);
    }
    let comps = this.makeCatBlocks(cats);

    return <div>{comps}</div>;
  }
}

class JoepQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      used: false,
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ used: true });
          }}
          className="question_button"
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}

class Category extends React.Component {
  render() {
    return (
      <div className="col">
        <p className="category">{this.props.category_name}</p>
      </div>
    );
  }
}

export default App;
