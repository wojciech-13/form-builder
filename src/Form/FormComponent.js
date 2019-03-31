import React from 'react';
import "./FormStyles.css"
import uniqueId from "lodash/uniqueId";

class FormComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            type: "Yes / No",
            subForms: []
        };
        this.addSubForms = this.addSubForms.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            type: e.target.value
        })
        
        console.log(this.state.type1);
    }
    addSubForms() {
        const {updateForm, id} = this.props;
        this.setState(prevState => ({
            ...prevState,
            subForms: [...prevState.subForms, {id: uniqueId(), isSubForm: true, type: this.state.type}]
            }),
            () => {
                updateForm(id, {subForms: this.state.subForms});
            }
        );
    }

    render() {
        const {updateForm, removeForm, id, type} = this.props;
        const displayCondition = { display: this.props.isSubForm ? "block" : "none" }
        
        const subForms = this.state.subForms.map(subForm => {
            return (
                <FormComponent
                    key={subForm.id}
                    id={subForm.id}
                    updateForm = {updateForm}
                    removeForm = {removeForm}
                    isSubForm = {subForm.isSubForm}
                    type = {subForm.type}
                />
            )
        });
        const selectForRadioType = 
        <>
            <select className="inputs">
                <option>Equals</option>
            </select>
            <select style = {{display: "inline-block"}}>
                <option>Yes</option>
                <option>No</option>
            </select>
        </>
        const selectForTextType = 
        <>
            <select className="inputs">
                <option>Equals</option>
            </select>
            <input style={{display: "inline-block", width: "100px"}} type="text"></input>
        </>
        const selectForNumberType = 
        <>
            <select className="inputs">
                <option>Equals</option>
                <option>Greater Than</option>
                <option>Less Than</option>
            </select>
            <input style={{display: "inline-block"}} type="text"></input>
        </>
        

        return (
            <div>
                <div className="formContainer">
                    <div style = { displayCondition }>
                    <label> <span className="span">Condition</span>
                        {type === "Yes / No" ? selectForRadioType : null}
                        {type === "Number" ? selectForNumberType : null}
                        {type === "Text" ? selectForTextType : null}
                    </label>
                    </div>

                    <label> <span className="span">Question</span>
                        <input name="question" className="inputs" type="text"/>
                    </label>

                    <label> <span className="span">Type </span>
                        <select onChange={this.handleChange} className="inputs">
                            <option name="radio">Yes / No</option>
                            <option name="text">Text</option>
                            <option name="number">Number</option>
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