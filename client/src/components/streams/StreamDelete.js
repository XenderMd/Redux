import React from 'react';
import { connect } from 'react-redux';

import { fetchStream, deleteStream } from '../../actions';
import history from "../../history";
import Modal from '../Modal';

class StreamDelete extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions = ()=>{
        const {id}=this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={()=>{this.props.deleteStream(id)}} className="ui button negative">Delete</button>
                <button onClick={()=>{history.push('/')}} className="ui button">Cancel</button>
            </React.Fragment>
        )
    } 

    render(){
        if(this.props.stream){
            return(
                <Modal  title={"Delete stream"} 
                        content={`Are you sure you want to delete this stream: ${this.props.stream?this.props.stream.title:""}`}
                        actions = {this.renderActions()}
                        onDismiss={()=>{history.push('/')}}
                />
            )
        }else{
            return(
                <Modal  title={"Delete stream"} 
                        onDismiss={()=>{history.push('/')}}
                />
            )
        }
    }

};

const mapStateToProps = (state, ownProps)=>{

    return {
        stream:state.streams[ownProps.match.params.id],
        currentUserId:state.auth.userId
    }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);