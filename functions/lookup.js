var math = require("./features/math.js")


exports.Command = (clientRequest,channel,client) => {

  var command = clientRequest.command;
  var parameters = clientRequest.parameters;

  switch (command) {
    case "add":
      math.add(parameters,channel,client);
  }
};
