import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import Title from "./Title";
import Navigation from "./Navigation";
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  margin: 50px auto;
  border-radius: 3px;
`;
const StyledInput = styled.input`
  width: 300px;
  height: 25px;
  margin: 5px 0;
  border-radius: 3px;
`;
const StyledSubmit = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 100px;
  color: #182d42;
  background: #caa767;
  border: none;
  border-radius: 3px;
`;
export default function LogInForm(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault(); // maybe not necessary?
    console.log(data);
      axiosWithAuth().post("/auth/login", data)
      .then(response => {
        console.log("logged in", response.data);
        localStorage.setItem("token", response.data.token); //retreiving token from api
        props.history.push("/jobseeker-profile"); // need to make it go to company if company
      })
      .catch(err => {
        console.log("login error", err);
      });
  };
  return (
    <div>
      <Title />
      <Navigation />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label>
          <StyledInput
            type="text"
            placeholder="Email"
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
        </label>
        {errors.email && "Email is required"}
        <label>
          <StyledInput
            type="password"
            placeholder="Password"
            name="password"
            ref={register({ required: true })}
          />
        </label>
        <StyledSubmit type="submit" value="Log In" />
      </StyledForm>
    </div>
  );
}
