import React from "react";
import { Form, Select, Label } from "semantic-ui-react";

const SelectInput = ({
  input,
  placeholder,
  meta: { touched, error },
  multiple,
  options
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <Select
        value={input.value || null}
        onChange={(e, data) => input.onChange(data.value)}
        placeholder={placeholder}
        options={options}
        multiple={multiple}
      ></Select>
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default SelectInput;
