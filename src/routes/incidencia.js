import incidentiaSchema from '../schema/incidentiaSchema';
import IncidenciaController from '../controllers/IncidentiaController';

export const register = (plugin) => {
  plugin.route([
    {
      method: 'POST',
      path: '/incidencias',
      handler: (request, h) => IncidenciaController.createIncidencia(request.payload),
      options: {
        validate: {
          payload: incidentiaSchema,
        },
      },
    },
    {
      method: 'GET',
      path: '/incidencias',
      handler: () => IncidenciaController.getIncidencias(),
    },
    {
      method: 'GET',
      path: '/',
      handler: () => 'Welcome to your to incidence reporting tool',
    },
  ]);
};

export const name = 'incidencia';
export default register;
