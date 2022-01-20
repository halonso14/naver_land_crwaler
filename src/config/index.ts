import 'dotenv/config';

export default {
  port: 3000,
  databaseURL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ivmey.mongodb.net/${process.env.ESTATE_DB_NAME}?retryWrites=true&w=majority`,
  api: {
    prefix: '/api',
  },
  agenda: {
    dbCollection: process.env.AGENDA_DB_COLLECTION,
    pooltime: process.env.AGENDA_POOL_TIME,
    concurrency: parseInt(process.env.AGENDA_CONCURRENCY || '10', 10),
  },
};
