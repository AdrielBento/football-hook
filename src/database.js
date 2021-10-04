var data = {
  teams: [
    {
      id: 1,
      name: 'Fluminense',
      city: 'Rio de Janeiro',
      uf: 'RJ',
      league: 'A',
      titles: [{ state: 44 }, { national: 43 }, { international: 2 }],
      team_payroll: 333.33,
    },
  ],
};

const database = () => {
  const findById = (id) => {
    return data.teams.find((team) => team.id == id);
  };

  const findByName = (name) => {
    return data.teams.find((team) => team.name == name);
  };

  const fetchAll = () => {
    return data.teams;
  };

  const update = (id, team) => {
    const index = data.teams.findIndex((t) => t.id == id);
    data.teams[index] = team;
    return data.teams[index];
  };

  const deleteById = (id) => {
    data['teams'] = data.teams.filter((t) => t.id != id);
    return;
  };

  const nextId = () => {
    return data.teams.length + 1;
  };

  const create = (team) => {
    data.teams.push(team);
    return team;
  };

  return {
    fetchAll,
    findById,
    findByName,
    deleteById,
    update,
    nextId,
    create,
  };
};

module.exports = database;
