
/*
 * This function takes a message, and returns true if the message is
 * prefixed with a './' and false otherwise.
 *
 */

exports.isValidCommand = function(message) {
  if (message.search("./") == 0) {
    return true;
  } else {
    return false;
  }
}
