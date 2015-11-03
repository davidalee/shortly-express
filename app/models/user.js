var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'user',
  hasTimestamps: true,
  initialize: function(){
    this.on('creating', function(model, attrs, options){
      var password = bcrypt.hashSync(model.attributes.password);
      model.set({username: model.attributes.username, password: password});
    });
  }

});

module.exports = User;

