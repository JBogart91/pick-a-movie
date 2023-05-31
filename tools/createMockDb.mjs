/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import mockData from './mockData.mjs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { movies } = mockData;
const data = JSON.stringify({ movies });
const filepath = path.join(__dirname, 'db.json');

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log('Mock DB created.');
});
