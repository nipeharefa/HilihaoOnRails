import React, { Fragment } from "react";
import { Row, Col, Form } from "antd";
import InputText from "../../components/formItem/text";

const columnConfig = {
  md: {
    span: 8,
    offset: 8
  },
  sm: {
    span: 24
  }
};

const emailInputProps = {
  placeholder: "Alamat Email"
};
const LoginForm = () => (
  <Fragment>
    <Row gutter={16}>
      <Col {...columnConfig}>
        <Form>
          <InputText {...emailInputProps} />
          <InputText {...emailInputProps} />
        </Form>
      </Col>
    </Row>
  </Fragment>
);

const LoginFormWrapped = Form.create()(LoginForm);

export default LoginFormWrapped;
