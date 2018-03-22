var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost:27017/TodoApp'); //configured model to connect to db

module.exports = {mongoose};

