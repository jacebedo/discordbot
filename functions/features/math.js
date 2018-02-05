
exports.add = (parameters,channel,client) => {
  var sum = 0;
  for (item of parameters) {
    sum += parseInt(item);
  }

  // console.log(client);
  // client.sendMessage(channel.id,`the sum of ${parameters} is ${sum}`);
  channel.send(`the sum of ${parameters} is ${sum}`);
}
