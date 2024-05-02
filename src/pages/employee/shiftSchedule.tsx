import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { Row, Col, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Table from "../../components/Table";

import { records as data } from "./shiftScheduleData";
import { Link } from "react-router-dom";

const columns = [
  {
    Header: "Schedule Shift",
    accessor: "schedule",
    sort: true,
    Cell: ({
      row,
    }: {
      row: { original: { schedule: string; firstImage: string } };
    }) => (
      <div className="d-flex align-items-center">
        <img
          src={row.original.firstImage}
          alt="Profile"
          className="mr-2"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            marginRight: "5px",
          }}
        />
        <span>{row.original.schedule}</span>
      </div>
    ),
  },
  {
    Header: "Fri 21",
    accessor: "fri21",
    sort: true,
  },
  {
    Header: "Sat 22",
    accessor: "sat22",
    sort: true,
  },
  {
    Header: "Sun 23",
    accessor: "sun23",
    sort: true,
  },
  {
    Header: "Mon 24",
    accessor: "mon 24",
    sort: true,
  },
  {
    Header: "Tue 25",
    accessor: "tue25",
    sort: true,
  },

  {
    Header: "Wed 26",
    accessor: "wed26",
    sort: true,
  },
];

const sizePerPageList = [
  {
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: data.length,
  },
];

const ShiftSchedule: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [acceptExtraHours, setAcceptExtraHours] = useState(false);
  const [publish, setPublish] = useState(false);

  const handleAcceptExtraHoursChange = () => {
    setAcceptExtraHours(!acceptExtraHours);
  };

  const handlePublishChange = () => {
    setPublish(!publish);
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Tables", path: "/features/tables/advanced" },
          {
            label: "Advanced Tables",
            path: "/features/tables/advanced",
            active: true,
          },
        ]}
        title={"Shift & Schedule Table"}
      />

      <Row>
        <Col xs={12} className="text-end mb-3">
          <Button variant="primary" onClick={handleShow}>
            Assign Shifts
          </Button>{" "}
          <Link to="/employee/shift/shifts">
            <Button variant="primary">Shifts</Button>
          </Link>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="employee">
                <Form.Label>Department*</Form.Label>
                <Form.Select defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="0">Finance</option>
                  <option value="1">Finance & Management</option>
                  <option value="2">Hr Finance</option>
                  <option value="2">ITech</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="employee">
                <Form.Label>Employee Name*</Form.Label>
                <Form.Select defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="0">Richard Miles</option>
                  <option value="1">John Smith</option>
                  <option value="2">Wilmer Del</option>
                  <option value="2">John Doe</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="deadline">
                <Form.Label>Date*</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="employee">
                <Form.Label>Shifts*</Form.Label>
                <Form.Select defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="0">10'o clock Shift</option>
                  <option value="1">10:30 Shift</option>
                  <option value="2">Daily Shift</option>
                  <option value="2">New Shift</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="deadline">
                <Form.Label>Min Start Time*</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="deadline">
                <Form.Label>Start Time*</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="deadline">
                <Form.Label>Max Start Time*</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="deadline">
                <Form.Label>Min End Time*</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="deadline">
                <Form.Label>End Time*</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="deadline">
                <Form.Label>Max End Time*</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="deadline">
                <Form.Label>Break Time*</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="acceptExtraHours">
                <Form.Label>Accept Extra Hours</Form.Label>
                <Form.Check
                  type="switch"
                  id="acceptExtraHoursSwitch"
                  label=""
                  checked={acceptExtraHours}
                  onChange={handleAcceptExtraHoursChange}
                />
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="publish">
                <Form.Label>Publish</Form.Label>
                <Form.Check
                  type="switch"
                  id="publishSwitch"
                  label=""
                  checked={publish}
                  onChange={handlePublishChange}
                />
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="justify-content-center">
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Employee*</Form.Label>
            <Form.Control type="text" autoFocus />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
            <Form.Label>Department</Form.Label>
            <Form.Select defaultValue="">
              <option value="0">Select</option>
              <option value="1">All Department</option>
              <option value="2">Finance</option>
              <option value="3">Finance & Management</option>
              <option value="3">HR & Finance</option>
              <option value="3">ITech</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="deadline">
            <Form.Label>From</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="deadline">
            <Form.Label>To</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Col>
        <Col xs="auto" className="d-flex align-items-center">
          <button className="btn btn-primary">Search</button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h4 className="header-title">Search</h4>
                  <p className="text-muted fs-14 mb-0">
                    A Table allowing search
                  </p>
                </div>
              </div>
              <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ShiftSchedule;
