const discord = require('discord.js');
const client = new discord.Client();
const userCommand = require('./classes/userCommand.js');
const verification = require('./functions/verification.js');
const parse = require('./functions/parse.js');


client.on("ready",() =>{
  console.log("LMG, MOUNTED AND LOADED!");
});

client.on("message",(message) => {
  if (verification.isValidCommand(message.content)) {
    var clientRequest = parse.convertMessageToRequest(message.content);
    console.log(clientRequest);
  } else {
    // Do something
    console.log("false");
  }
});


/* Login in discord */
client.login("Mzk0OTkwMTAxNDg4NDY3OTg3.DVhK8w.c2cJjk5Hu4MiEv8S2DD-Jg9bL-4");
