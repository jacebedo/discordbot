var math = require("./features/math.js")

/*
 * This command takes the 'client request', 'origin channel' and the 'client' object
 * and processes the request to external files for execution
 */
exports.Command = (clientRequest,channel,client) => {

  var command = clientRequest.command;
  var parameters = clientRequest.parameters;

  switch (command) {
    case "add":
      math.add(parameters,channel,client);
  }
};



/*
 *    To add commands (for extra clarity):
 *
 *    1. Create a javascript file (.js) and place under the features folder
 *    2. note: clientRequest is split into a 'command' member, and a 'parameters'
 *      array.
 *    3. Create the end-to-end execution flow for the feature.
 *    4. add a case with the 'command' name and execute the function.
 *    5. Note: to send a client response, use channel.send(message).
 *
 */
