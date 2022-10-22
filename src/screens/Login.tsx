import React from "react";
import { SyntheticEvent, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";
import { UserState } from "../reducers/userReducers";
import { RootState } from "../store";
import "./login.css";
import { type } from "os";
import  logo  from "../images/CPaaSLogo.png";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // let navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  );
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo !== undefined && userInfo.email) {
      // navigate('/')
      console.log("navigate pending");
    }
  }, [userInfo]);

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  const inputElement = document.getElementById(
    "passwordTitle"
  ) as HTMLInputElement;
  const messageElement = document.getElementById("message") as HTMLInputElement;
  if (inputElement != null) {
    messageElement.style.display = "block";
  } else {
    console.log("abcd");
  }

  const handleChange = (e: SyntheticEvent) => {
    e.preventDefault();
    const patternVariable =
      "(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?|][()-<>/]).{8,}";
    if ((e.target as HTMLInputElement).value.match(patternVariable)) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <header>
        <div className="container-fluid">
          <a href="#" className="logo">
            <img className="img-fluid" src={logo} alt="CPaaS Logo" />
          </a>
        </div>
      </header>
      <div className="login-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-9 col-sm-12 col-12"></div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-10 col-sm-12 col-12 offset-xxl-0 offset-xl-1 offset-md-1 offset-sm-0 offset-0">
              <div className="login-form">
                <div className="form-title">
                  <h5 className="title">Login</h5>
                  <p className="sub-title">Enter your email ID & Password.</p>
                </div>
                <form onSubmit={submitHandler} action="#" method="post">
                  <div className="input-group mb-3">
                    <span className="input-group-text icon" id="username">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="16.291"
                        viewBox="0 0 20 16.291"
                      >
                        <g
                          id="Group_163979"
                          data-name="Group 163979"
                          transform="translate(263.472 987.597)"
                        >
                          <path
                            id="Path_13403"
                            data-name="Path 13403"
                            d="M-253.494-971.308c-1.526,0-3.052.005-4.578,0a5.352,5.352,0,0,1-5.229-4.012,5.1,5.1,0,0,1-.167-1.336c0-1.867-.011-3.735,0-5.6a5.324,5.324,0,0,1,4.665-5.29,5.527,5.527,0,0,1,.761-.045q4.567,0,9.134,0a5.346,5.346,0,0,1,5.31,4.212,4.709,4.709,0,0,1,.117,1.059c0,1.911.017,3.822-.005,5.733a5.309,5.309,0,0,1-4.115,5.137,5.7,5.7,0,0,1-1.34.146Zm.023-1.4c1.533,0,3.067.007,4.6,0a3.939,3.939,0,0,0,4-3.991q.012-2.823,0-5.646a3.748,3.748,0,0,0-1.135-2.678,3.918,3.918,0,0,0-2.9-1.18q-4.489,0-8.981,0-.284,0-.566.024a3.912,3.912,0,0,0-3.6,3.814c-.023,1.94-.007,3.88,0,5.82a3.484,3.484,0,0,0,.425,1.673,3.892,3.892,0,0,0,3.594,2.161C-256.523-972.69-255-972.7-253.471-972.7Z"
                            fill="#092133"
                          />
                          <path
                            id="Path_13404"
                            data-name="Path 13404"
                            d="M-253.475-977.831a2.293,2.293,0,0,1-1.431-.441q-2.292-1.7-4.569-3.419a.683.683,0,0,1-.136-.97.691.691,0,0,1,1.005-.117q2.163,1.617,4.322,3.24a1.189,1.189,0,0,0,1.628,0l4.322-3.241a.675.675,0,0,1,.794-.061.659.659,0,0,1,.343.658.689.689,0,0,1-.292.514c-1.511,1.132-3.018,2.268-4.534,3.393A2.318,2.318,0,0,1-253.475-977.831Z"
                            fill="#092133"
                          />
                        </g>
                      </svg>
                    </span>
                    <div className="form-floating">
                      <input
                        type="email"
                        data-testid="email-element"
                        name="email"
                        onChange={(e) =>
                          setEmail((e.target as HTMLInputElement).value)
                        }
                        autoComplete="none"
                        placeholder="Enter your email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        value={email}
                        className="form-control input-custom is-valid"
                        id="username"
                      />
                      <label htmlFor="username">Enter your email ID</label>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text icon" id="password">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.182"
                        height="17.472"
                        viewBox="0 0 20.182 17.472"
                      >
                        <g
                          id="Group_168088"
                          data-name="Group 168088"
                          transform="translate(-69.97 -286.206)"
                        >
                          <path
                            id="Path_12574"
                            data-name="Path 12574"
                            d="M86.378,385.286a3.59,3.59,0,0,1,2.487,1,3.516,3.516,0,0,1,1.123,2.583c.015,1.227.02,2.454,0,3.681a3.6,3.6,0,0,1-3.616,3.575q-6.315.017-12.63,0a3.6,3.6,0,0,1-3.619-3.617c-.011-1.178,0-2.355,0-3.533a3.611,3.611,0,0,1,3.532-3.681.719.719,0,0,0,.084-.01c.6.018,1.207.032,1.81-.007.056,0,.112.009.168.009H84.4c.056,0,.112-.006.168-.009C85.171,385.319,85.775,385.3,86.378,385.286Zm-6.32,9.035q3.142,0,6.284,0a1.8,1.8,0,0,0,1.839-1.809c.007-1.213.01-2.426,0-3.639a1.8,1.8,0,0,0-1.83-1.774q-6.252,0-12.5,0a1.81,1.81,0,0,0-1.915,1.9q0,1.693,0,3.385a1.812,1.812,0,0,0,1.928,1.934Z"
                            transform="translate(0 -92.609)"
                            fill="#092133"
                            stroke="#fff"
                            stroke-width="0.3"
                          />
                          <path
                            id="Path_12575"
                            data-name="Path 12575"
                            d="M139.479,292.678c-.6.018-1.207.032-1.81-.007a4.066,4.066,0,0,0-.065-.754,4.493,4.493,0,0,0-4.225-3.741,4.517,4.517,0,0,0-4.733,4.5c-.6.04-1.206.025-1.81.007a6.326,6.326,0,0,1,5.439-6.247,6.3,6.3,0,0,1,7.113,5.2A8.863,8.863,0,0,1,139.479,292.678Z"
                            transform="translate(-53.1)"
                            fill="#092133"
                            stroke="#fff"
                            stroke-width="0.3"
                          />
                          <path
                            id="Path_12576"
                            data-name="Path 12576"
                            d="M184.385,457.985a.9.9,0,0,1-.9-.9.92.92,0,0,1,.919-.908.936.936,0,0,1,.892.9A.921.921,0,0,1,184.385,457.985Z"
                            transform="translate(-106.14 -158.982)"
                            fill="#092133"
                            stroke="#fff"
                            stroke-width="0.3"
                          />
                          <path
                            id="Path_12577"
                            data-name="Path 12577"
                            d="M240.924,457.985a.92.92,0,0,1-.9-.908.935.935,0,0,1,.909-.9.92.92,0,0,1,.9.924A.907.907,0,0,1,240.924,457.985Z"
                            transform="translate(-159.072 -158.982)"
                            fill="#092133"
                            stroke="#fff"
                            stroke-width="0.3"
                          />
                          <path
                            id="Path_12578"
                            data-name="Path 12578"
                            d="M126.982,457.086a.895.895,0,1,1,.883.893A.9.9,0,0,1,126.982,457.086Z"
                            transform="translate(-53.237 -158.975)"
                            fill="#092133"
                            stroke="#fff"
                            stroke-width="0.3"
                          />
                          <path
                            id="Path_12579"
                            data-name="Path 12579"
                            d="M298.672,457.077a.895.895,0,1,1-1.789,0,.895.895,0,1,1,1.789,0Z"
                            transform="translate(-212.303 -158.978)"
                            fill="#092133"
                            stroke="#fff"
                            stroke-width="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                    <div className="form-floating">
                      <input
                        id="password"
                        autoComplete="false"
                        name="password"
                        type="password"
                        data-testid="password-element"
                        placeholder="Password"
                        value={password}
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters."
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?\|\]\[\(\)\-<>/]).{8,}"
                        onInput={handleChange}
                        onChange={(e) =>
                          setPassword((e.target as HTMLInputElement).value)
                        }
                        className="form-control input-custom is-invalid"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <a href="#" className="forgot-password">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="input-group">
                    <button type="submit" name="submit" className="login-btn">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
