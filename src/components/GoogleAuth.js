import React from 'react';
import {connect} from 'react-redux';

import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount(){
     
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({clientId:"493094279727-ivagcqmddlk45e7mg5e17ulrum5n7cj6.apps.googleusercontent.com",
                                      scope:'email'
                                    }).then(()=>{
                                        this.auth=window.gapi.auth2.getAuthInstance();
                                        this.onAuthChange(this.auth.isSignedIn.get());
                                        this.auth.isSignedIn.listen(this.onAuthChange);
                                    });
        });

    };

    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick ={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon"></i>
                    Sign in with Google
                </button>
            );
        }
    };

    onAuthChange = (isSignedIn)=>{
        // this.setState({isSignedIn:this.auth.isSignedIn.get()});
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        };
    };

    onSignInClick = ()=>{
        this.auth.signIn();
    };

    onSignOutClick = ()=>{
        this.auth.signOut();
    };

    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }

}

const mapStateToProps=(state)=>{
    console.log(state.auth.userId);
    return{isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);