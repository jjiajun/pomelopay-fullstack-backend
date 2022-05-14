import express from 'express';
import routes from './routes';
import helmet from 'helmet';
import dotenv from "dotenv";
dotenv.config();
const { PORT } = process.env;
const app = express();

app.use(helmet())

app.use(express.json()) // allows you to parse json body, if not the json in req.body will not be detected

routes(app);

app.listen(PORT, () => {
  console.log(`Application listening at http://localhost:${PORT}`)
})






// app.use(express.urlencoded({ extended: true })) // allows you to parse URL

// const middleware = ({name}:{name:string}) => (req: Request, res: Response, next: NextFunction) => {
//   res.locals.name = name;
//   next();
// }

// app.use(middleware({name: "Tom does tech"}));

// app.all('/api/all', (req: Request, res: Response) => {
//   return res.sendStatus(200)
// })

// app.route("/").get((req: Request, res: Response) => {
//   return res.send("You make a GET request")
// }).post((req: Request, res: Response) => {
//   return res.send("You made a POST request")
// }).delete((req: Request, res: Response) => {
//   return res.send("You made a DELETE request")
// })