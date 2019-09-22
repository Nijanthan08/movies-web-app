import { Component } from "react";
import Joi from "joi-browser";

class FormComponent extends Component {
  state = {
    data: {},
    errors: {}
  };

  validateInput = (inputField, schema, inputFieldName = null) => {
    const validationResults = Joi.validate(inputField, schema);

    let errors = { ...this.state.errors };
    if (!validationResults.error) {
      if (inputFieldName) delete errors[inputFieldName];
      else errors = {};
    } else {
      validationResults.error.details.forEach(element => {
        errors[element.path] = element.message;
      });
    }

    this.setState({ errors });
  };

  handleChange = e => {
    const data = { ...this.state.data };
    const { name, value } = e.currentTarget;
    data[name] = value;
    this.setState({ data });
    if ("confirmPassword" !== name)
      this.validateInput(
        { [name]: value },
        { [name]: this.schema[name] },
        name
      );
  };
}

export default FormComponent;
