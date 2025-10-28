const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const patients = [
  { id: 1, name: "João Silva", age: 65 },
  { id: 2, name: "Maria Oliveira", age: 72 }
];

const medications = [
  { id: 1, name: "Metformina", dosage: "500mg" },
  { id: 2, name: "Losartana", dosage: "50mg" }
];

app.get('/api/patients', (req, res) => res.json(patients));
app.get('/api/medications', (req, res) => res.json(medications));

app.post('/api/check-interaction', (req, res) => {
  const { drug1, drug2 } = req.body;
  if(drug1 && drug2) {
    const message = (drug1 === "Metformina" && drug2 === "Losartana") ? 
      "Interação leve: monitorar pressão e glicemia." : "Sem interação conhecida.";
    res.json({ message });
  } else {
    res.json({ message: "Informe dois medicamentos." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));