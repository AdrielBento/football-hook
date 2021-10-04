const express = require('express');
const router = express.Router();
const TeamController = new (require('./teamController'))();

router
  .post('/team', TeamController.createTeam)
  .get('/teams', TeamController.getAllTeams)
  .get('/teams/search', TeamController.getTeam)
  .put('/teams/:id', TeamController.updateTeam)
  .delete('/teams/:id', TeamController.deleteTeam);

module.exports = router;
