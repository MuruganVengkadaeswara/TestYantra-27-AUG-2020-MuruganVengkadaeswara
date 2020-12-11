import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Row,
  FormGroup,
  Col,
  InputGroup,
  Spinner,
  Alert,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import statelist from "../LoanApplication/statelist.json";
import emptypelist from "../LoanApplication/emptype.json";
import idtype from "../LoanApplication/idtype.json";
import axios from "axios";
import "../LoanApplication/loanapplication.css";

const LoanApplication = (props) => {
  const [typelist, setTypelist] = useState([]);
  const [appln, setAppln] = useState({ status: { status: "pndg" } });
  const [alert, setAlert] = useState();
  const [popttl, setpopttl] = useState("sample");
  const [popmsg, setpopmsg] = useState("sample");

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h1">{popttl}</Popover.Title>
      <Popover.Content>{popmsg}</Popover.Content>
    </Popover>
  );

  const validateApplication = (app) => {
    const onlyNumbers = /^[0-9]+$/;
    const onlyLetters = /^[A-Z]+$/i;
    const rePan = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    console.log(onlyNumbers.test(app.loanAmount));
    console.log(rePan.test(app.panNo));
    console.log(onlyLetters.test(app.firstName));
  };

  useEffect(() => {
    axios.get("http://localhost:8080/lms/user/loantypes").then((res) => {
      console.log(res);
      console.log(res.data.response);
      setTypelist(res.data.response);
    });
  }, []);

  useEffect(() => {}, [popttl]);

  const apply = (e) => {
    e.preventDefault();
    setAlert(<Spinner animation="border" variant="success" />);
    console.log(appln);
    validateApplication(appln);
    axios.post("http://localhost:8080/lms/user/apply", appln).then((res) => {
      console.log(res);
      console.log(res.data);
      if (res.data.error) {
        setAlert(
          <Alert variant="danger">Unable to apply ! please Try Later</Alert>
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setAlert(
          <Alert variant="success">
            Applied Successfully
            <br></br>
            Your Appication Id is {res.data.response.applicationId}
            <br></br>
            Kindly make note of it for future reference
          </Alert>
        );
        document.loanapplication.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  };

  return (
    <div className="card card-body  offset-md-2 col-md-8 mt-5  appblock">
      <div>{alert}</div>
      <Form name="loanapplication" onSubmit={apply}>
        <h1>Loan Details</h1>
        <hr />
        <Form.Group as={Row}>
          <Col>
            <Form.Label>Loan Type</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, loanTypeId: val };
                });
              }}
            >
              {typelist.map((type) => (
                <option key={type.loanTypeId} value={type.loanTypeId}>
                  {type.loanName} ({type.interestRate})%
                </option>
              ))}
            </Form.Control>
          </Col>
          <Col>
            <Form.Label>Loan Amount</Form.Label>
            <OverlayTrigger
              trigger="focus"
              placement="bottom"
              overlay={popover}
            >
              <Form.Control
                required
                onClick={() => {
                  setpopttl("Loan Amount");
                  setpopmsg("Enter a valid loan amount");
                }}
                onChange={(e) => {
                  const val = e.target.value;
                  let re = /^[0-9]+$/;
                  if (re.test(val)) {
                    setpopttl("Loan Amount");
                    setpopmsg(<h3>OK &#10004;</h3>);
                  } else {
                    setpopttl("LoanAmount");
                    setpopmsg("Please Provide a valid Amount");
                  }
                  setAppln((prevState) => {
                    return { ...prevState, loanAmount: val };
                  });
                }}
              ></Form.Control>
            </OverlayTrigger>
          </Col>
        </Form.Group>
        <br />
        <hr />
        <h1>Personal Details</h1>
        <br />
        <FormGroup>
          <Form.Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <OverlayTrigger
                trigger="focus"
                placement="bottom"
                overlay={popover}
              >
                <Form.Control
                  required
                  type="text"
                  onClick={() => {
                    setpopttl("First Name");
                    setpopmsg("Enter a valid Name");
                  }}
                  onChange={(e) => {
                    const val = e.target.value;
                    let re = /^[A-Z]+$/i;
                    if (re.test(val)) {
                      setpopmsg(<h3>OK &#10004;</h3>);
                    } else {
                      setpopmsg("Enter a valid name");
                    }
                    setAppln((prevState) => {
                      return { ...prevState, firstName: val };
                    });
                  }}
                ></Form.Control>
              </OverlayTrigger>
            </Col>
            <Col>
              <Form.Label>Middle Name</Form.Label>
              <OverlayTrigger
                trigger="focus"
                placement="bottom"
                overlay={popover}
              >
                <Form.Control
                  type="text"
                  onClick={() => {
                    setpopttl("First Name");
                    setpopmsg("Enter a valid Name");
                  }}
                  onChange={(e) => {
                    const val = e.target.value;
                    setAppln((prevState) => {
                      return { ...prevState, middleName: val };
                    });
                  }}
                ></Form.Control>
              </OverlayTrigger>
            </Col>
            <Col>
              <Form.Label> Last Name</Form.Label>
              <OverlayTrigger
                trigger="focus"
                placement="bottom"
                overlay={popover}
              >
                <Form.Control
                  type="text"
                  onClick={() => {
                    setpopttl("First Name");
                    setpopmsg("Enter a valid Name");
                  }}
                  onChange={(e) => {
                    const val = e.target.value;
                    setAppln((prevState) => {
                      return { ...prevState, lastName: val };
                    });
                  }}
                ></Form.Control>
              </OverlayTrigger>
            </Col>
          </Form.Row>
        </FormGroup>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
            <Form.Control
              className="col-md-5"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, email: val };
                });
              }}
            ></Form.Control>
          </OverlayTrigger>
        </Form.Group>

        <FormGroup>
          <Form.Label>mobile number</Form.Label>
          <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
            <Form.Control
              className="col-md-5"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, mobileNo: val };
                });
              }}
            ></Form.Control>
          </OverlayTrigger>
        </FormGroup>

        <FormGroup>
          <Form.Label>Gender</Form.Label>
          <InputGroup>
            <Form.Check
              inline
              label="Male"
              type="radio"
              id="gender"
              name="gndr"
              value="male"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, gender: val };
                });
              }}
            ></Form.Check>
            <Form.Check
              inline
              label="female"
              type="radio"
              id="gender"
              name="gndr"
              value="female"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, gender: val };
                });
              }}
            ></Form.Check>
            <Form.Check
              inline
              label="others"
              type="radio"
              id="gender"
              name="gndr"
              value="others"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, gender: val };
                });
              }}
            ></Form.Check>
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            inline
            type="date"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, dob: val };
              });
            }}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Address line 1</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, address1: val };
              });
            }}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Address line 2</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, address2: val };
              });
            }}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>State</Form.Label>
          <Form.Control
            as="select"
            defaultValue="choose"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, state: val };
              });
            }}
          >
            <option disabled>choose</option>
            {statelist.map((statename) => (
              <option key={statename.key} value={statename.key}>
                {statename.name}
              </option>
            ))}
          </Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>City</Form.Label>
          <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
            <Form.Control
              className="col-md-5"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, city: val };
                });
              }}
            ></Form.Control>
          </OverlayTrigger>
        </FormGroup>

        <FormGroup>
          <Form.Label>pincode</Form.Label>
          <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
            <Form.Control
              type="tel"
              className="col-md-5"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, pincode: val };
                });
              }}
            ></Form.Control>
          </OverlayTrigger>
        </FormGroup>

        <FormGroup>
          <Form.Label>Employement type</Form.Label>
          <Form.Control
            as="select"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, emplType: val };
              });
            }}
          >
            {emptypelist.map((emp) => (
              <option value={emp.key} key={emp.key}>
                {emp.name}
              </option>
            ))}
          </Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Job description</Form.Label>
          <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
            <Form.Control
              type="text"
              className="col-md-5"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, applicantJob: val };
                });
              }}
            ></Form.Control>
          </OverlayTrigger>
        </FormGroup>

        <FormGroup>
          <Form.Label>Company Name</Form.Label>
          <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
            <Form.Control
              type="text"
              className="col-md-5"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, compName: val };
                });
              }}
            ></Form.Control>
          </OverlayTrigger>
        </FormGroup>

        <FormGroup>
          <Form.Label>Salary</Form.Label>
          <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
            <Form.Control
              type="number"
              className="col-md-5"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, applicantSalary: val };
                });
              }}
            ></Form.Control>
          </OverlayTrigger>
        </FormGroup>

        <FormGroup>
          <Form.Label>Identity type</Form.Label>
          <Form.Control
            as="select"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, identityType: val };
              });
            }}
          >
            {idtype.map((idt) => (
              <option key={idt.key} value={idt.key}>
                {idt.name}
              </option>
            ))}
          </Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Identity Number</Form.Label>
          <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
            <Form.Control
              type="tel"
              className="col-md-5"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, identityNo: val };
                });
              }}
            ></Form.Control>
          </OverlayTrigger>
        </FormGroup>

        <FormGroup>
          <Form.Label>Pan Number</Form.Label>
          <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
            <Form.Control
              type="text"
              className="col-md-5"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, panNo: val };
                });
              }}
            ></Form.Control>
          </OverlayTrigger>
        </FormGroup>
        <Button
          type="submit"
          variant="success"
          className="offset-md-5"
          onClick={apply}
        >
          Apply
        </Button>
      </Form>
    </div>
  );
};

export default LoanApplication;
