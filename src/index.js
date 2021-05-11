// Import React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

import faker from 'faker';

if (module.hot) {
    module.hot.accept();
  }


//Create react component
const App = function(){

    return (
        <div className="ui container comments">
            
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45pm" image={faker.image.avatar()} commentText="Awesome !!!"/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:00pm" image={faker.image.avatar()} commentText="Best idea of the day !!!"/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 5:00pm" image={faker.image.avatar()} commentText="Can't wait to find out more!"/>
            </ApprovalCard>
            
        </div>
    );
};



// Take the react component and show it on the screen 
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);