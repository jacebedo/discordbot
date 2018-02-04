exports.userCommand = (command,params) => {
  this.command = command;
  this.params = [];
  if (ifParametersExist(params)) {
    this.params.push(params);
  }
};

/* */
function ifParametersExist(params){
  if (params == undefined) {
    return false;
  }
  return true;
}


exports.convertToCommand = function(message) {
  console.assert(message.indexOf('./') == 0);
  var suffix = message.substring(2);
  console.log(suffix);
}
