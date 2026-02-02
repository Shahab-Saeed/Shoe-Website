import React from "react";
import style from "./services.module.css";
import { FaTruck } from "react-icons/fa";
import { FaRotateRight } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";


const services = () => {
  return (
    <div className={style.services}>
      <div className={style.child1}>
        <div className={style.heading}>
          OUR <span>SERVICES</span>
        </div>
      </div>
      <div className={style.child2}>
        <div className={style.childa}>
          <div className={style.img}>
            <FaTruck className={style.truckIcon} />{" "}
          </div>
          <div className={style.text}>Fast Delivery</div>
          <div className={style.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </div>
        </div>
        <div className={style.childa}>
          <div className={style.img}>
            <FaRotateRight className={style.reloadIcon} />{" "}
          </div>
          <div className={style.text}>10 Days Replacement</div>
          <div className={style.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </div>
        </div>
        <div className={style.childa}>
          <div className={style.img}>
  <FaHeadphones className={style.headphoneIcon} />
          </div>
          <div className={style.text}>24 X 7 Support</div>
          <div className={style.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
