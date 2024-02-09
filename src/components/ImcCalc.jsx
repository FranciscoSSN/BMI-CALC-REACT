/* eslint-disable react/prop-types */
import { useState } from "react";

import Button from "./Button";

import "./ImcCalc.css";

function ImcCalc({ calcImc }) {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    // limpar os campos do form
    const handleClearForm = (e) => {
        e.preventDefault();
        setHeight("");
        setWeight("");
    }

    // fazendo campos aceitarem so numeros
    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "");
    }

    // guardando dados height e weight
    const handleHeightChange = (e) => { 
        const updateValues = validDigits(e.target.value);

        setHeight(updateValues);
    }

    const handleWeightChange = (e) => { 
        const updateValues = validDigits(e.target.value);

        setWeight(updateValues);
    }

    return (
        <div id="calc-container">
            <h2>Calculadora de IMC</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height">Altura:</label>
                        <input
                            type="text"
                            name="height"
                            id="height"
                            placeholder="Exemplo: 1,75"
                            // pegando o input
                            onChange={(e) => handleHeightChange(e)}
                            value={height}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="weight">Peso:</label>
                        <input
                            type="text"
                            name="weight"
                            id="weight"
                            placeholder="Exemplo: 70,5"
                            // pegando o input
                            onChange={(e) => handleWeightChange(e)}
                            value={weight}
                        />
                    </div>
                </div>
                <div className="action-control">
                    <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)} />
                    <Button id="clear-btn" text="Limpar" action={handleClearForm} />
                </div>
            </form>
        </div>
    )
}

export default ImcCalc;