import incidentiaSchema from '../schema/incidentiaSchema';
import Incidencia from '../controllers/Incidentia';

export const register = (plugin) => {
  plugin.route([
    {
      method: 'POST',
      path: '/incidencias',
      handler: (request, reply) => Incidencia.createIncidencia(request.payload),
      options: {
        validate: {
          payload: incidentiaSchema,
        },
      },
    },
  ]);
};

export const name = 'incidencia';