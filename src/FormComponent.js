import React from 'react';
import "./FormComponent.css"

function FormComponent(props){

    const conditionDisplay = props.condition ? "inline-block" : "none";
    return (
        <div className="formContainer">

            <label> <span className="span">Condition</span>
                <select style={{display: conditionDisplay}} className="inputs" ></select>
            </label>

            <label> <span className="span">Question</span>
                <input className="inputs" type="text"/>
            </label>

            <label> <span className="span">Type </span>
                <select className="inputs">
                    <option>Yes / No</option>
                    <option>Text</option>
                    <option>Number</option>
                </select>
            </label>

            <div className="buttonsContainer">
                <button>Add Sub-Input</button>
                <button>Delete</button>
            </div>

        </div>

    );
}

export default FormComponent