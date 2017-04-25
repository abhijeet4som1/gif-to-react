import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';

import {InputField, Button} from '../shared';

interface MailFormProps {

}

require('../../styles/form.less');
class MailForm extends React.Component<{},{}>{

  constructor(props){
    super(props);
    this.getFormCompPerc = this.getFormCompPerc.bind(this);
  }

  getFormCompPerc(){
    let perc = 0;
    let formVal = this.props.formValue && this.props.formValue.values;
    if(formVal){
        if(formVal.name)perc+=33;
        if(formVal.mail)perc+=33;
        if(formVal.message)perc+=34;
    }
    return perc;
  }

  render(){
    return(
        <div className='mail-form col-xs-8 col-sm-9 col-md-7 col-lg-5'>
            <h3 className='header'>We Love Mail<img style={{verticalAlign:'middle'}} src='./img/star.png'></img></h3>
            <form className='form'>
                <Field name="name" label="name" component={InputField}/>
                <Field name="mail" label="mail" component={InputField}/>
                <Field name="message" label="message" component={InputField}/>
                <Button label='SEND' compPerc={this.getFormCompPerc()}/>
            </form>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
    formValue:state.form.mail
});

let wrappedComp = reduxForm({
	form: 'mail'
})(MailForm);

export default connect(mapStateToProps)(wrappedComp);
