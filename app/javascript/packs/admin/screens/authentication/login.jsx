import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Button } from 'antd';
import InputText from '../../components/formItem/text';

const FormItem = Form.Item;

class LoginForm extends Component {
  handleFormSubmitted = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.login(values);
      }
    });
  }
  login = async (data) => {
    const { userSignin } = this.props;
    try {
      const response = await userSignin(null, null, { auth: data });
      console.log(response);
    } catch (e) {
      throw e;
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const columnConfig = {
      md: {
        span: 8,
        offset: 8,
      },
      sm: {
        span: 24,
      },
    };

    const emailFieldConfiguration = {
      getFieldDecorator,
      name: 'email',
      input: {
        type: 'email',
        placeholder: 'Email',
      },
      rules: [
        {
          required: true,
          message: 'Plase enter your email',
        },
      ],
    };
    const passwordFieldConfiguration = {
      getFieldDecorator,
      name: 'password',
      input: {
        type: 'password',
        placeholder: 'Your Password',
      },
      rules: [
        {
          required: true,
          message: 'Plase enter your password',
        },
      ],
    };
    return (
      <Fragment>
        <Row gutter={16}>
          <Col {...columnConfig}>
            <Form onSubmit={this.handleFormSubmitted}>
              <InputText {...emailFieldConfiguration} />
              <InputText {...passwordFieldConfiguration} />
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

LoginForm.propTypes = {
  form: PropTypes.object.isRequired,
  userSignin: PropTypes.func.isRequired,
};

const LoginFormWrapped = Form.create()(LoginForm);
export default LoginFormWrapped;
