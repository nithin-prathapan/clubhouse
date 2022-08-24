import React from "react";
import style from "../Style/PhoneConfirmation.module.css";
import { Link } from "react-router-dom";

function CodeConfirm() {
  return (
    <div className={style.phoneConfirmationContainer}>
      <Link exact to="/get_username" className={style.backBtn}>
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png"
          alt=""
        />{" "}
      </Link>
      <div className="text-center">
        <h1 style={{ width: "100%", maxWidth: "200px", marginBottom: "1em" }}>
          Enter the code we just texted you
        </h1>
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            textAlign: "center",
            outline: "none",
          }}
        />
        <p className="mt-2">
          didin't recieved it? <span>Tap to reset</span>
        </p>
      </div>
      <Link
        exact
        to="/allow_notification"
        className="primaryBtn d-flex align-items-center mt-1"
      >
        Next  -     

        <img
          className="ml-5"
          src="/images/whitearrow.svg"
          alt=""
        />
      </Link>
    </div>
  );
}

export default CodeConfirm;
