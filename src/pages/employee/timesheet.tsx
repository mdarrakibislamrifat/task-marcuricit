import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

// components
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";

//dummy data
import { records as data } from "./timesheetData";
import ActionCell from "./ActionCell";

const columns = [
  {
    Header: "Name",
    accessor: "id",
    sort: true,
    Cell: ({ row }: { row: { original: { name: string; image: string } } }) => (
      <div className="d-flex align-items-center">
        <img
          src={row.original.image}
          alt="Profile"
          className="mr-2"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            marginRight: "5px",
          }}
        />
        <span>{row.original.name}</span>
      </div>
    ),
  },
  {
    Header: "Date",
    accessor: "date",
    sort: true,
  },
  {
    Header: "Projects",
    accessor: "project",
    sort: true,
  },
  {
    Header: "Assigned Hours",
    accessor: "assignHour",
    sort: true,
  },
  {
    Header: "Hours",
    accessor: "hour",
    sort: true,
  },
  {
    Header: "Description",
    accessor: "description",
    sort: true,
  },

  {
    Header: "Action",
    accessor: "action",
    Cell: ({ row }: { row: number }) => <ActionCell row={row} />,
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

const Timesheet: React.FC = () => {
  const [show, setShow] = useState(false);
  const [deadline, setDeadline] = useState("5 May 2023");
  const [totalHours, setTotalHours] = useState(100);
  const [remainingHours, setRemainingHours] = useState(60);

  //  change date and hours

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        title={"Timesheet Table"}
      />

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

                <Button variant="primary" onClick={handleShow}>
                  Add Today Work
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Today Work Details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlSelect1"
                      >
                        <Form.Label>Select Department</Form.Label>
                        <Form.Select defaultValue="">
                          <option value="0">Office Management</option>
                          <option value="1">Project Management</option>
                          <option value="2">Video Calling App</option>
                          <option value="3">Hospital Administration</option>
                        </Form.Select>
                      </Form.Group>

                      {/* deadline,total hours and remaining hours */}
                      <Row>
                        <Col>
                          <Form.Group className="mb-3" controlId="deadline">
                            <Form.Label>Deadline*</Form.Label>
                            <Form.Control
                              type="text"
                              value={deadline}
                              readOnly
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3" controlId="totalHours">
                            <Form.Label>Total Hours*</Form.Label>
                            <Form.Control
                              type="number"
                              min="0"
                              value={totalHours}
                              readOnly
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group
                            className="mb-3"
                            controlId="remainingHours"
                          >
                            <Form.Label>Remaining Hours*</Form.Label>
                            <Form.Control
                              type="number"
                              min="0"
                              value={remainingHours}
                              readOnly
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      {/* date and hours */}
                      <Row>
                        <Col>
                          <Form.Group className="mb-3" controlId="deadline">
                            <Form.Label>Date*</Form.Label>
                            <Form.Control type="date" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3" controlId="totalHours">
                            <Form.Label>Hours*</Form.Label>
                            <Form.Control type="number" min="0" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer className="justify-content-center">
                    <Button variant="primary" onClick={handleClose}>
                      Submit
                    </Button>
                  </Modal.Footer>
                </Modal>
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

export default Timesheet;
