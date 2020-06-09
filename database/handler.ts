import client from "./database.ts";

let createDatabase = await client.execute(
  `CREATE DATABASE IF NOT EXISTS flutter_api`,
).then(() => {
  return "sukses";
});
let useDatabase = await client.execute(`USE flutter_api`).then(() => {
  return "sukses";
});

let createTable = await client.execute(`
  CREATE TABLE Products (
      id int(11) NOT NULL AUTO_INCREMENT,
      name varchar(100) NOT NULL,
      description varchar(100) NOT NULL,
      price int(100) NOT NULL,
      stock int(100) NOT NULL,
      created_at timestamp not null default current_timestamp,
      PRIMARY KEY (id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  `).then(() => {
  return "sukses";
});

export { createDatabase, useDatabase, createTable };
