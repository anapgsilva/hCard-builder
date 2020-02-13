import React, {Component} from 'react';
import './App.css';
import Builder from './components/Builder/Builder';
import Preview from './components/Preview/Preview';

class App extends Component {
  constructor(){
    super();
    this.state = {
    };
  }

  previewInfo = (info) => {
    this.setState({...info});
  }

  savePhoto = (imgURL) => {
    this.setState({imgURL});
  }

  render(){
    return (
      <div className="App">
        <Builder showPreview={this.previewInfo} previewPhoto={this.savePhoto} />
        <Preview userInfo={this.state} />
      </div>
    );
  }
}

export default App;