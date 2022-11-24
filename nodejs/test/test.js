const app = require('../index');
const request = require('supertest');
const { expect } = require('chai');

describe('index.js test cases', () => {
        it('main page shows Hello World', (done) => {
                request(app)
                .get('/')
                .end((err, res) => {
                        expect(res.text).to.be.equal('Hi World');
                        done();
                        });
                });
});

