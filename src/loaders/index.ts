import expressLoader from "./express";

export default async ({ expressApp }: any) => {
  console.log("loader is called");
  await expressLoader({ app: expressApp });
  console.log("✌️ Express loaded");
};
