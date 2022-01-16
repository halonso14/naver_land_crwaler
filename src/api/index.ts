import { Router } from "express";
import lands from "./routes/lands";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  lands(app);

  return app;
};
