import React from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';

const FormItem = Form.Item;
const InputTextFormItem = ({
  name,
  getFieldDecorator,
  rules,
  initialValue,
  formItemProps,
  input,
}) => (
  <FormItem {...formItemProps}>
    {getFieldDecorator(name, { rules, initialValue })(<Input {...input} />)}
  </FormItem>
);

InputTextFormItem.propTypes = {
  getFieldDecorator: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  rules: PropTypes.array, // eslint-disable-line
  initialValue: PropTypes.string,
  formItemProps: PropTypes.object, // eslint-disable-line
  input: PropTypes.object // eslint-disable-line
};

InputTextFormItem.defaultProps = {
  initialValue: null,
  formItemProps: {},
  input: {},
};

export default InputTextFormItem;
