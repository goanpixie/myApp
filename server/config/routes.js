console.log('routes');
var friends = require('../controllers/friends')
module.exports = function(app){
  app.get('/friends', friends.index);
  app.get('/friends/:id/edit', friends.edit);
  app.get('/show/:id', friends.show);
  app.post('/friends', friends.create);
  app.post('/friends/:id', friends.update);
  app.get('/friends/:id/delete', friends.delete);
 
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.
}