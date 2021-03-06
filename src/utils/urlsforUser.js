const urlDatabase = require('../data/urlDatabase');


/**
 * This function finds the urls for user from a id
 * and sets an object
 * @param {string} id
 */
const urlsforUser = function(id) {
  let urlsforUser = {};
  for (let urlID in urlDatabase) {
    if (urlDatabase[urlID].userID === id) {
      urlsforUser[urlID] = urlDatabase[urlID];
    }
  }
  return urlsforUser;
};

module.exports = urlsforUser;

