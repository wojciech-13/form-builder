import React from 'react';
import FormComponent from './FormComponent.js';
import uniqueId from "lodash/uniqueId";
import "./FormStyles.css"

function filterForms(forms, id) {
    return (
    forms.filter(form => {
        if(form.id === id) {
            return false;
        }
        // if(form.subForms) {
        //     return { ...form, subInputs: filterForms(form.subInputs, id) };
        // }
        if(form.id !== id) {
            return true;
        }
        return false;
    })
    )
}


class FormContainer extends React.Component {

    constructor(){
        super();
        this.state = {
        forms: []
        };
        this.addForm = this.addForm.bind(this);
        this.removeForm = this.removeForm.bind(this);
    }

    addForm() {
        this.setState(prevState => ({
            forms: [...prevState.forms, { id: uniqueId() }]
        }))
    }

    removeForm(id) {
        this.setState(prevState => {
            return (
                {
                    forms: filterForms(prevState.forms, id)
                }
            );
        });
    }

    render(){
        const formComponents = this.state.forms.map(form => (
            <FormComponent
                key = {form.id}
                id = {form.id}
                removeForm = {this.removeForm}
            />
        ))
        return(
            <div>
                <button className="addForm" onClick={this.addForm}> Add Form </button>
                {formComponents}
            </div>
        )
    }

}

export default FormContainer