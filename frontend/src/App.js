import React from 'react';
import PatientList from './components/PatientList';
import MedicationTracker from './components/MedicationTracker';
import InteractionChecker from './components/InteractionChecker';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>CMM Care</h1>
      <PatientList />
      <MedicationTracker />
      <InteractionChecker />
    </div>
  );
}

export default App;