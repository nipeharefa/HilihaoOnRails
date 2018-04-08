import React, { Fragment, Component } from 'react';
import { Row, Col, Form } from 'antd';
import InputText from '../../components/formItem/text';

class LoginForm extends Component {
  handleFormSubmitted = (e) => {
    if (e) {
      return 1;
    }
    return e;
  }
  render() {
    const columnConfig = {
      md: {
        span: 8,
        offset: 8,
      },
      sm: {
        span: 24,
      },
    };

    const emailInputProps = {
      input: {
        placeholder: 'Alamat Email',
      },
    };

    const passwordInputProps = {
      input: {
        placeholder: 'Kata Sandi',
      },
    };

    return (
      <Fragment>
        <Row gutter={16}>
          <Col {...columnConfig}>
            <Form onSubmit={this.handleFormSubmitted}>
              <InputText {...emailInputProps} />
              <InputText {...passwordInputProps} />
            </Form>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

const LoginFormWrapped = Form.create()(LoginForm);
export default LoginFormWrapped;
