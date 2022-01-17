import express from "express";
import config from "../config";
import routes from "../api";

export default ({ app }: { app: express.Application }) => {
  // Transforms the raw string of req.body into json
  app.use(express.json());
  // Load API routes
  app.use(config.api.prefix, routes());
};
