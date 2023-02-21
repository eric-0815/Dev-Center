import express, { Request, Response } from "express";
import connectDB from "./utils/connectDB";
import usersRouter from "./routes/users";
import authRouter from "./routes/auth";
import profilesRoute from "./routes/profiles";
import postsRoute from "./routes/posts";

const app = express();

connectDB();

// Init Middleware
app.use(express.json())


app.get('/', (req: Request, res: Response) => res.send('API Running'));

app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/profiles', profilesRoute);
app.use('/api/posts', postsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
