
const mongoose = require('mongoose');

const IncidenciaSchema = new mongoose.Schema({
  incidenciaName: { type: String, required: true },
  severity: { type: String, required: true },
  priority: { type: String, required: true },
  cause: { type: String, required: true },
  solution: { type: String, required: true },
  solved: { type: String, required: true },
  reporter: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Incidencias = mongoose.model('Issues', IncidenciaSchema);

export default Incidencias;
