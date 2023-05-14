import React, {Component, useLayoutEffect, useState} from 'react'
import EmployeeService from './EmployeeService'
import {useNavigate} from "react-router-dom";
import Presentation from "../../home/Presentation";
import Cover from "../../home/Cover";
import BackgroundCover from "../../home/BackgroundCover";
import Footer from "../../fragments/footer/Footer";
import style from "../../../../css/Footer.module.css";
import UserDataService from "../../../../api/users/UserDataService";
import AuthenticationService from "../../../../api/authentication/AuthenticationService";
import axios from "../../../../api/customAxiosConfig/CustomAxiosConfig";

const ListEmployeeComponent = () => {


    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();



    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then( res => {
           // this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    const viewEmployee=(id) =>{
        this.props.history.push(`/view-employee/${id}`);
    }
    const editEmployee=(id) =>{
        this.props.history.push(`/add-employee/${id}`);
    }

   /* componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }*/

   const addEmployee=() =>{
        navigate('/add-employee/_add');
    }

    useLayoutEffect(() => {
        let username = AuthenticationService.getLoggedInUser();

        try {
            EmployeeService.getEmployees().then(res=>{
                setEmployees(res.data)
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
            <h2 className="text-center">Employees List</h2>
            <div className = "row">
                <button className="btn btn-primary" onClick={addEmployee}> Add Employee</button>
            </div>
            <br></br>
            <div className = "row">
                <table className = "table table-striped table-bordered">

                    <thead>
                    <tr>
                        <th> Employee First Name</th>
                        <th> Employee Last Name</th>
                        <th> Employee Email Id</th>
                        <th> Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key = {employee.id}>
                                    <td> { employee.firstName} </td>
                                    <td> {employee.lastName}</td>
                                    <td> {employee.emailId}</td>
                                    <td>
                                        <button onClick={ () => editEmployee(employee.id)} className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => viewEmployee(employee.id)} className="btn btn-info">View </button>
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>

            </div>

        </div>


    );
};

export default ListEmployeeComponent
