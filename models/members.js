var bookshelf = require('../db/bookshelf');
var Subscription = require('./subscriptions');

var Members = bookshelf.Model.extend({
  tableName: 'members',
  subscription: function() {
    return this.belongsTo(Subscription);
  }
});

module.exports = Members;
