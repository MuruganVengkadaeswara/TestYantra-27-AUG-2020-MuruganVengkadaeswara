import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ClientsAll = (props) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:8080/lms/employee/clients`).then((res) => {
      console.log(res.data.response);
      setClients(res.data.response);
      console.log(clients);
    });
  }, []);

  return (
    <div
      className="card card-body col-md-8 offset-md-2 mt-5"
      style={{ fontFamily: "courier new" }}
    >
      <h3>
        <strong>All clients :</strong>
      </h3>
      <Table striped responsive hover bordered>
        <thead>
          <th>ClientID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Status</th>
        </thead>
        <tbody>
          {clients.map((client) => {
            return (
              <tr>
                <td>{client.clientId}</td>
                <td>
                  {client.firstName} {client.lastName}
                </td>
                <td>
                  {client.address1}, <br></br>
                  {client.address2}, <br></br>
                  {client.state}- {client.pincode}
                </td>
                <td>{client.clientStatus}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ClientsAll;
