import { Fastro } from "https://deno.land/x/fastro/mod.ts";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./controllers/products.ts";
import {
  notFound,
} from "./middlewares/notFound.ts";
import { Request } from "https://deno.land/x/fastro/mod.ts";

const middleware = (req: Request, done: Function) => {
  req.oke = () => req.send("oke");
  done();
};

export const productsRouters = function (fastro: Fastro) {
  fastro.use(middleware)
    .get("/api/v1/products/:apiKey", getProducts)
    .get("/api/v1/products/:id/:apiKey", getProduct)
    .post("/api/v1/products/:apiKey", addProduct)
    .put("/api/v1/products/:id/:apiKey", updateProduct)
    .delete("/api/v1/products/:id/:apiKey", deleteProduct);
};
