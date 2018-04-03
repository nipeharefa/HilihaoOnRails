import React, { Fragment } from "react";
import { Form, Input } from "antd";
import PropTypes from "prop-types";

const FormItem = Form.Item;

const InputTextFormItem = ({ placeholder }) => (
  <Fragment>
    <FormItem>
      <Input placeholder={placeholder} type="text" />
    </FormItem>
  </Fragment>
);

InputTextFormItem.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default InputTextFormItem;
