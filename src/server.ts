import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

// Dynamic component: In-memory state (acts as a mock database)
interface Course {
  id: number;
  title: string;
}

const courses: Course[] = [
  { id: 1, title: 'Foundations of Automated Delivery' },
  { id: 2, title: 'Version Control & Git' }
];

// GET endpoint: Fetch all courses
app.get('/api/courses', (req: Request, res: Response) => {
  res.status(200).json(courses);
});

// POST endpoint: Add a new course dynamically
app.post('/api/courses', (req: Request, res: Response) => {
  const newCourse: Course = {
    id: Date.now(),
    title: req.body.title
  };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});


const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
}

export default app;