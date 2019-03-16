import React from 'react';
import FormComponent from './FormComponent.js';
import uniqueId from "lodash/uniqueId";
import "./FormStyles.css"

class FormContainer extends React.Component {

    constructor(){
        super();
        this.state = {
        forms: []
        };
        this.addForm = this.addForm.bind(this);
    }

    addForm() {
        this.setState(prevState => ({
            forms: [...prevState.forms, { id: uniqueId() }]
        }))
    }

    render(){
        const formComponents = this.state.forms.map(form => (
            <FormComponent
                key={form.id}
                id={form.id}
            />
        ))
        return(
            <div>
                <button className="addInput" onClick={this.addForm}> Add Input </button>
                {formComponents}
            </div>
        )
    }

}

export default FormContainer