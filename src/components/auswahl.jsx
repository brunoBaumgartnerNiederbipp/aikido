import React from "react";
import { Link } from "react-router-dom";
import './auswahl.css';




export default function Auswahl() {

    return (
        <div className="auswahl">
            <img className="auswahlBackground" src="./auswahlBackground.png" alt="" />
            <img className="auswahlBackground1"src="./auswahlBackground1.png" alt="" />
            <div className="block">
        <h1 className="auswahlKurs">Wähle hier deinen Kurs!</h1>
     <div>
        <div className="flex">
        <h2 className="schühlerKurs">Schüler Kurs</h2>
        <p>Ein Kurs für Anfänger</p>
        <div className="flex">
            <Link to="/kyu">
              <button className="auswahlKyu">KYU</button>
            </Link>
        </div>
    </div>
        <div className="flex">
        <h2 className="lehrerKurs">Lehrer Kurs</h2>
        <p>Ein Kurs für Fortgeschrittene</p>
        <div className="flex">
            <Link to="/dan">
        <button className="auswahlDan">DAN</button>
        </Link>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
    }



