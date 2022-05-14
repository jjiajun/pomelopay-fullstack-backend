import {Request, Response} from 'express';
import fs from 'fs';

const addTransaction = async (req: Request, res: Response) => {
  const newData = req.body;
  const missingFields: string[] = [];
  const requiredFields = ['date', 'first_name', 'last_name', 'email', 'item', 'price', 'currency']
  // collate all missing required fields
  requiredFields.forEach(fieldName => {
    if (!newData[fieldName]) {
      missingFields.push(fieldName);
    }
  })
  // if there is at least one missing field, return status code 400 and inform missing fields
  if (missingFields.length > 0) {
    return res.status(400).send(`The following required fields are missing: ${missingFields}`)
  }

  // read and parse JSON DB
  const data = await fs.promises.readFile('data.json', 'utf-8');
  const parsedData = JSON.parse(data);
  // get latest id in JSON DB
  const latestId = parsedData[parsedData.length - 1].id
  // add new data from req.body into parsedData with id = latestId + 1
  parsedData.push({...{ id: latestId + 1}, ...newData})

  // Convert content object to string before writing
  const jsonContentStr = JSON.stringify(parsedData);
  // write content to JSON DB
  await fs.promises.writeFile('data.json', jsonContentStr)

  return res.send(jsonContentStr)
}

export default addTransaction;