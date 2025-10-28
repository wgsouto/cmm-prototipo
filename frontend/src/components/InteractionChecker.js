import React, { useState } from 'react';
import axios from 'axios';

function InteractionChecker() {
  const [drug1, setDrug1] = useState('');
  const [drug2, setDrug2] = useState('');
  const [result, setResult] = useState('');

  const checkInteraction = () => {
    axios.post('/api/check-interaction', { drug1, drug2 })
      .then(res => setResult(res.data.message))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Verificador de Interações</h2>
      <input placeholder="Medicamento 1" value={drug1} onChange={e => setDrug1(e.target.value)} />
      <input placeholder="Medicamento 2" value={drug2} onChange={e => setDrug2(e.target.value)} />
      <button onClick={checkInteraction}>Verificar</button>
      {result && <p>{result}</p>}
    </div>
  );
}

export default InteractionChecker;