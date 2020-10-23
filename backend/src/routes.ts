import { Router, Response, Request } from "express";
import { getUrnas, insertUrnas } from "./controllers/UrnasController";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Hello World" });
});

routes.get("/urnas", getUrnas);
routes.post("/urnas", insertUrnas);

export default routes;
