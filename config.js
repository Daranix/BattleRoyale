
"use strict";

function interior() {
  return {

  }
}

module.exports = {
  badWords: ["fuck", "shit", "BitEmE"],
  world: {
    weather: 1,
    windLevel: 0.0,
    rainLevel: 0.0,
    snowLevel: 0.0,
    timeScale: 1.0,
    IPLs: [],
    interiors: [],
    capInteriors: true
  },
  mysql: {
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'gamemode'
  },
  game: {
	  minPlayers: 5,
	  //roundTime: gm.utility.minutes(15),
    roundTime: (15 * 1000) * 60,
	  lobbypos: new Vector3f(3365.0, 2345.0, 0.0),
    startAreaRadius: 300.0
  },
  debug: true
};

