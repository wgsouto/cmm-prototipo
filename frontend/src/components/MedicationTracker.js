import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MedicationTracker() {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    axios.get('/api/medications')
      .then(res => setMedications(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Controle de Medicamentos</h2>
      <ul>
        {medications.map(m => <li key={m.id}>{m.name} - {m.dosage}</li>)}
      </ul>
    </div>
  );
}

export default MedicationTracker;