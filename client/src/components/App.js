import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

//Client ID => 493094279727-ivagcqmddlk45e7mg5e17ulrum5n7cj6.apps.googleusercontent.com

const App=()=>{
    return(
        <div className = "ui container">
            <BrowserRouter>
                <Header/>
                <div>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" component={StreamCreate}/>
                    <Route path="/streams/edit" component={StreamEdit}/>
                    <Route path="/streams/delete" component={StreamDelete}/>
                    <Route path="/streams/show"  component={StreamShow}/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;