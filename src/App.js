import React, {useState} from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';

const accordionItems=[
    {
        title:'What is React?',
        content:"React is a front end javascript framework"    
    },
    {
        title:"Why use react?",
        content:'React is a favorite JS library among JS engineers'
    },
    {
        title:'How do you use React?',
        content:'You use React by creating components'
    }
];

const dropdownItems=[
    {
        label:"The color Red",
        value:'red'   
    },
    {
        label:"The color Green",
        value:'green'
    },
    {
        label:"A shade of Blue",
        value:'blue'
    }
];


const App = () => {

    const [selected, setSelected]=useState(dropdownItems[0]);

    return(
        <div>
            <Header></Header>
            <Route path="/">                
                <Accordion items={accordionItems}/>
            </Route>
            <Route path="/list">                
                <Search/>
            </Route>
            <Route path="/dropdown">                
                <Dropdown label="Select a color"
                          selected={selected} 
                          onSelectedChange={setSelected}
                          options={dropdownItems}
                          />
            </Route>
            <Route path="/translate">                
                <Translate/>
            </Route>
        </div>
    );
}


export default App;