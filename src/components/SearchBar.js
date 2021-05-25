import React from 'react';

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state={term:''};
        this.onInputChange=this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({term:event.target.value});
    }

    render(){
        return(
        <div className="search-bar ui segment">
            <form className="ui form">
                <div className='field'>
                    <label className = "field">Video Search</label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange}></input>
                </div>

            </form>
        </div>
        );
    }

}

export default SearchBar;