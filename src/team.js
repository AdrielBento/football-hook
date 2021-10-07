class Team {
  constructor({ id, name, city, uf, league, titles, team_payroll }) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.uf = uf;
    this.league = league;
    this.titles = titles;
    this.team_payroll = team_payroll;
  }

  requiredFields() {
    return ['name', 'city', 'uf', 'titles', 'team_payroll'];
  }

  getAllowedLeagues() {
    return ['A', 'B', 'C'];
  }

  validateRequiredParams() {
    return this.requiredFields().some((field) => {
      if (!this[field]) return true;
    });
  }

  validateAllowedValues() {
    return !this.getAllowedLeagues().includes(this.league);
  }
}

module.exports = Team;
