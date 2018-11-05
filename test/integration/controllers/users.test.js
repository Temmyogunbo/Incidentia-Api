import 'babel-polyfill';
import server from '../../../src/server';

let getServer;
describe('Users', () => {
  before(async () => {
    getServer = await server(false);
  });

  describe('/POST Users', () => {
    it('should create user', async () => {
      const options = {
        method: 'POST',
        url: '/api/v1/users/signup',
        payload: {
          email: 'noordean@andela.com',
          password: '#24hoursRescuePresident',
        },
      };
      const response = await getServer.inject(options);
      expect(response.statusCode).to.equal(200);
      expect(response.payload.email).to.equal(options.email);
    });

    it('should sign in user', async () => {
      const options = {
        method: 'POST',
        url: '/api/v1/users/signin',
        payload: {
          email: 'noordean@andela.com',
          password: '#24hoursRescuePresident',
        },
      };
      const response = await getServer.inject(options);
      expect(response.statusCode).to.equal(200);
      expect(response.payload.email).to.equal(options.email);
    });
  });
});
