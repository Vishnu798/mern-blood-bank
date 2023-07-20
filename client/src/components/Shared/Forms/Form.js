import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authServices";
import Input from "./Input";

const Form = ({ submitBtn, formTitle, formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");

  const [name, setName] = useState("");
  const [organizationName, setOrganizationName] = useState("");

  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
            return handleRegister(
              e,
              email,
              password,
              role,
              name,
              organizationName,
              hospitalName,
              website,
              address,
              phone
            );
        }}
      >
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        <div className="d-flex mb-3">
          <div class="form-check mx-2">
            <input
              class="form-check-input"
              type="radio"
              name="role"
              id="donarRole"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label class="form-check-label" for="donarRole">
              Donar
            </label>
          </div>
          <div class="form-check ms-2">
            <input
              class="form-check-input"
              type="radio"
              name="role"
              id="adminRole"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label class="form-check-label" for="adminRole">
              Admin
            </label>
          </div>

          <div class="form-check mx-2">
            <input
              class="form-check-input"
              type="radio"
              name="role"
              id="organizationRole"
              value={"organization"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label class="form-check-label" for="organizationRole">
              Organization
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="role"
              id="hospitalRole"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label class="form-check-label" for="hospitalRole">
              hospital
            </label>
          </div>
        </div>
        {(() => {
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <Input
                    inputType={"email"}
                    labelFor={"forEmail"}
                    labelText={"Email"}
                    name={"email"}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />

                  <Input
                    inputType={"password"}
                    labelFor={"forPassword"}
                    labelText={"Password"}
                    name={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  {/* <div className="d-flex">
                    <button className="btn btn-primary " type="submit">
                      {submitBtn}
                    </button>
                  </div> */}
                </>
              );
            }

            default: {
              return (
                <>
                  <Input
                    inputType={"email"}
                    labelFor={"forEmail"}
                    labelText={"Email"}
                    name={"email"}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />

                  <Input
                    inputType={"password"}
                    labelFor={"forPassword"}
                    labelText={"Password"}
                    name={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />

                  {(role === "admin" || role === "donar") && (
                    <Input
                      inputType={"text"}
                      labelFor={"forName"}
                      labelText={"Name"}
                      name={"name"}
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  )}
                  {role === "organization" && (
                    <Input
                      inputType={"text"}
                      labelFor={"forOrganizationName"}
                      labelText={"Organization Name"}
                      name={"organization"}
                      onChange={(e) => setOrganizationName(e.target.value)}
                      value={organizationName}
                    />
                  )}

                  {role === "hospital" && (
                    <Input
                      inputType={"text"}
                      labelFor={"forHospitalName"}
                      labelText={"Hospital Name"}
                      name={"hospital"}
                      onChange={(e) => setHospitalName(e.target.value)}
                      value={hospitalName}
                    />
                  )}

                  <Input
                    inputType={"text"}
                    labelFor={"forWebsite"}
                    labelText={"Website"}
                    name={"website"}
                    onChange={(e) => setWebsite(e.target.value)}
                    value={website}
                  />

                  <Input
                    inputType={"text"}
                    labelFor={"forAddress"}
                    labelText={"Address"}
                    name={"address"}
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                  />

                  <Input
                    inputType={"text"}
                    labelFor={"forPhone"}
                    labelText={"Phone"}
                    name={"phone"}
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </>
              );
            }
          }
        })()}
        <div className="d-flex justify-content-between ">
          {formType === "login" ? (
            <p>
              Not register yet? <Link to="/register">Login</Link>
            </p>
          ) : (
            <p>
              Already a user? <Link to="/login">Login</Link>
            </p>
          )}
          <button className="btn btn-primary " type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
