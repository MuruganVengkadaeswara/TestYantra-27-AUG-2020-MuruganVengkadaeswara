import React, { useEffect, useState } from "react";
import { Form, Button, Table, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import "../UpdateRole/updaterole.css";
import { Redirect } from "react-router";
import ReactDOMServer from "react-dom/server";

const UpdateRole = (props) => {
  const [roles, setRoles] = useState([]);
  const [alert, setAlert] = useState();
  const [uprole, setuprole] = useState({});

  useEffect(
    () => {
      axios.get("http://localhost:8080/lms/admin/roles").then((res) => {
        console.log(res.data);
        if (!res.data.error) {
          setRoles(res.data.response);
        }
        console.log(roles);
      });
    },
    [],
    [roles]
  );

  const edit = (id) => {
    let txt = document.getElementById(`${id}_rd`).innerText;
    document.getElementById(
      `${id}_rd`
    ).innerHTML = ReactDOMServer.renderToString(
      <Form.Control
        id={`${id}_in`}
        type="text"
        defaultValue={txt}
      ></Form.Control>
    );
  };

  const update = (id) => {
    let obj;
    if (document.getElementById(`${id}_in`) != null) {
      setAlert(<Spinner animation="border" variant="success" />);
      console.log(document.getElementById(`${id}_in`).value);
      obj = {
        rid: document.getElementById(`${id}_rid`).innerText,
        roleDescription: document.getElementById(`${id}_in`).value,
        roleId: document.getElementById(`${id}_roleid`).innerText,
      };
      console.log(obj);
      setuprole(obj);
      console.log(uprole);
      axios
        .put("http://localhost:8080/lms/admin/manage-roles", obj)
        .then((res) => {
          console.log(res.data);
          if (res.data.error) {
            setAlert(<Alert variant="danger">Unable to update Role</Alert>);
          } else {
            setAlert(
              <Alert variant="success">Role updated successfully</Alert>
            );
            window.location.reload();
          }
        });
    }
  };

  return (
    <div className="col-md-6 mt-5 offset-md-3 card card-body updblock">
      {alert}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th style={{ display: "none" }}>Rid</th>
            <th>RoleId</th>
            <th>Role Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr id={`${role.roleId}_tr`}>
              <td id={`${role.rid}_rid`} style={{ display: "none" }}>
                {role.rid}
              </td>
              <td id={`${role.roleId}_roleid`}>{role.roleId}</td>
              <td id={`${role.roleId}_rd`}>{role.roleDescription}</td>
              <td>
                <span>
                  <Button
                    id={role.roleId}
                    onClick={() => edit(role.roleId)}
                    variant="danger"
                  >
                    Edit
                  </Button>
                  <Button
                    id={role.roleId}
                    onClick={() => update(role.roleId)}
                    variant="info"
                    className="ml-5"
                  >
                    update
                  </Button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UpdateRole;
