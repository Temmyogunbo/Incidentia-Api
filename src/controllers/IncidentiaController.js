import Boom from 'boom';
import { Incidencias } from '../models/incidencias';

export default class IncidenciaController {
  static async createIncidencia(incidencia) {
    const {
      incidenciaName,
      cause,
      severity,
      priority,
      solution,
      reporter,
      solved,
    } = incidencia;

    return Incidencias.create({
      incidenciaName,
      cause,
      severity,
      priority,
      solution,
      reporter,
      solved,
    })
      .then(result => result)
      .catch(err => Boom.serverUnavailable(err));
  }

  static getIncidencias() {
    return Incidencias.find({})
      .exec()
      .then((data) => {
        if (data) return { data };
        return Boom.notFound('Not found');
      })
      .catch(err => Boom.serverUnavailable(err));
  }
}
