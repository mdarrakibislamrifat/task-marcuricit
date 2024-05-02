import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

// components
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";

//dummy data
import { records as data } from "./shiftListData";
import ActionCell from "./ActionCell";

const columns = [
  {
    Header: "#",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Shift Name",
    accessor: "shiftName",
    sort: true,
  },
  {
    Header: "Min Start Time",
    accessor: "minStart",
    sort: true,
  },
  {
    Header: "Start Time",
    accessor: "startTime",
    sort: true,
  },
  {
    Header: "Max Start Time",
    accessor: "maxStart",
    sort: true,
  },
  {
    Header: "Min End Time",
    accessor: "minEnd",
    sort: true,
  },
  {
    Header: "End Time",
    accessor: "endTime",
    sort: true,
  },
  {
    Header: "Max End Time",
    accessor: "maxEnd",
    sort: true,
  },
  {
    Header: "Break Time",
    accessor: "breakTime",
    sort: true,
  },
  {
    Header: "Status",
    accessor: "status",
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

const ShiftList: React.FC = () => {
  const [show, setShow] = useState(false);
  const [showShift, setShowShift] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowShift = () => setShowShift(true);
  const handleCloseShift = () => setShowShift(false);

  const [acceptExtraHours, setAcceptExtraHours] = useState(false);
  const [publish, setPublish] = useState(false);
  const [publishIndefinite, setPublishIndefinite] = useState(false);

  const handleAcceptExtraHoursChange = () => {
    setAcceptExtraHours(!acceptExtraHours);
  };

  const handlePublishChange = () => {
    setPublish(!publish);
  };
  const handlePublishChangefinite = () => {
    setPublishIndefinite(!publishIndefinite);
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
        title={"Shift List"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={12} className="text-end mb-3">
                  <Button variant="primary" onClick={handleShow}>
                    Assign Shifts
                  </Button>{" "}
                  <Button variant="primary" onClick={handleShowShift}>
                    Add Shifts
                  </Button>
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

              {/*show shift modal  */}

              <Modal show={showShift} onHide={handleCloseShift}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Shift</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="employee">
                        <Form.Label>Shift Name*</Form.Label>

                        <Form.Control type="text" />
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
                        <Form.Label>Break Time (In Minutes)*</Form.Label>
                        <Form.Control type="time" />
                      </Form.Group>
                    </Col>
                    <Col></Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="publish">
                        <Form.Label>Recurring Shift</Form.Label>
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
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="employee">
                        <Form.Label>Repeat Every</Form.Label>
                        <Form.Select defaultValue="">
                          <option value="0">1</option>
                          <option value="1">2</option>
                          <option value="2">3</option>
                          <option value="2">4</option>
                          <option value="2">5</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="employee">
                        <Form.Label>End On*</Form.Label>

                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Col>
                        <Form.Group className="mb-3" controlId="publish">
                          <Form.Label>Indefinite</Form.Label>
                          <Form.Check
                            type="switch"
                            id="publishSwitch"
                            label=""
                            checked={publishIndefinite}
                            onChange={handlePublishChangefinite}
                          />
                        </Form.Group>
                      </Col>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="employee">
                        <Form.Label>Add Tag</Form.Label>

                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="employee">
                        <Form.Label>Add Note</Form.Label>

                        <Form.Control type="textarea" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                  <Button variant="primary" onClick={handleClose}>
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>

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

export default ShiftList;
