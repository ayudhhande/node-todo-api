const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log(err);
    }
    console.log('Successfully connected to Mongodb');

    //deleteMany

    // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne

    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Mike'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5ab01a5b9eb5791756de9f26')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
});