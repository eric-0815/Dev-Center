import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../store/configureStore";

import { setAlert, removeAlert } from "../../../../slices/alertSlice";
import { registerAsync } from "../../../../slices/authenticationSlice";

const Register = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector(
    (state) => state.authenticationState
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
      dispatch(setAlert({ msg: "Password do not match", alertType: "danger" }));
      setTimeout(() => dispatch(removeAlert()), 5000);
    } else {
      const newUser = {
        name,
        email,
        password,
      };

      try {
        await dispatch(registerAsync(newUser));
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (isAuthenticated) return <Navigate to="/dashboard" />;

  return (
    <>
      <div className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <form
          className="form"
          action="create-profile"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
            onSubmit(event)
          }
        >
          <div className="form__group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
              required
            />
          </div>
          <div className="form__group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
              required
            />
          </div>
          <div className="form__group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
              required
              minLength={6}
            />
          </div>
          <div className="form__group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
              required
              minLength={6}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
