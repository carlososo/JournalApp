import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import validator from 'validator';
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const {msgError} = useSelector(state => state.ui);
  

  const [values, handleInputChange] =useForm({
    name:'Carlos',
    email:'carlos@mail.com',
    password: 123,
    confirm_password: 123
  })
  const {name, email, password, confirm_password} = values;

  const handleSubmit =(e)=>{
    e.preventDefault();

    if(isFormValid()){
      dispatch(startRegisterWithEmailPasswordName(email, password, name))
    }
    
  }
  const isFormValid=()=>{

    if(name.trim().length===0){
      dispatch(setError("name is required"));
      return false;
    }else if( !validator.isEmail(email)){
      dispatch(setError("email not valid"));
      return false;
    }else if(password !== confirm_password || password.length<5){
      dispatch(setError("password should be at least 6 characters and match each other"));
      return false;
    }
    dispatch(removeError());
    return true;
   
  }

  return (
    <>
      <h3 className="auth__titile">Register</h3>
      <form 
      className="animate__animated animate__fadeIn animate__fast"
      onSubmit={handleSubmit}>
        {
        msgError&&(
          <div className="auth__allert-error">
            {msgError}
        </div>)}
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm Password"
          name="confirm_password"
          value={confirm_password}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link className="link" to="/auth/login">
          Already registered?
        </Link>
      </form>
    </>
  );
};
