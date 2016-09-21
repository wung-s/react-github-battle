var axios = require('axios');

// var param = '?client_id=' + id + '&client_secret=' + sec ;

function getUserInfo(username) {
  // return axios.get('https://api.github.com/users' + username + param)
  return axios.get('https://api.github.com/users/' + username);
}

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    }))
    .then(function(info) {
      console.log('info has', info);
      // return [info[0].data, info[1].data];
      return(info.map(function(user) {
        return user.data;
      }));
    })
    .catch(function(err){
      console.log('err: ', err);
    });
  }
}

module.exports = helpers;