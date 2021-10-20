import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import UserCreate from './UserCreate';


class App extends React.Component{

    state={language:'english'};

    onLanguageChange(language){
        this.setState({language});
    };

    render(){
        return(
            <div className="ui container">
                <div>
                    Selecte language:
                    <i className="flag us" onClick={()=>{this.onLanguageChange('english')}}></i>
                    <i className="flag nl" onClick={()=>{this.onLanguageChange('dutch')}}></i>
                </div>
                {this.state.language}
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value={'red'}>
                        <UserCreate/>
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        )
    }

}

export default App;
