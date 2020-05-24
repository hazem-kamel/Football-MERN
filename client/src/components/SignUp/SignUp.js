import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { registerNewUserAction } from "../../Redux/actions/Actions";
import "./SignUp.css";

const SignUp = (props) => {
  const alert = useAlert();
  const history = useHistory();
  useEffect(() => {
    Redirect();
  }, [props.session]);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const userData = {
      username: data.username,
      email: data.email,
      password: data.password,
      gender: data.gender,
    };
    props.register(userData);
  };
  const Redirect = () => {
    if (props.session.user) {
      sessionStorage.setItem("storedSession", props.session.user.username);
      history.push("/");
    } else if (props.session.error) {
      alert.show(<div style={{ size: "10px" }}>{props.session.error}</div>);
    }
  };
  return (
    <div className="register-form">
      <div className="left-register">
        <div className="register-left">
          <h1>Good to see you!</h1>
          <p>
            By creating an account on KingFut, you agree to our Terms of use and
            Privacy Policy.
          </p>
        </div>
      </div>
      <div className="right-register">
        <div className="register-right">
          <h3>Register</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                id="username"
                name="username"
                placeholder="Type your username"
                ref={register({ required: true, minLength: 3, maxLength: 20 })}
              />
              {errors.username && errors.username.type === "required" && (
                <p>This is required</p>
              )}
              {errors.username && errors.username.type === "minLength" && (
                <p>Minimum length is 3</p>
              )}
              {errors.username && errors.username.type === "maxLength" && (
                <p>Maximum length is 20</p>
              )}
              <input
                id="email"
                name="email"
                placeholder="Type your email"
                ref={register({ required: true, minLength: 5, maxLength: 20 })}
              />
              {errors.email && errors.email.type === "required" && (
                <p>This is required</p>
              )}
              {errors.email && errors.email.type === "minLength" && (
                <p>This is not a valid email!</p>
              )}
              <input
                id="password"
                name="password"
                placeholder="Type your password"
                type="password"
                ref={register({ required: true })}
              />
              {errors.password && errors.password.type === "required" && (
                <p>This is required</p>
              )}

              <input
                name="gender"
                ref={register({ required: true })}
                list="list"
              />
              {errors.gender && <p>This is required</p>}
              <datalist id="list">
                <option value="Male" />
                <option value="Female" />
              </datalist>
              <input type="submit" ref={register({ required: true })} />
            </div>
            <a href="/login"> Already have an account </a>
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
  register: (userData) => dispatch(registerNewUserAction(userData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
