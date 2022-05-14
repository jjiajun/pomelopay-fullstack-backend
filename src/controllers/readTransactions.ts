import {Request, Response} from 'express';
import fs from 'fs';

const readTransactions = async (req: Request, res: Response) => {
  const data = await fs.promises.readFile('data.json', 'utf-8');
  return res.send(data)
}

export default readTransactions;