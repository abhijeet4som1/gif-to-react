import React from 'react';
import {FormContainer} from '../shared';
import MainForm from '../forms/MainForm';

/*Initial landing page*/
require('../../styles/style.less');
class Landing extends React.Component<{},{selTheme:number}>{

  constructor(props){
    super(props);
    this.state = {selTheme:1};
  }

  changeTheme(themeNum){
    this.setState({selTheme:themeNum});
  }

  /*rendering Main form wrapped around in form container to display in center*/
  render(){
    return(
      <div className={`main-cont theme-${this.state.selTheme}`}>
        <div className='btn-cont'>
            <button style={{backgroundColor:'#FE7B1A'}} className='sel-button' onClick={this.changeTheme.bind(this,1)}>Orange</button>
            <button style={{backgroundColor:'#307bbb'}} className='sel-button' onClick={this.changeTheme.bind(this,2)}>Blue</button>
            <button style={{backgroundColor:'#4db53c'}} className='sel-button' onClick={this.changeTheme.bind(this,3)}>Green</button>
            <button style={{backgroundColor:'#dd9d22'}} className='sel-button' onClick={this.changeTheme.bind(this,4)}>Yellow</button>
        </div>
          <FormContainer className='form-container'>
            <MainForm/>
          </FormContainer>
      </div>
    )
  }
}

export default Landing;
