import React from 'react';
import "./FormStyles.css"
import uniqueId from "lodash/uniqueId";

class FormComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            subForms: []
        };
        this.addSubForms = this.addSubForms.bind(this);

    }

    addSubForms() {
        this.setState(prevState => {
            return   (
                {
                ...prevState,
                subForms: [...prevState.subForms, {id: uniqueId(), isSubForm: true}]
                }
            );
        });
    }

    render() {
        const subForms = this.state.subForms.map(subForm => {
            return (
                <FormComponent
                    key={subForm.id}
                    id={subForm.id}
                    isSubForm = {subForm.isSubForm}
                />
            )
        })
        const {removeForm, id} = this.props;
        const displayCondition = { display: this.props.isSubForm ? "block" : "none" }

        return (
            <div>
                <div className="formContainer">
                    id = {id}  {/*  pomocnicze id*/}
                    <div style = { displayCondition }>
                    <label> <span className="span">Condition</span>
                        <select className="inputs" ></select>
                    </label>
                    </div>

                    <label> <span className="span">Question</span>
                        <input name="question" className="inputs" type="text"/>
                    </label>

                    <label> <span className="span">Type </span>
                        <select className="inputs">
                            <option>Yes / No</option>
                            <option>Text</option>
                            <option>Number</option>
                        </select>
                    </label>

                    <div className="buttonsContainer">
                        <button onClick={this.addSubForms}>Add Sub-Form</button>
                        <button onClick={() => removeForm(id)}>Delete</button>
                    </div>
                </div>

                <div className="subFormContainer">
                {subForms}
                </div>
            </div>

        );
    }
}

export default FormComponent