import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { loginUserAction } from "../../Redux/actions/Actions";
import "./SignIn.css";
const SignIn = (props) => {
  const alert = useAlert();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  useEffect(() => {
    Redirect();
  }, [props.session]);
  const onSubmit = (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    props.login(loginData);
  };
  const Redirect = () => {
    if (props.session.user) {
      sessionStorage.setItem("storedSession", props.session.user.username);
      history.push("/");
    } else if (props.session.error) {
      alert.show(<div style={{ size: "10px" }}>{props.session.error}</div>);
      console.log(props.session.error);
    }
  };
  return (
    <div className="signin-form">
      <div className="left-signin">
        <div className="left-login">
          <h1>Good to see you again!</h1>
          <p>
            By logging into KingFut, you agree to our Terms of use and Privacy
            Policy.
          </p>
        </div>
      </div>
      <div className="right-signin">
        <div className="right-info">
          <h3>Sign In</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "invalid email address",
                    },
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p>This is required</p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p>invalid email address</p>
                )}
              </div>
              <div>
                <input
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                  type="password"
                  ref={register({ required: true })}
                />
                {errors.password && <p>This is required</p>}
              </div>

              <input className="submit-button" type="submit" />
            </div>
            <a href="/register"> Create an account </a>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  session: state.Session,
});
const mapDispatchToProps = (dispatch) => ({
  login: (loginData) => dispatch(loginUserAction(loginData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
