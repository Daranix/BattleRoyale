
"use strict";

/*
    A few notes from Jan:
    The default package is using the strict mode. If you need more information about the strict mode, read this:
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
    We are also using ES6 features:
        https://iojs.org/en/es6.html

    This package is split up into multiple files. This was a personal choice. You *could* append all content into one single file.
    However, this would become kind of messy somewhen. In order to keep your code as readable as possible, I decided to split it up.

    This package is also conform to Google's Javascript Style Guide:
        https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
 */

// Creating a global namespace to prevent naming issues with GTA:MP
/**
 * @namespace
 */

// player variables
global.PlayerInfo = [];
global.pInGame = []; // false = on Lobby
global.beingStart = false;
global.beingStartTimer;
//global.StartTimer;
global.EndTimer;
global.Started = false;
global.g_pingame = [];
global.AreaTimer;
global.battleArea;





global.gm = {
  
  events: require('./events.js'),
  utility: require('./utility.js'),
  config: require('./config.js'),
  spawns: require('./spawns.js')
  //mysql:   require('./node_modules/mysql'),
  //system: require('./system.js')

};

/**
 * The main function of this package.
 */

function main () {
  console.log("Registering Events...");
  gm.events.register();
  // gm.system.init();
  console.log("Server started!");
 //  Query(8080); //You can change your port

  setInterval(function() {
    gm.events.Checks();
  }, 1000);


}

main();
