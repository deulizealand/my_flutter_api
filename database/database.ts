import { Client } from "https://deno.land/x/mysql/mod.ts";
import "https://deno.land/x/dotenv/load.ts";
const client = await new Client().connect({
  hostname: Deno.env.get("hostname"),
  username: Deno.env.get("username"),
  db: Deno.env.get("db"),
  password: Deno.env.get("password"),
});

export default client;
