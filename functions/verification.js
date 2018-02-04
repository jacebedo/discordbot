exports.isValidCommand = function(message) {
  if (message.search("./") == 0) {
    return true;
  } else {
    return false;
  }
}
