import React from "react";

import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component{

    renderSubmit(value){return value==='english'?'Submit':'Inleveren';}

    render(){
        return(
            <ColorContext>
            {
                (color)=>{
                        return(
                            <button className={`ui button ${color}`}>
                                <LanguageContext.Consumer>
                                    {(value)=>{return this.renderSubmit(value)}}
                                </LanguageContext.Consumer>
                            </button>
                            )
                }
            }
            </ColorContext>
        );
    };

};

export default Button;