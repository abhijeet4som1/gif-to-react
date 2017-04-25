import React from 'react';
import {FormContainer} from '../shared';
import MailForm from '../forms/MailForm';

require('../../styles/style.less');
class Landing extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='main-cont'>
          <FormContainer className='form-container'>
              <MailForm/>
          </FormContainer>
      </div>
    )
  }
}

export default Landing;
