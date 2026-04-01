const express = require('express');
const { Client } = require('pg');

const app = express();

// connexion DB
const client = new Client({
  host: 'postgres',
  port: 5432,
  user: 'user',
  password: 'password',
  database: 'mydb'
});

client.connect();

app.get('/', (req, res) => {
  res.send('User Service OK');
});

// test DB
app.get('/db', async (req, res) => {
  try {
    const result = await client.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('DB error');
  }
});

app.listen(3000, () => {
  console.log('User Service running on port 3000');
});
