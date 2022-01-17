'use strict';
import "express-async-errors";
import express, { NextFunction, Response, Request } from "express";
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('./routes/routes');

// import { routes } from "./routes/routes";

import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes.routes);

// app.use(routes);

// app.use(
//   (err: Error, request: Request, response: Response, next: NextFunction) => {
//     if (err instanceof Error) {
//       return response.status(400).json({
//         message: err.message,
//       });
//     }
//     return response.status(500).json({
//       status: "error",
//       message: `Internal server error - ${err}`,
//     });
//   }
// );

export { app };