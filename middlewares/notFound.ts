import { Request } from "https://deno.land/x/fastro/mod.ts";

export const notFound = async (req: Request) => {
  req.send({
    status: 404,
    msg: "Deno Backend Engine",
    info: "Something When Wrong with Url's",
  });
};
