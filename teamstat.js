const team = {
  _players: [
    {firstname: 'Jade', lastName: 'White', age: 32},
    {firstname: 'Pete', lastName: 'Wheeler', age: 57},
    {firstname: 'Susan', lastName: 'Doll', age: 25}
    ],
  _games: [
    {opponent: 'Kia', teamPoints: 42, opponentPoints: 27},
    {opponent: 'Jets', teamPoints: 54, opponentPoints: 68},
    {opponent: 'Ruby', teamPoints: 72, opponentPoints: 71}
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstname: newFirstName, 
      lastName: newLastName,
      age: newAge
    }
    this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    }
    this.games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);
