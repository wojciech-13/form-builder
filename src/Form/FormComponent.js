import React from 'react';
import "./FormStyles.css"


function FormComponent(props){


    return (
        <div className="formContainer">

            <div>
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
                <button name="addSubInput">Add Sub-Input</button>
                <button>Delete</button>
            </div>

        </div>

    );
}

export default FormComponent