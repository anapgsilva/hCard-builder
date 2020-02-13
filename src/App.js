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
  //save data from builder into state to be previewed
  previewInfo = (info) => {
    this.setState({...info});
  }
  //save photo into state to be previewed
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
