import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends React.Component {

    renderError(meta){
        if(meta.touched && meta.error){
            return(
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
            )
        }
    };

    renderInput = (formProps)=>{

        const className=`field ${formProps.meta.error&&formProps.meta.touched?"error":""}`

        return(
            <div className={className}>
                <label>{formProps.label}</label>
                 {/* <input onChange={formProps.input.onChange} value={formProps.input.value}/> -> equivalent code below */}
                <input {...formProps.input} autoComplete="off"/>
                {this.renderError(formProps.meta)}
                {/*meta.error - contains the error defined for the respective Field in the "validate" function*/}
            </div>
        )
    };

    onSubmit(formValues){
        console.log(formValues);
    }

    render(){

        return(
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Enter Title"/>
                    <Field name="description" component={this.renderInput} label = "Description"/>
                    <button className="ui button primary">Submit</button>
                </form>
       );
    }

};

const validate = (formValues)=>{

    const errors={};

    if(!formValues.title){
        errors.title="You must enter a title";
    }

    if(!formValues.description){
        errors.description="You must enter a description";
    }

    return errors;
}

export default reduxForm({
    form:'streamCreate',
    validate:validate
})(StreamCreate);