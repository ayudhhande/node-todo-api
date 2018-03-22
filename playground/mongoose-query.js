var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

// var id = '5ab37e530307f9361d29b226';
var id = '5ab1e31226d9fdbc12889f9a';

if(!ObjectID.isValid(id)){
    console.log('Id is not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos find',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todos) => {
//     console.log('Todo findOne', todos);
// });

// Todo.findById(id).then((todos) => {
//     if(!todos){
//         return console.log('Id not found');
//     }
//     console.log('Todo findById', todos);
// }).catch((e) => {console.log(e)});

User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log(user);
}).catch((e) => {console.log(e)});