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

  static async getIncidencias() {
    try {
      const snapshot = await db.once('value');
      return Incidencia.mapIncidencia(snapshot.val());
    } catch (error) {
      return error;
    }
  }

  static mapIncidencia(incidencias) {
    return Object.keys(incidencias).map((key) => {
      const value = incidencias[key];
      const accum = { ...value, id: key };
      return accum;
    });
  }
}
