import React from 'react';
import FormComponent from './FormComponent.js';
import uniqueId from "lodash/uniqueId";
import "./FormStyles.css"

function mapForms(forms, id, values){
    return (
        forms.map(form => {
            if (form.id === id){
                return {...form, ...values};
            }
            else if (form.subForms) {
                return { ...form, subForms: mapForms(form.subForms, id, values)};
            }
            else {
                return form;
            }
        })
    );
}

function filterForms(forms, id) {
    return (
        forms.filter(form => {
            if(form.id === id) {
                return false;
            }
            if(form.subForms) {
                filterForms(form.subForms, id)
                return true;
            }
            if(form.id !== id) {
                return true;
            }
            return false;
        })
    );
}


class FormContainer extends React.Component {

    constructor(){
        super();
        this.state = {
        forms: []
        };
        this.addForm = this.addForm.bind(this);
        this.removeForm = this.removeForm.bind(this);
        this.updateForm = this.updateForm.bind(this);
    }

    addForm() {
        this.setState(prevState => ({
            forms: [...prevState.forms, { id: uniqueId() }]
        }), 
        ()=> {
            console.log(this.state.forms);
        })
        
    }

    removeForm(id) {
        this.setState(prevState => ({
                forms: filterForms(prevState.forms, id)
            }
        ));
    }

    updateForm(id, values) {
        this.setState(prevState => ({
            forms: mapForms(prevState.forms, id, values)
        }))
    }
    render(){
        const formComponents = this.state.forms.map(form => (
            <FormComponent
                key = {form.id}
                id = {form.id}
                removeForm = {this.removeForm}
                updateForm = {this.updateForm}
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