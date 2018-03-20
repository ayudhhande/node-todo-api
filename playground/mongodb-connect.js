const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID} = require('mongodb'); //alternate way to write the above ;ES6 destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongoDb');
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').insertOne({
    //     text:'Do something',
    //     completed:false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('There is some error:', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2)); //ops store all the docs that are inserted
    // });
    db.collection('Users').insertOne({
        name:'Ayudh',
        age: 25,
        location:'India',
        completed:false
    }, (err, result) => {
        if(err){
            return console.log('There is an error:', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});