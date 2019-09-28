import React from "react";
import { toast } from "react-toastify";
import FormComponent from "./common/FormComponent";
import { loginSchema } from "./../util/JoiSchema";
import InputFieldComponent from "./common/InputFieldComponent";
import { login } from "./../services/user";
import { isJsonObjEmpty } from "./../util/utils";
import { setTokenToCookie, decodeToken } from "../util/authentication";

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
    const { setUserInfo, history, toggleLoaderDisplay } = this.props;
    await this.validateInput(data, this.schema);
    if (isJsonObjEmpty(this.state.errors)) {
      toggleLoaderDisplay();
      const { status, data: authToken } = await login(data);
      toggleLoaderDisplay();

      if (200 === status) {
        setTokenToCookie(authToken);
        setUserInfo(decodeToken());
        history.push("/movies");
      } else {
        toast.error("Invalid Credentials !!!");
      }
    }
  };

  signUp = e => this.props.history.push("/sign_up");

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
        <br />
        <br />
        <p>
          {"New User... Create an "}
          <a href="#" onClick={this.signUp}>
            Account
          </a>
        </p>
      </form>
    );
  }
}

export default LoginComponent;
