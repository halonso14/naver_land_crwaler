import { Router, Request, Response, NextFunction } from "express";

const route = Router();

export default (app: Router) => {
  app.use("/lands", route);

  route.get(
    "/TBD",

    async (req: Request, res: Response, next: NextFunction) => {
      console.log(`Calling Sign-Up endpoint with body: ${req.body}`);
      try {
        return res.status(200).json({ data: "TBD" });
      } catch (e) {
        console.error(`Error from GET /lands/TBD: ${JSON.stringify}`);
        return next(e);
      }
    }
  );
};
