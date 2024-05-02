import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { Row, Col, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ActionCell from "./ActionCell";
import Table from "../../components/Table";

import { records as data } from "./overtimeData";

const columns = [
  {
    Header: "#",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Name",
    accessor: "name",
    sort: true,
    Cell: ({
      row,
    }: {
      row: { original: { name: string; firstImage: string } };
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
        <span>{row.original.name}</span>
      </div>
    ),
  },
  {
    Header: "OT Date",
    accessor: "otDate",
    sort: true,
  },
  {
    Header: "OT Hours",
    accessor: "otHour",
    sort: true,
  },
  {
    Header: "OT Type",
    accessor: "otType",
    sort: true,
  },
  {
    Header: "Description",
    accessor: "description",
    sort: true,
  },
  {
    Header: "Status",
    accessor: "status",
    sort: true,
    Cell: () => <StatusButton />,
  },
  {
    Header: "Approved By",
    accessor: "approvedBy",
    sort: true,
    Cell: ({
      row,
    }: {
      row: { original: { approvedBy: string; image: string } };
    }) => (
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
        <span>{row.original.approvedBy}</span>
      </div>
    ),
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

const Overtime: React.FC = () => {
  const [show, setShow] = useState(false);

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
        title={"Overtime Table"}
      />
      {/* overtime employee,overtime hours section ,pending request */}

      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            padding: "10px",
            textAlign: "center",
            width: "20%",
          }}
        >
          <h4>Overtime Employee</h4>
          <p>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>12</span>{" "}
            <small style={{ fontSize: "12px", fontWeight: "bold" }}>
              this month
            </small>
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            padding: "10px",
            textAlign: "center",
            width: "20%",
          }}
        >
          <h4>Overtime Hours</h4>
          <p>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>118</span>{" "}
            <small style={{ fontSize: "12px", fontWeight: "bold" }}>
              this month
            </small>
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            padding: "10px",
            textAlign: "center",
            width: "20%",
          }}
        >
          <h4>Pending Request</h4>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>23</p>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            padding: "10px",
            textAlign: "center",
            width: "20%",
          }}
        >
          <h4>Rejected</h4>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>5</p>
        </div>
      </div>

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
                  Add Overtime
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Overtime</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlSelect1"
                      >
                        <Form.Label>Select Employee*</Form.Label>
                        <Form.Select defaultValue="">
                          <option value="" disabled>
                            Select
                          </option>
                          <option value="0">John Doe</option>
                          <option value="1">Richard Miles</option>
                          <option value="2">John Smith</option>
                        </Form.Select>
                      </Form.Group>

                      <Row>
                        <Col>
                          <Form.Group className="mb-3" controlId="deadline">
                            <Form.Label>Overtime Date*</Form.Label>
                            <Form.Control type="date" />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Form.Group className="mb-3" controlId="deadline">
                            <Form.Label>Overtime Hours*</Form.Label>
                            <Form.Control type="number" />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Form.Group className="mb-3" controlId="deadline">
                            <Form.Label>Description*</Form.Label>
                            <Form.Control
                              as="textarea"
                              style={{ width: "100%", height: "100px" }}
                            />
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

const StatusButton: React.FC = () => {
  return (
    <button style={{ borderRadius: "10px" }} className="btn btn-primary">
      New
    </button>
  );
};

export default Overtime;
