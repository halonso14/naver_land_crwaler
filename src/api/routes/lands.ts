import { Router, Request, Response, NextFunction } from "express";
import axios from 'axios';

const route = Router();

export default (app: Router) => {
  app.use("/lands", route);

  route.get(
    "/real_estate",

    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.query;
      let page: number = 1;
      let list: any[] = [];
      try {
        while(true) {
          const { data } = await axios.get(`https://m.land.naver.com/complex/getComplexArticleList?hscpNo=${id}&tradTpCd=A1&order=point_&showR0=N&page=${page}`)
          if(data.result === 'error') {
            return res.status(400).json({ data: "Invalid id." });
          }
          if(!data.result.list.length) {
            break;
          }
          list = [ ...list, ...data.result.list];
          page += 1;
        }
      } catch (e) {
        console.error(`Unknown rrror from GET /lands/TBD: ${JSON.stringify(e)}`);
        return next(e);
      }
      return res.status(200).json({ data: list });
    }
  );
};
