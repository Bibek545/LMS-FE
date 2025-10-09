import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = ({label,passRef, value, ...rest}) => {
  let valueData = value;
  if(rest.type === "date") {
    valueData = value ? value.slice(0, 10) : null;
  }
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label> {label}</Form.Label>
        <Form.Control {...rest} ref={passRef} value={valueData}/>
      </Form.Group>
    </div>
  );
};

export default CustomInput;
