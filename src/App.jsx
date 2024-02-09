import { useState } from 'react';

import { data } from './data/data';

import ImcCalc from './components/ImcCalc';
import ImcTable from './components/ImcTable';

import './App.css';

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcReasult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(imcReasult);

    data.forEach((item) => {
      if(imcReasult >= item.min && imcReasult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    })

    if(!info) return;
  }

  const resetCalcImc = (e) => {
    e.preventDefault();

    setImc("");
    setInfo("");
    setInfoClass("");
  }

  return (
    <div className='container'>
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable 
          data={data} 
          imc={imc} 
          info={info} 
          infoClass={infoClass}
          resetCalcImc={resetCalcImc}
        />
      )}
    </div>
  )
}

export default App
