import express from 'express';
const myflightsRouter = express.Router();

import { myflights } from '../controller/ifly-controller.mjs';
myflightsRouter.get('/myflights', myflights);

export default myflightsRouter;
