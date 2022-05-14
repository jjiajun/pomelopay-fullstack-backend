import {Express} from 'express';
import readTransactions from "./controllers/readTransactions";
import addTransaction from "./controllers/addTransaction";
// when do I use express.Router()?

const routes = (app: Express) => {
  app.get('/transactions', readTransactions);
  app.post('/transactions', addTransaction);
}

export default routes;