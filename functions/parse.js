var userCommand = require('../classes/userCommand.js');


/*
 * This function takes a message and converts it into a 'userCommand' object, which is composed of:
 *  a 'command'  member and an array of 'parameters'
 *
 */
exports.convertMessageToRequest = function(message) {
  var commandTokens = tokenizeMessage(message);
  var requestFunction = commandTokens.shift();
  var clientRequest = new userCommand(requestFunction);
  clientRequest.addParameters(commandTokens);
  return clientRequest;
}


/*
 *  This function takes a valid command string (e.g. './newrole <rolename>')
 *  and converts it into a tokenized array.
 *  input: ./newrole <rolename>
 *  output: [newrole,<rolename>]
 */
var tokenizeMessage = function(message) {
  console.assert(message.indexOf('./') == 0);
  var suffix = message.substring(2);  // Remove './'
  var commandTokens = suffix.split(" ");
  return commandTokens;
}
