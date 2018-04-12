import React, { Fragment } from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';

const FormItem = Form.Item;

const InputPasswordFormItem = ({ input, formItem }) => (
  <Fragment>
    <FormItem {...formItem}>
      <Input {...input} type="text" />
    </FormItem>
  </Fragment>
);

InputPasswordFormItem.propTypes = {
  input: PropTypes.string.isRequired,
  formItem: PropTypes.object,
};

InputPasswordFormItem.defaultProps = {
  formItem: {},
};

export default InputPasswordFormItem;
