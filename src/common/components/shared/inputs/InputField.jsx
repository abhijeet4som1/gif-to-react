import React from 'react'

interface InputFieldProps{
    label:string;
    name: string;
}

class InputField extends React.Component<InputFieldProps,{}>{

    constructor(props){
        super(props);
    }

    changeValue(event){
      if(event){
        event.persist();
        const { input: { onChange } } = this.props;
        onChange(event.target.value);
      }
    }

    render(){
        const { input: { value, onChange } } = this.props;
        return(
          <div className='field'>
              <input className='input' name={this.props.name}
                placeholder={this.props.label} type="text" defaultValue={value}
                onBlur={this.changeValue.bind(this)}/>
          </div>
        )
    }
}

export default InputField;
