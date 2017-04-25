import React from 'react';

class Button extends React.Component{

    constructor(props){
      super(props);
    }

    render(){
        let isDisable = this.props.compPerc !== 100;
        return(
          <div className={`button ${!isDisable && 'enable'}`}
            disabled={isDisable}>
            {this.props.label}
          </div>
        );
    }
}
export default Button;
