import React from 'react';

interface FormContProps {
  children:any;
}

/*Generic container whild show children component in vertical and horizontal center*/
class FormContainer extends React.Component<FormContProps,{}>{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='form-container'>
        {this.props.children}
      </div>
    )
  }
}
export default FormContainer;
