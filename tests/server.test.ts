import request from 'supertest';
import app from '../src/server';

describe('Course API Endpoints', () => {
  it('should return a list of courses on GET /api/courses', async () => {
    const res = await request(app).get('/api/courses');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('title');
  });

  it('should create a new course on POST /api/courses', async () => {
    const res = await request(app)
      .post('/api/courses')
      .send({ title: 'Continuous Integration with GitHub Actions' });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual('Continuous Integration with GitHub Actions');
    expect(res.body).toHaveProperty('id');
  });
});