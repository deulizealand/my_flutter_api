import { Fastro } from "https://deno.land/x/fastro/mod.ts";
import { Request } from "https://deno.land/x/fastro/mod.ts";

import * as productsController from "./routes.ts";
import { notFound } from "./middlewares/notFound.ts";
const server = new Fastro();

server.register(productsController.productsRouters);
await server.listen({ port: 8000 });
