const express = require('express');
const studentsRouter = require('./students.router');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/students', studentsRouter);

};

module.exports = routerApi;
