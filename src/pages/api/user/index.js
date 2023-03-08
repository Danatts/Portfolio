import fs from 'fs';
import path from 'path';

const getData = () => {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const rawData = fs.readFileSync(filePath);
  const data = JSON.parse(rawData);
  return data
}

export default async function handleRequest(req, res) {
  const data = await getData();
  res.status(200).json(data);
}
