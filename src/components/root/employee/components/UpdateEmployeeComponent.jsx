import React, {Component, useLayoutEffect, useState} from 'react'
import EmployeeService from './EmployeeService';
import {useLocation, useNavigate} from "react-router-dom";
import AuthenticationService from "../../../../api/authentication/AuthenticationService";

const UpdateEmployeeComponent =()=> {
    const navigate = useNavigate();
    const location = useLocation();



    /*   this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
       this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
       this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);*/
    const [id, setId] = useState([]);

    let emp={
        id:0,
        firstName:"",
        lastName:"",
        emailId:""
    }
    const [employee, setEmployee] = useState(emp);

    /*let emp={
        "id":"",
        firstName:"",
        lastName:"",
        emailId:"",

    }*/



    useLayoutEffect(() => {
         let id =location.state.id;
        console.log("employee id :"+ id)

        EmployeeService.getEmployeeById(id).then( (res) =>{

            setEmployee(res.data);

        });
    }, []);
    const updateEmployee = (e) => {
        e.preventDefault();
         console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, location.state.id).then( res => {
            navigate('/employees');
        });
    }

    const changeFirstNameHandler= (event) => {
        employee.firstName=event.target.value;
        setEmployee(employee);

    }

    const changeLastNameHandler= (event) => {
        employee.lastName=event.target.value;
        setEmployee(employee);
    }

    const changeEmailHandler= (event) => {
        employee.lastName=event.target.value;
        setEmployee(employee);
    }

    const cancel=()=>{
        navigate('/employees');
    }

        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                defaultValue={employee.firstName} onChange={changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control"
                                                   defaultValue={employee.lastName} onChange={changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control"
                                                   defaultValue={employee.emailId} onChange={changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )

};

export default UpdateEmployeeComponent
