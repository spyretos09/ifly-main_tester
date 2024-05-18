import express from 'express';
const myflightsRouter = express.Router();

if (process.env.NODE_ENV !== 'production') {
  console.log('loading .env');
}

const myflightsController = await import('../controller/ifly-controller.mjs');
myflightsRouter.get('/myflights', myflightsController.myflights);

export default myflightsRouter;
