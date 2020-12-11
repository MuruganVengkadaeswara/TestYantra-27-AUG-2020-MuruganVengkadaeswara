import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Form, Spinner, Table } from "react-bootstrap";
import "../UpdateClient/clientfull.css";
import statelist from "../AddClient/statelist.json";

const ClientFull = (props) => {
  const [client, setClient] = useState({});
  const [alert, setAlert] = useState();

  useEffect(() => {
    setAlert();
    console.log(props.location.id);
    Axios.get(
      `http://localhost:8080/lms/employee/clients/${props.location.id}`
    ).then((res) => {
      console.log(res.data);
      if (!res.data.error) {
        setClient(res.data.response);
      }
    });
  }, [props.location.id]);

  const deleteClient = (id) => {
    setAlert(<Spinner animation="border" variant="danger" />);
    console.log(id);
    Axios.delete(`http://localhost:8080/lms/employee/clients/${id}`).then(
      (res) => {
        console.log(res.data);
        if (res.data.error) {
          setAlert(
            <Alert variant="danger">
              unable to Delete client ! please try Later
            </Alert>
          );
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          setAlert(
            <Alert variant="success">
              client Deleted successfully Redirecting ....
              <Spinner variant="info" animation="grow" />
            </Alert>
          );
          window.scrollTo({ top: 0, behavior: "smooth" });
          setTimeout(() => {
            props.history.push("/employee/clients");
          }, 5000);
        }
      }
    );
  };

  const updateClient = () => {
    console.log(client);
    setAlert(<Spinner variant="success" animation="border" />);
    Axios.put(`http://localhost:8080/lms/employee/client`, client).then(
      (res) => {
        if (res.data.error) {
          setAlert(
            <Alert variant="danger">
              Unable to update client ! please try after some time
            </Alert>
          );
        } else {
          setAlert(
            <Alert variant="success">
              Client Updated successfully... Redirecting &nbsp;
              <Spinner variant="info" animation="grow" />
            </Alert>
          );
          window.scrollTo({ top: 0, behavior: "smooth" });
          setTimeout(() => {
            props.history.push("/employee/clients");
          }, 5000);
        }
      }
    );
  };

  if (!Object.keys(client).length == 0) {
    return (
      <div>
        <div className="col-md-6 card card-body offset-md-3 mt-5 block">
          {alert}
          <hr></hr>
          <Table striped hover responsive bordered>
            <thead>
              <th>Field</th>
              <th>Value</th>
            </thead>
            <tbody>
              {Object.keys(client).map((key, index) => {
                if (key == "clientId") {
                  return (
                    <tr>
                      <td>{key}</td>
                      <td>{client[key]}</td>
                    </tr>
                  );
                } else if (key == "state") {
                  return (
                    <tr>
                      <td>{key}</td>
                      <td>
                        <Form.Control
                          value={client[key]}
                          as="select"
                          onChange={(e) => {
                            let fld = key;
                            const val = e.target.value;
                            setClient((prevstate) => {
                              return { ...prevstate, [fld]: val };
                            });
                          }}
                        >
                          {statelist.map((st) => (
                            <option value={st.key}>{st.name}</option>
                          ))}
                        </Form.Control>
                      </td>
                    </tr>
                  );
                } else if (key == "clientStatus") {
                  return (
                    <tr>
                      <td>{key}</td>
                      <td>
                        <Form.Control
                          value={client[key]}
                          as="select"
                          onChange={(e) => {
                            let fld = key;
                            const val = e.target.value;
                            setClient((prevstate) => {
                              return { ...prevstate, [fld]: val };
                            });
                          }}
                        >
                          <option disabled>Select</option>
                          <option value="ACTIVE">ACTIVE</option>
                          <option value="INACTIVE">INACTIVE</option>
                        </Form.Control>
                      </td>
                    </tr>
                  );
                } else {
                  return (
                    <tr>
                      <td>{key}</td>
                      <td>
                        <Form.Control
                          type="text"
                          value={client[key]}
                          onChange={(e) => {
                            let fld = key;
                            const val = e.target.value;
                            setClient((prevstate) => {
                              return { ...prevstate, [fld]: val };
                            });
                          }}
                        ></Form.Control>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </Table>
          <span className="offset-md-4">
            <Button
              id={client.clientId}
              onClick={updateClient}
              variant="success"
            >
              <strong>Update</strong>
            </Button>
            <Button
              id={client.clientId}
              onClick={() => deleteClient(client.clientId)}
              className="ml-5"
              variant="danger"
            >
              <strong>Delete</strong>
            </Button>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="col-md-6 offset-md-3 mt-5"
        style={{ fontFamily: "courier new", textAlign: "center" }}
      >
        <h1>Client Not Found</h1>
      </div>
    );
  }
};

export default ClientFull;
