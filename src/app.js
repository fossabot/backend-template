import express from 'express';
import bodyParser from 'body-parser';

const app = express();

/*
 * This is for parsing request body, it doesn't work with multipart body
 */
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

export default app;