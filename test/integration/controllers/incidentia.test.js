import 'babel-polyfill';
import server from '../../../src/server';

let getServer;
describe('incidencias', () => {
  let token, payload;
  before(async () => {
    getServer = await server(false);

    const options = {
      method: 'POST',
      url: '/api/v1/users/signup',
      payload: {
        email: 'emmanuel.ogunbo@andela.com',
        password: 'iamaproblemsolver',
      },
    };

    const response = await getServer.inject(options);
    const payload = JSON.parse(response.payload);
    token = payload.token;
  });

  describe('/GET incidencias', () => {
    it('should post incidencias', async () => {
      payload = {
        incidenciaName: 'Test incidencias',
        reporter: 'emmanuel.ogunbo@andela.com',
        severity: 'medium',
        priority: 'high',
        cause: 'last merge commits sontains bug',
        solution: 'reverted to previous commit',
        solved: true,
      };
      const options = {
        method: 'POST',
        url: '/api/v1/incidencias',
        headers: { authorization: `Bearer ${token}` },
        payload,
      };

      const response = await getServer.inject(options);
      const responseData = JSON.parse(response.payload);

      expect(response.statusCode).to.equal(200);
      expect(responseData.incidenciaName).to.equal(payload.incidenciaName);
      expect(responseData.reporter).to.equal(payload.reporter);
      expect(responseData.severity).to.equal(payload.severity);
      expect(responseData.priority).to.equal(payload.priority);
      expect(responseData.cause).to.equal(payload.cause);
    });

    it('should get incidencias', async () => {
      const options = {
        method: 'GET',
        url: '/api/v1/incidencias',
        headers: { authorization: `Bearer ${token}` },
      };
      const response = await getServer.inject(options);
      const responseData = JSON.parse(response.payload).data[0];

      expect(response.statusCode).to.equal(200);
      expect(responseData.incidenciaName).to.equal(payload.incidenciaName);
      expect(responseData.reporter).to.equal(payload.reporter);
      expect(responseData.severity).to.equal(payload.severity);
      expect(responseData.priority).to.equal(payload.priority);
      expect(responseData.cause).to.equal(payload.cause);
    });
  });
});
