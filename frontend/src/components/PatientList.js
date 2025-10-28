import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('/api/patients')
      .then(res => setPatients(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Pacientes</h2>
      <ul>
        {patients.map(p => <li key={p.id}>{p.name} - {p.age} anos</li>)}
      </ul>
    </div>
  );
}

export default PatientList;