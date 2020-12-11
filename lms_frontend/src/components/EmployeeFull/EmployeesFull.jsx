import Axios from "axios";
import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";

class EmployeesFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emps: [],
    };
  }

  fetchAllEmployee = () => {
    Axios.get(
      `http://localhost:8080/lms/admin/employee/${this.props.location.id}`
    ).then((res) => {
      let arr = res.data.response;
      this.setState((prevState) => {
        return { ...prevState, emps: arr };
      });
      console.log(this.state.emps);
    });
  };

  componentDidMount() {
    console.log(this.props.location.id);
    this.fetchAllEmployee();
  }

  //   shouldComponentUpdate(){
  //     //   return false;
  //   };

  updateEmp = (id) => {
    console.log(id);
  };

  deleteEmp = (id) => {
    console.log(id);
        // setAlert(<Spinner variant="danger" animation="border"/>)
    // Axios.delete(`http://localhost:8080/lms/admin/employee/${id}`).
    // then((res)=>{
    //   console.log(res.data);
    //   if(res.data.error){
    //     setAlert(<Alert variant="danger">Unable to delete Employee</Alert>)
    //   }
    //   else{
    //     setAlert(<Alert variant="success">Employee Deleted Successfully</Alert>)
    //   }
    // })
  };

  render() {
    return (
      <div className="col-md-8 offset-md-2 card card-body mt-5 empsblock">
        {alert}
        <h3>
          <strong>Search Results:</strong>
        </h3>
        <Table striped hover responsive bordered>
          <thead>
            <th>EmpId</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Status</th>
            <th>update</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {this.state.emps.map((emp) => (
              <tr>
                <td>{emp.employeeId}</td>
                <td>
                  {emp.firstname} {emp.lastname}
                </td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>{emp.employeeStatus}</td>
                <td>
                  <Button
                    variant="info"
                    id={emp.employeeId}
                    onClick={()=>this.updateEmp(emp.employeeId)}
                  >
                    <strong>update</strong>
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    className="ml-4"
                    id={emp.employeeId}
                    onClick={()=>this.deleteEmp(emp.employeeId)}
                  >
                    <strong>Delete</strong>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {this.props.id}
        {this.props.location.search}
      </div>
    );
  }
}

export default EmployeesFull;
