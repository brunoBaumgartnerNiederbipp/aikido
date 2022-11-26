import React from "react";
import { Link } from "react-router-dom";
import './dan.css';





export default function Dan() {

    return (
        <div>
        
            <img className="kyuBackground" src="./auswahlKyu.png" alt="" />
            <img className="kyuBackground1" src="./auswahlKyu1.png" alt="" />
<div className="kyuButtons">
<div className="flex">
<Link to="/dan4">
  <button className="auswahlKyu">DAN 4</button>
</Link>
</div>
<div className="flex">
            <Link to="/dan3">
              <button className="auswahlKyu">DAN 3</button>
            </Link>
        </div>
        <div className="flex">
            <Link to="/dan2">
              <button className="auswahlKyu">DAN 2</button>
            </Link>
        </div>

        <div className="flex">
            <Link to="/dan1">
              <button className="auswahlKyu">DAN 1</button>
            </Link>
        </div>
       
        <div className="flex">
            <Link to="/philosophie">
              <button className="auswahlKyu">PHILOSOPHIE</button>
            </Link>
        </div>
        <div className="flex">
            <Link to="/geschichte">
              <button className="auswahlKyu">GESCHICHTE</button>
            </Link>
        </div>
       
        <div className="flex">
            <Link to="/hakama">
              <button className="auswahlKyu">HAKAMA</button>
            </Link>
        </div>
        <div className="flex">
            <Link to="/impressum">
              <button className="auswahlKyu">IMPRESSUM</button>
            </Link>
        </div>
       
        
        </div>



</div>
        
    );
    }