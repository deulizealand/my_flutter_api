import { Fastro } from "https://deno.land/x/fastro/mod.ts";
import * as productsController from "./routes.ts";
const server = new Fastro();

server.register(productsController.productsRouters);
await server.listen({ port: 8000 });
