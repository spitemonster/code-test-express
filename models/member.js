const bookshelf = require('../db/bookshelf');
const Subscription = require('./subscription');

const Member = bookshelf.model('Member', {
  tableName: 'members',
  subscription() {
    return this.belongsTo(Subscription);
  }
});

module.exports = Member;
