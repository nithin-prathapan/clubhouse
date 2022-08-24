import React from "react";
import style from "../Style/PhoneConfirmation.module.css";
import { Link } from "react-router-dom";

function AllowNotification() {
  return (
    <div className={style.phoneConfirmationContainer}>
      <div className="text-center">
        <h1 className="mb-4">Last, important step!</h1>
        <h1 className="mb-3">
          Enable notifications to know whe people are talking
        </h1>
        <div className={style.notification_container}>
          <div className="p-3">
            <h3>"Clubhouse" would like to send you notifications</h3>
            <p>Notifications may include alerts,sounds, and icon badges</p>
          </div>
          <div className={style.action_btn}>
            <Link exact to="/home">
              Don't Allow
            </Link>
            <Link exact to="/home">
              Allow
            </Link>
            <img
              src="https://cdn1.iconfinder.com/data/icons/hand-gestures-color/128/hand-finger-touch-tap-y-512.png"
              className={style.handImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllowNotification;
