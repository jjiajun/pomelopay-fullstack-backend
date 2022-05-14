import express from 'express';
import routes from './routes';
import helmet from 'helmet';
import dotenv from "dotenv";
dotenv.config();
const { PORT } = process.env;

const app = express();

app.use(helmet()) // protects the app from well-known web vulnerabilities by setting up HTTP headers appropriately

app.use(express.json()) // allows you to parse json body, if not the json in req.body will not be detected

routes(app);

app.listen(PORT, () => {
  console.log(`Application listening at http://localhost:${PORT}`)
})