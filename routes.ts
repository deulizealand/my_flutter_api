import { Fastro } from "https://deno.land/x/fastro/mod.ts";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./controllers/products.ts";

export const productsRouters = function (fastro: Fastro) {
  fastro.get("/api/v1/products", getProducts)
    .get("/api/v1/products/:id", getProduct)
    .post("/api/v1/products", addProduct)
    .put("/api/v1/products/:id", updateProduct)
    .delete("/api/v1/products/:id", deleteProduct)
    .post("/hello", (req) => {
      // const { payload } = JSON.parse(req.payload);
      // req.send(payload);
    });
};
