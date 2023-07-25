import React, { useState } from "react";
import Input from "../Forms/Input";
import InputType from "../Forms/Input";

const Modal = () => {
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [donarEmail, setDonarEmail] = useState("");
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Manage Blood Record
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="d-flex">
                Blood Type &nbsp;
                <div className="form-check mx-2">
                  <input
                    className="form-check-input mx-0"
                    defaultChecked
                    type="radio"
                    name="inRadio"
                    value={"in"}
                    onChange={(e) => setInventoryType(e.target.value)}
                  ></input>
                  <label htmlFor="in" className="form-check-label">
                    IN
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input mx-0"
                    type="radio"
                    name="inRadio"
                    value={"out"}
                    onChange={(e) => setInventoryType(e.target.value)}
                  ></input>
                  <label htmlFor="out" className="form-check-label">
                    OUT
                  </label>
                </div>
              </div>
              <select className="form-select" aria-label="Default select example" onChange={(e)=>setBloodGroup(e.target.value)}>

<option value={"O+"}>O+</option>
<option value={"O-"}>O-</option>
<option value={"AB+"}>AB+</option>
<option value={"AB-"}>AB-</option>
<option value={"A+"}>A+</option>
<option value={"A-"}>A-</option>
<option value={"B+"}>B+</option>
<option value={"B-"}>B-</option>
</select>

                  <Input
                    inputType={"email"}
                    labelFor={"donarEmail"}
                    labelText={"Donar Email"}
                    name={"donaremail"}
                    onChange={(e) => setDonarEmail(e.target.value)}
                    value={donarEmail}
                  />
                  <Input
                    inputType={"Number"}
                    labelFor={"quantity"}
                    labelText={"Quantity"}
                    name={"quantity"}
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                  />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
