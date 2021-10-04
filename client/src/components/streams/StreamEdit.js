import React from 'react';
import {connect} from 'react-redux';

import {fetchStream,editStream} from '../../actions/index';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit=(formValues)=>{
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render(){

        if(this.props.stream){
            return(
                <StreamForm initialValues={{title:this.props.stream.title, description:this.props.stream.description}}
                            onSubmit={this.onSubmit}>
                </StreamForm>
            )
        }else{
            return(<div>Loading...</div>)
        }
    }

};

const mapStateToProps=(state, ownProps)=>{
    return{
        stream:state.streams[ownProps.match.params.id],
        currentUserId:state.auth.userId
    };
}

export default connect(mapStateToProps,{fetchStream, editStream})(StreamEdit);