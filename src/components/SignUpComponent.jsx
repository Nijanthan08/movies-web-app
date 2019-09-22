import React from "react";
import FormComponent from "./common/FormComponent";
import { userSchema } from "./../util/JoiSchema";
import InputFieldComponent from "./common/InputFieldComponent";
import { addUser } from "./../services/user";
import { isJsonObjEmpty } from "./../util/utils";

class SignUpComponent extends FormComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: "",
        lastName: "",
        emailId: "",
        password: "",
        confirmPassword: ""
      },
      errors: {}
    };
  }

  schema = userSchema;

  handleSubmit = async e => {
    e.preventDefault();
    const { data } = this.state;
    await this.validateInput(data, this.schema);
    if (isJsonObjEmpty(this.state.errors)) {
      await addUser(data);
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <InputFieldComponent
          type="text"
          value={data["firstName"]}
          error={errors["firstName"]}
          onChange={this.handleChange}
          name="firstName"
          label="First Name"
        />
        <InputFieldComponent
          type="text"
          value={data["lastName"]}
          error={errors["lastName"]}
          onChange={this.handleChange}
          name="lastName"
          label="Last Name"
        />
        <InputFieldComponent
          type="text"
          value={data["emailId"]}
          error={errors["emailId"]}
          onChange={this.handleChange}
          name="emailId"
          label="Email ID"
        />
        <InputFieldComponent
          type="password"
          value={data["password"]}
          error={errors["password"]}
          onChange={this.handleChange}
          name="password"
          label="Password"
        />
        <InputFieldComponent
          type="password"
          value={data["confirmPassword"]}
          error={errors["confirmPassword"]}
          onChange={this.handleChange}
          name="confirmPassword"
          label="Confirm Password"
        />
        <button className="btn btn-secondary btn-sm">Submit</button>
      </form>
    );
  }
}

export default SignUpComponent;
