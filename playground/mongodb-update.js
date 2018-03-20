const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log(err);
    }
    console.log('Successfully connected to Mongodb');

    // db.collection('Todos').findOneAndUpdate({_id :new ObjectID("5ab0183a4622be166888d67c")},
    // {$set: {
    //     complete:true
    // },returnOriginal: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5ab08fa47dd1fb13f2380b85')},
    {
        $set:{name: 'Mike'},
        $inc:{age :2}
    },
    {returnOriginal:false}).then((result) => {
    console.log(result);
});  

});