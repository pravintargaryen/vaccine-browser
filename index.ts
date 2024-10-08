import express from "express";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Endpoint to calculate vaccine effectiveness
app.post("/calculate-effectiveness", (req, res) => {
  const {
    vaccinatedCases,
    unvaccinatedCases,
    vaccinatedPopulation,
    unvaccinatedPopulation,
  } = req.body;

  // Basic effectiveness calculation
  const vaccinatedRate = vaccinatedCases / vaccinatedPopulation;
  const unvaccinatedRate = unvaccinatedCases / unvaccinatedPopulation;

  const vaccineEffectiveness =
    ((unvaccinatedRate - vaccinatedRate) / unvaccinatedRate) * 100;

  res.json({ effectiveness: vaccineEffectiveness.toFixed(2) });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
