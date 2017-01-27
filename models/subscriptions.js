var bookshelf = require('../db/bookshelf');
var Members = require('./members');

var Subscription = bookshelf.Model.extend({
  tableName: 'subscriptions',
  members: function() {
    return this.hasMany(Members);
  }
});

module.exports = Subscription;
