
/*
 * The math.add() method adds all of the values in the parameter array
 * and displays the sum to the user.
 */
exports.add = (parameters,channel,client) => {
  var sum = 0;
  for (item of parameters) {
    sum += parseInt(item);
  }

  channel.send(`the sum of ${parameters} is: ${sum}`);
}
