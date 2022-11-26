import React from "react";
import './home.css';
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="start" >

      <Link to="/auswahl" className="btn btn-primary btn-lg">
      <img className="morihei" src="./moriheiStart.png" alt="ein bild von morihei ueschiba o sensei. er begründete Aikido." />
      </Link>
      <Link to="/auswahl" className="btn btn-primary btn-lg">
      <img className="morihei1" src="./morihei1.png" alt="ein bild von morihei ueschiba o sensei. er begründete Aikido." />
      </Link>
      <h1 className="title">
       <p> 合</p>
        <p> 気 </p>
        <p> 道 </p>
        </h1>
      <p className="willkommen">Dies ist ein Leitfaden des Aikido </p>
    </div>
  );
}

