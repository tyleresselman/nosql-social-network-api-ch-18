const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialnetworkapidb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;