import React, { useState } from "react";
import axios from "axios";

const ApiComp = ({ listHandler }) => {
  const [disabled, setDisabled] = useState(true);

  const [apiData, setApidata] = useState({
    activity: "",
    type: "",
    participants: "",
    price: "",
    link: "",
    key: "",
    accessibility: ""
  });

  const api = axios.create({
    baseURL: "https://www.boredapi.com/api"
  });

  const SubmitHandler = (e) => {
    e.preventDefault();
    setDisabled(true);
    listHandler(apiData);
    setApidata({
      activity: "",
      type: "",
      participants: "",
      price: "",
      link: "",
      key: "",
      accessibility: ""
    });
    console.log("submit");
  };
  const apiHandler = () => {
    api
      .get("/activity")
      .then((response) => {
        setApidata(response.data);
        setDisabled(false);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={apiHandler}>
        Api Page
      </button>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 bg-danger mt-2">
            <form onSubmit={SubmitHandler}>
              <div class="form-group row">
                <label for="inputActivity" className="col-sm-2 col-form-label">
                  Activity
                </label>
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="inputActivity"
                    value={apiData.activity}
                    placeholder="Activity"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputType" className="col-sm-2 col-form-label">
                  Type
                </label>
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="inputType"
                    value={apiData.type}
                    placeholder="activity type"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  for="inputParticipants"
                  className="col-sm-2 col-form-label"
                >
                  Participants
                </label>
                <div className="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="inputParticipants"
                    value={apiData.participants}
                    placeholder="participants"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPrice" class="col-sm-2 col-form-label">
                  Price
                </label>
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPrice"
                    value={apiData.price}
                    placeholder="price"
                  />
                </div>
              </div>
              {/* <div class="form-group row">
                <label for="inputLink" class="col-sm-2 col-form-label">
                  Link
                </label>
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="inputLink"
                    value={apiData.link}
                    placeholder="link"
                  />
                </div>
              </div> */}
              <div class="form-group row">
                <label for="inputkey" class="col-sm-2 col-form-label">
                  Key
                </label>
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="inputkey"
                    value={apiData.key}
                    placeholder="key"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputAccess" class="col-sm-2 col-form-label">
                  Accessibility
                </label>
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAccess"
                    value={apiData.accessibility}
                    placeholder="acceessibility"
                  />
                </div>
              </div>
              <button
                className="btn btn-primary"
                disabled={disabled}
                type="submit"
              >
                Submit{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApiComp;
