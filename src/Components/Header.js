import React from "react";
import { Link } from "react-router-dom";
import style from "../Style/header.module.css";

function Header() {
  return (
    <div className={style.Header}>
      <Link exact to="/explore">
        <img
          src="https://cdn1.iconfinder.com/data/icons/free-98-icons/32/search-512.png"
          alt=""
        />
      </Link>
      <div className={style.nav_items}>
        <Link exact to="/friends_invite">
          <img
            src="https://static.thenounproject.com/png/138580-200.png"
            alt=""
          />
        </Link>
        <Link exact to="/upcoming">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Calendar_icon_2.svg/989px-Calendar_icon_2.svg.png"
            alt=""
          />
        </Link>
        <Link exact to="/activity">
          <img src="/images/notification-icon.svg" alt="" />
        </Link>
        <Link exact to="/profile">
          <img src="https://freesvg.org/img/abstract-user-flat-4.png" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
