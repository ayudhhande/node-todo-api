// const {MongoClient, ObjectID} = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log(err);
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').find({
    //     // _id :'5ab08aa0b549ed4d039a7fb4'}) //won't work
    //     _id : new ObjectID('5ab08aa0b549ed4d039a7fb4')}) //need to create new obj
    //     .toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log(err); 
    // });

    db.collection('Users').find({name: 'Ayudh'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    },(err) => {
        console.log(err);
    });
});