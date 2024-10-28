import {expect , use, request} from 'chai';
import chaiHttp from 'chai-http';
import app, { startServer } from '../src/index.js';
import  dataSource  from '../src/config/typeorm.config.js';


use(chaiHttp);

describe('User API', () => {
  let server;
  
  before(async () => {
    server = await startServer();
  });

  after(async () => {
    await dataSource.destroy();
    server.close();
  });

  describe('POST /users', () => {
    it('should create a new user', (done) => {
      const user = {
        username: 'testuser',
        email: 'test@example.com',
        password: '123456',
      };

      request(app)
        .post('/users')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('id');
          expect(res.body).to.have.property('username', 'testuser');
          done();
        });
    });
  });
});
