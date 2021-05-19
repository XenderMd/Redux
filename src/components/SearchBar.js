import React from 'react';

class SearchBar extends React.Component {

    constructor(props){
        super(props);

        this.state={term:""};
    }


    onInputChange(event){
        this.setState({term:event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={event => this.onFormSubmit(event)}>
                    <div className='field'>
                        <label>Image Search</label>
                        <input type="text" onChange={event=>this.onInputChange(event)} value={this.state.term}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;