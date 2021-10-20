import React from "react";

import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component{

    renderSubmit(value){return value==='english'?'Submit':'Inleveren';}

    render(){
        return(
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {(value)=>{return this.renderSubmit(value)}}
                </LanguageContext.Consumer>
            </button>
        );
    };

};

export default Button;