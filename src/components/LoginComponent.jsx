import React from "react";
import FormComponent from "./common/FormComponent";
import { loginSchema } from "./../util/JoiSchema";
import InputFieldComponent from "./common/InputFieldComponent";
import { login } from "./../services/user";
import { isJsonObjEmpty } from "./../util/utils";

class LoginComponent extends FormComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        emailId: "",
        password: ""
      },
      errors: {}
    };
  }

  schema = loginSchema;

  handleSubmit = async e => {
    e.preventDefault();
    const { data } = this.state;
    await this.validateInput(data, this.schema);
    if (isJsonObjEmpty(this.state.errors)) {
      await login(data);
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>

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

        <button className="btn btn-secondary btn-sm">Submit</button>
      </form>
    );
  }
}

export default LoginComponent;
