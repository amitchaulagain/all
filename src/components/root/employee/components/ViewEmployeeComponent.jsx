import React, {Component, useLayoutEffect, useState} from 'react'
import EmployeeService from './EmployeeService'
import AuthenticationService from "../../../../api/authentication/AuthenticationService";
import {useLocation, useNavigate} from "react-router-dom";

const ViewEmployeeComponent = ()=> {
    let emp={
        id:0,
        firstName:"",
        lastName:"",
        emailId:""
    }

    const [employee, setEmployee] = useState(emp);

    const location = useLocation();


    useLayoutEffect(() => {
        let id =location.state.id;

        try {
            EmployeeService.getEmployeeById(id).then(res=>{
                setEmployee(res.data)
            });
        } catch (err) {
            let error = "";
            if (err.response) {
                error += err.response;
            }

        }
    }, []);


        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name: </label>
                            <div> { employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name: </label>
                            <div> { employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email ID: </label>
                            <div> { employee.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )

};

export default ViewEmployeeComponent
