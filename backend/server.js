import express from 'express';
import cors from 'cors';
import { connectDatabase } from "./database.js";

import { Items } from './model/items.js';
import { Categories } from './model/Categories.js';

connectDatabase();

const app = express();
app.use(cors());

app.get('/api/data', async (req, res) => {
    try {
      const data1 = await Items.find();
      res.json(data1);
      console.log(data1);
      console.log(":) Hello");
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

    app.listen(5001, () => {
        console.log('Server started!');
    });