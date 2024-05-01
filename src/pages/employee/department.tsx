import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

// components
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";

//dummy data
import { records as data } from "./departmentData";
import ActionCell from "./ActionCell";

const columns = [
  {
    Header: "#",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Department Name",
    accessor: "name",
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

const Advanced = () => {
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
        title={"Department Table"}
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
                  Add Department
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Department</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Department Name*</Form.Label>
                        <Form.Control type="text" autoFocus />
                      </Form.Group>
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

export default Advanced;
