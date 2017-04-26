import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';

import {InputField, Button} from '../shared';

/*Main form*/
require('../../styles/form.less');
class MainForm extends React.Component<{},{}>{

  constructor(props){
    super(props);
    this.getFormCompPerc = this.getFormCompPerc.bind(this);
  }

 /* get number of textbox has data*/
  getFormCompPerc(){
    let perc = -1;
    let formVal = this.props.formValue && this.props.formValue.values;
    if(formVal){
        if(formVal.name)perc++;
        if(formVal.mail)perc++;
        if(formVal.message)perc++;
    }
    return perc;
  }

  render(){
    return(
        <div className='mail-form col-xs-8 col-sm-9 col-md-7 col-lg-5'>
            <h3 className='header'>We love mail<img style={{verticalAlign:'middle'}} src='./img/star.png'></img></h3>
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

let mapStateToProps = (state) => ({
    formValue:state.form.main
});

let wrappedComp = reduxForm({
	form: 'main'
})(MainForm);

export default connect(mapStateToProps)(wrappedComp);
