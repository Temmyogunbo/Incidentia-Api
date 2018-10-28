import { db } from '../database';

export default class Incidencia {
  static async createIncidencia(incidencia) {
    const {
      incidenciaName,
      cause,
      severity,
      priority,
      solution,
      reporter,
      solved,
      date,
    } = incidencia;
    try {
      const incidence = await db.push({
        incidenciaName,
        cause,
        severity,
        priority,
        solution,
        reporter,
        solved,
        date,
      });

      return {
        ...incidencia,
        id: JSON.stringify(incidence)
          .split('/')
          .pop(),
      };
    } catch (error) {
      return error;
    }
  }
}
