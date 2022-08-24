import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import style from "../Style/PhoneConfirmation.module.css";

function PhoneConfirmation() {
  const [value, setValue] = useState("");
  return (
    <div className={style.phoneConfirmationContainer}>
      <Link exact to="/" className={style.backBtn}>
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png"
          alt=""
        />
      </Link>
      <h1>Enter Your Phone</h1>
      <PhoneInput international defaultCountry="India" onChange={setValue} value={value} />
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>terms and policies.</span> Thanks!
      </p>
      <Link
        exact
        to="/code_confirm"
        className="primaryBtn d-flex align-items-center textDecoration-none"
      >
        Next
        <img
          src="https://pixlok.com/wp-content/uploads/2021/10/Next-Arrow-o3nvd.png"
          alt=""
        />
      </Link>
    </div>
  );
}

export default PhoneConfirmation;
