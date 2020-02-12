import React, {Component} from 'react';
import InputForm from './InputForm';


class Builder extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgURL: ''
    };
  }

  buildFileSelector = () => {
    return (
      <input type="file" onClick={this.saveFile} multiple="multiple"/>
    );
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value});
    this.props.showPreview({[event.target.name]: event.target.value});
  }

  handleFileSelect = (event) => {
    event.preventDefault();
    this.refs.fileUploader.click();
  }

  saveFile = (event) => {
    console.log('uploader', this.refs);
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const imgURL = URL.createObjectURL(file);
    this.setState({imgURL});
    this.props.previewPhoto(imgURL);
  }

  render(){
    const personal = ['given name', 'surname', 'email', 'phone'];
    const address = ['house name or #', 'street', 'suburb', 'state', 'postcode', 'country'];

    return (
      <div className="builder">
        <h1>hCard Builder</h1>

        <h5>PERSONAL DETAILS</h5>

        <div className="details">
          <InputForm detail='given name' saveInput={this.handleInput}/>
          <InputForm detail='surname' saveInput={this.handleInput}/>
          <InputForm detail='email' saveInput={this.handleInput}/>
          <InputForm detail='phone' saveInput={this.handleInput}/>
        </div>

        <h5>ADDRESS</h5>

        <div className="details">
          <InputForm detail='house name or #' saveInput={this.handleInput}/>
          <InputForm detail='street' saveInput={this.handleInput}/>
          <InputForm detail='suburb' saveInput={this.handleInput}/>
          <InputForm detail='state' saveInput={this.handleInput}/>
          <InputForm detail='postcode' saveInput={this.handleInput}/>
          <InputForm detail='country' saveInput={this.handleInput}/>
        </div>


        <div className="buttons">
          <a href="http" className="avatar btn" onClick={this.handleFileSelect} >Upload Avatar</a>

          <button className="create btn">Create hCard</button>
        </div>

        <input type="file" id="file" ref="fileUploader" onChange={this.saveFile} style={{display: "none"}}/>

      </div>
    );
  }
}

export default Builder;
