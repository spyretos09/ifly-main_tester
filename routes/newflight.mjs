import express from 'express';

const flightRouter = express.Router();

const iflyController = await import('../controller/ifly-controller.mjs');

flightRouter.get('/', (req, res) => {
  res.redirect('/admin'); 
});

flightRouter.post('/flight/add', iflyController.addFlight);
flightRouter.get('/', (req, res) => {res.render('newflight');});
flightRouter.get('/newflight', iflyController.renderNewFlightForm);
export default flightRouter;
