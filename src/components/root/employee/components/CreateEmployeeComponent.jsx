import React, {Component, useLayoutEffect, useState} from 'react'
import EmployeeService from './EmployeeService';
import AuthenticationService from "../../../../api/authentication/AuthenticationService";
import {useNavigate} from "react-router-dom";

const CreateEmployeeComponent = () => {
    const navigate = useNavigate();


    /*   this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
       this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
       this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);*/

    const [employee, setEmployee] = useState([]);
    const [firstName, setFirstName] = useState([]);
    const [lastName, setLastName] = useState([]);
    const [email, setEmail] = useState([]);






    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let emp = {firstName: firstName, lastName: lastName, emailId: email};
        console.log('employee => ' + JSON.stringify(emp));

        // step 5

            EmployeeService.createEmployee(emp).then(res =>{
                navigate('/employees');

            });
    }
    
    const changeFirstNameHandler= (event) => {
        setFirstName(event.target.value);
    }

    const changeLastNameHandler= (event) => {
        setLastName(event.target.value);
    }

    const changeEmailHandler= (event) => {
        setEmail(event.target.value);
    }

    const cancel=()=>{
        this.props.history.push('/employees');
    }

    const getTitle=()=>{

            return <h3 className="text-center">Add Employee</h3>

    }
    return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={firstName} onChange={changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={lastName} onChange={changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={email} onChange={changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={saveOrUpdateEmployee} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
    )

};


export default CreateEmployeeComponent
