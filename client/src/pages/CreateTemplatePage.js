import React from "react";
import PageLayout from "../components/PageLayout";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import CustomDropDown from "../components/CustomDropDown";

const CreateTemplatePage = () => {
  const list = ["Education", "Quiz", "Other"];
  return (
    <PageLayout>
      <Row className="d-flex py-3 justify-content-center align-content-start flex-grow-1">
        <Col xs={12} lg={5}>
          <Form>
            <Form.Group className="my-2">
              <Form.Label>Title:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="my-2">
              <Form.Label>Decription:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="my-2">
              <Form.Label>Image url:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <CustomDropDown variant="secondary" list={list} />
          </Form>
        </Col>
      </Row>
    </PageLayout>
  );
};

export default CreateTemplatePage;
