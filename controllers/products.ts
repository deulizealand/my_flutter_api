import { v4 } from "https://deno.land/std/uuid/mod.ts";

import { Request } from "https://deno.land/x/fastro/mod.ts";
import client from "../database/database.ts";
import cekApi from "../handlers/cekApi.ts";

export const getProducts = async (req: Request) => {
  const status = 200;
  const headers = new Headers();
  headers.set("X-Made-In", "Wangsean Village, Bali");
  headers.set("X-Author", "Hendrjl");
  headers.set("X-Telegram", "https://t.me/hendrjl_bot");
  const api_key = req.parameter.apiKey;
  const final = await cekApi(api_key);

  if (final != null) {
    const result = await client.query("select * from Products");
    req.send(
      {
        status: status,
        api: [{
          key: final.api_key,
          register: final.created_at,
        }],
        flag: "Deno Backend Engine",
        info: "Learning for Used by Flutter App",
        msg: "Query Executed !!!",
        data: result,
      },
      status,
      headers,
    );
  } else {
    req.send(
      {
        status: 404,
        msg: "no valid Api Key",
        info: "Learning for Used by Flutter App",
      },
      status,
      headers,
    );
  }
};
export const getProduct = async (req: Request) => {
  const id = req.parameter.id;
  const api_key = req.parameter.apiKey;
  console.log(id);
  const result = await client.query(
    "select * from Products where id = ? ",
    [id],
  );
  const status = 200;
  const headers = new Headers();
  headers.set("X-Made-In", "Wangsean Village, Bali");
  headers.set("X-Author", "Hendrjl");
  headers.set("X-Telegram", "https://t.me/hendrjl_bot");
  const final = await cekApi(api_key);
  if (final != null) {
    req.send(
      {
        status: status,
        api: [{
          key: final.api_key,
          register: final.created_at,
        }],
        flag: "Deno Backend Engine",
        info: "Learning for Used by Flutter App",
        msg: "Query Executed !!!",
        data: result,
      },
      status,
      headers,
    );
  } else {
    req.send(
      {
        status: 404,
        msg: "no valid Api Key",
        info: "Learning for Used by Flutter App",
      },
      status,
      headers,
    );
  }
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
  const status = 200;
  const headers = new Headers();
  headers.set("X-Made-In", "Wangsean Village, Bali");
  headers.set("X-Author", "Hendrjl");
  headers.set("X-Telegram", "https://t.me/hendrjl_bot");
  const api_key = req.parameter.apiKey;
  const final = await cekApi(api_key);

  if (final != null) {
    req.send(
      {
        status: status,
        api: [{
          key: final.api_key,
          register: final.created_at,
        }],
        flag: "Deno Backend Engine",
        info: "Learning for Used by Flutter App",
        msg: "Product Inserted !!!",
        data: result,
      },
      status,
      headers,
    );
  } else {
    req.send(
      {
        status: 404,
        msg: "no valid Api Key",
        info: "Learning for Used by Flutter App",
      },
      status,
      headers,
    );
  }
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
  const status = 200;
  const headers = new Headers();
  headers.set("X-Made-In", "Wangsean Village, Bali");
  headers.set("X-Author", "Hendrjl");
  headers.set("X-Telegram", "https://t.me/hendrjl_bot");
  const api_key = req.parameter.apiKey;
  const final = await cekApi(api_key);

  if (final != null) {
    req.send(
      {
        status: status,
        api: [{
          key: final.api_key,
          register: final.created_at,
        }],
        flag: "Deno Backend Engine",
        info: "Learning for Used by Flutter App",
        msg: "Product Updated",
        data: result,
      },
      status,
      headers,
    );
  } else {
    req.send(
      {
        status: 404,
        msg: "no valid Api Key",
        info: "Learning for Used by Flutter App",
      },
      status,
      headers,
    );
  }
};

export const deleteProduct = async (req: Request) => {
  const id = req.parameter.id;

  const result = await client.query(
    "DELETE from Products where ?? = ?",
    ["id", id],
  );

  const status = 200;
  const headers = new Headers();
  headers.set("X-Made-In", "Wangsean Village, Bali");
  headers.set("X-Author", "Hendrjl");
  headers.set("X-Telegram", "https://t.me/hendrjl_bot");
  const api_key = req.parameter.apiKey;
  const final = await cekApi(api_key);

  if (final != null) {
    req.send(
      {
        status: status,
        api: [{
          key: final.api_key,
          register: final.created_at,
        }],
        flag: "Deno Backend Engine",
        info: "Learning for Used by Flutter App",
        msg: "Product Deleted",
        data: result,
      },
      status,
      headers,
    );
  } else {
    req.send(
      {
        status: 404,
        msg: "no valid Api Key",
        info: "Learning for Used by Flutter App",
      },
      status,
      headers,
    );
  }
};
