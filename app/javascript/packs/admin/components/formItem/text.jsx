import React, { Fragment } from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';

const FormItem = Form.Item;

const InputTextFormItem = ({ input, formItem }) => (
  <Fragment>
    <FormItem {...formItem}>
      <Input {...input} type="text" />
    </FormItem>
  </Fragment>
);

InputTextFormItem.propTypes = {
  input: PropTypes.string.isRequired,
  formItem: PropTypes.object,
};

InputTextFormItem.defaultProps = {
  formItem: {},
};

export default InputTextFormItem;
