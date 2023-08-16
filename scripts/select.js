const pg = require('pg');
const { readFile } = require('fs');
const path = require('path');

const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env;
const pool = pg.Pool({
//   "user":"postgres",
//   "password":"password",
//   "host": "localhost",
//   "db" : "db1"
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  port: parseInt(PGPORT),
  ensureDatabaseExists: true,
  defaultDatabase: PGDATABASE,
});

pool.connect();

pool.on('connect', client => {
  readFile('insert.sql', sqlInsert => {
    client.query(sqlInsert);
  });
  readFile('select.sql', sqlSelect => {
    client.query(sqlSelect, (err, res) => {
      if (err) throw err;
      console.log(res);
    });
  });
});