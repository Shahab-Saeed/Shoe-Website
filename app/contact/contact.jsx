import React from "react";
import style from "./contact.module.css";
import Image from "next/image";
import logshoes from "@/public/Assets/image/logshoes.png";
import googleIcon from "@/public/Assets/image/google.png";
import fbIcon from "@/public/Assets/image/facebook.png";
import twiIcon from "@/public/Assets/image/twitter.png";
const contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.child1}>
        <Image
          src={logshoes}
          alt="Google"
          width={500} // control width
          height={500} // control height
          className={style.iconimage}
        />{" "}
      </div>
      <div className={style.child2}>
        <div className={style.heading}>WELCOME BACK!</div>
        <div className={style.input}>
          <div className="texti">User Name</div>
          <input type="text" placeholder="User Name" />
        </div>
        <div className={style.input}>
          <div className="texti">Password</div>
          <input type="text" placeholder="Password" />
        </div>
        <div className={style.btn}>Login</div>
        <div className={style.icons}>
          <Image
            src={googleIcon}
            alt="Google"
            width={40} // control width
            height={40} // control height
            className={style.iconimages}
          />
          <Image
            src={fbIcon}
            alt="Facebook"
            width={40}
            height={40}
            className={style.iconimages}
          />
          <Image
            src={twiIcon}
            alt="Twitter"
            width={40}
            height={40}
            className={style.iconimages}
          />
        </div>
      </div>
    </div>
  );
};

export default contact;
