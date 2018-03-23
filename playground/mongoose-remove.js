var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

// Todo.findOneAndRemove({_id:'5ab480a6da366f6276702fd8'}).then((todo) => {
//     console.log(todo);
// });

// Todo.findByIdAndRemove('5ab3b794499a563c5147facc').then((todo) => {
//     console.log(todo);
// });