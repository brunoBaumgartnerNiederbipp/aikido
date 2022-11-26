import React from "react";
import { Link } from "react-router-dom";
import './kyu.css';





export default function Kyu() {

    return (
        <div>
        
            <img className="kyuBackground" src="./auswahlKyu.png" alt="" />
            <img className="kyuBackground1" src="./auswahlKyu1.png" alt="" />
<div className="kyuButtons">
<div className="flex">
<Link to="/kyu1">
  <button className="auswahlKyu">KYU 1</button>
</Link>
</div>
<div className="flex">
            <Link to="/kyu2">
              <button className="auswahlKyu">KYU 2</button>
            </Link>
        </div>
        <div className="flex">
            <Link to="/kyu3">
              <button className="auswahlKyu">KYU 3</button>
            </Link>
        </div>

        <div className="flex">
            <Link to="/kyu4">
              <button className="auswahlKyu">KYU 4</button>
            </Link>
        </div>
        <div className="flex">
            <Link to="/kyu5">
              <button className="auswahlKyu">KYU 5</button>
            </Link>
        </div>
        <div className="flex">
            <Link to="/kyu6">
              <button className="auswahlKyu">KYU 6</button>
            </Link>
        </div>
       
      
        </div>



</div>
        
    );
    }