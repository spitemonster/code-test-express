const bookshelf = require('../db/bookshelf');
const Member = require('./member');

const Subscription = bookshelf.model('Subscription', {
  tableName: 'subscriptions',
  members() {
    return this.hasMany(Member);
  }
});

module.exports = Subscription;
