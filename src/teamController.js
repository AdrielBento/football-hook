const Database = require('./database')();
const Team = require('./team');

class TeamController {
  getTeam(req, res) {
    const name = req.query?.name;
    const team = Database.findByName(name);

    if (!team) return res.status(400).json({ error: 'Team not found' });
    return res.status(200).json(team);
  }

  getAllTeams(req, res) {
    const teams = Database.fetchAll();
    res.status(200).json({ teams });
  }

  createTeam(req, res) {
    const params = req.body;
    params.id = Database.nextId();

    const team = new Team(params);

    if (team.validateRequiredParams())
      return res.status(400).json({ message: 'Some params are required' });

    if (team.validateAllowedValues())
      return res
        .status(400)
        .json({ message: 'Some value on params is not allowed' });

    Database.create(team);
    res.status(200).send({
      message: 'Create team',
    });
  }

  updateTeam(req, res) {
    const teamId = req.params?.id;
    const params = req.body;
    const team = Database.findById(teamId);

    if (!team) return res.status(400).json({ error: 'Team not found' });

    for (const key in params) {
      if (key === 'id') return;
      if (team.hasOwnProperty(key)) {
        team[key] = params[key];
      }
    }

    Database.update(team);

    res.status(200).json(team);
  }

  deleteTeam(req, res) {
    const teamId = req.params?.id;
    const team = Database.findById(teamId);
    if (!team) return res.status(400).json({ error: 'Team not found' });

    Database.deleteById(teamId);

    res.status(200).json({ message: 'Team deleted' });
  }
}

module.exports = TeamController;
