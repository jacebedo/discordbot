/*
 * This object represents a user command that is entered by a user that has
 * the prototypebot installed.
 *
 */

module.exports = function(command){
  this.command = command;
  this.parameters = [];
  this.addParameters = (parameterArray) => {
    for (item of parameterArray) this.parameters.push(item);
  };
};


/* Internal functions */

function ifParametersExist(params){
  if (params == undefined) {
    return false;
  }
  return true;
}
