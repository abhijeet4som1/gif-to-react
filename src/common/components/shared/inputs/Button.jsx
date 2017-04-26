import React from 'react';

class Button extends React.Component{

    constructor(props){
      super(props);
    }

    render(){
        let classes= ['one-third','two-third','full'];
        let isDisable = this.props.compPerc !== 2;
        let finalClass = '',i=-1;
        while(i<this.props.compPerc){
            finalClass += ' '+ classes[++i];
        }
        return(
          <div className={`wrapper ${!isDisable && 'enable'}`}>
            <div className={`button draw${finalClass}`}
              disabled={isDisable}>
              {this.props.label}
            </div>
          </div>
        );
    }
}
export default Button;
