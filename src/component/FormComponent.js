import React from 'react';

function FormCompoent(props) {
    return (
        <main>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    name="firstName"
                    value={props.data.firstName}
                    placeholder="fisrt name"
                    onChange={props.handleChange}
                />
                <br />
                <input
                    type="text"
                    autoComplete="off"
                    name="lastName"
                    value={props.data.lastName}
                    placeholder="last name"
                    onChange={props.handleChange}
                />
                <br />
                <textarea
                    name="description"
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isEmployee"
                        checked={props.data.isEmployee}
                        onChange={props.handleChange}
                    /> Employee
          </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="sex"
                        value="male"
                        checked={props.data.sex === "male"}
                        onChange={props.handleChange}
                    /> Male
          </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="sex"
                        value="female"
                        checked={props.data.sex === "female"}
                        onChange={props.handleChange}
                    /> Female
          </label>
                <br />
                <label>
                    Department
          </label>
                <select name="dept" value={props.data.dept} onChange={props.handleChange} >
                    <option value="java">Java</option>
                    <option value="angular">Angular</option>
                    <option value="react">React</option>
                </select>
                <br />

                <input type="button" value="Save" />

                <h3>Name: {props.data.firstName} {props.data.lastName}</h3>
                <h3>Emp / Contact: {props.data.isEmployee ? "Emp" : ""}</h3>
                <h3>You are:  {props.data.sex ? props.data.sex : ""}</h3>
                <h3>Dept:  {props.data.dept}</h3>
            </form>
        </main>
    )
}

export default FormCompoent;