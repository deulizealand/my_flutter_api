import { v4 } from "https://deno.land/std/uuid/mod.ts";

import { Request } from "https://deno.land/x/fastro/mod.ts";
import client from "../database/database.ts";

export const getProducts = async (req: Request) => {
  const result = await client.query("select * from Products");
  console.log(result);
  req.send({
    status: 200,
    msg: "Deno Backend Engine",
    info: "Learning for Used by Flutter App",
    data: result,
  });
};
export const getProduct = async (req: Request) => {
  const id = req.parameter.id;
  console.log(id);
  const result = await client.query(
    "select * from Products where id = ? ",
    [id],
  );
  req.send({
    status: 200,
    msg: "Deno Backend Engine",
    info: "Learning for Used by Flutter App",
    data: result,
  });
};

export const addProduct = async (req: Request) => {
  const id = v4.generate();
  let data;
  if (req.payload) data = JSON.parse(req.payload);

  let result = await client.execute(
    `INSERT INTO Products(id,name,description,price,stock) values(?,?,?,?,?)`,
    [
      id,
      data.name,
      data.description,
      data.price,
      data.stock,
    ],
  );
  req.send({
    status: 200,
    msg: "Deno Backend Engine",
    info: "Learning for Used by Flutter App",
    data: result,
  });
};

export const updateProduct = async (req: Request) => {
  const id = req.parameter.id;
  let data;
  if (req.payload) data = JSON.parse(req.payload);
  const result = await client.execute(
    `update Products set ?? = ?, ?? = ?,?? = ?,?? = ? where id = ?`,
    [
      "name",
      data.name,
      "description",
      data.description,
      "stock",
      data.stock,
      "price",
      data.price,
      id,
    ],
  );
  console.log(result);
  req.send({
    status: 200,
    msg: "Deno Backend Engine",
    info: "Learning for Used by Flutter App",
    data: result,
  });
};

export const deleteProduct = async (req: Request) => {
  const id = req.parameter.id;

  const result = await client.query(
    "DELETE from Products where ?? = ?",
    ["id", id],
  );

  req.send({
    status: 200,
    msg: "Deno Backend Engine",
    info: "Learning for Used by Flutter App",
    data: result,
  });
};
