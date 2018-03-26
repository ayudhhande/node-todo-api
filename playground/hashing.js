const {SHA256} = require('crypto-js');
const jws = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// var password = 'abc123';

// bcrypt.genSalt(10,(err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$ojWBblVna89Ge0zt5e/uCOE7oRtNDM/fB3zWSAqtcN/MzFqta5l3S';
bcrypt.compare('abc123', hashedPassword, (err, res) => {
    console.log(res);
});


// var data = {
//     id: 3,
// };

// var token = jws.sign(data, 'secretkey');
// console.log('token: ',token);

// var decoded = jws.verify(token, 'secretkey');
// console.log('decoded: ',decoded);

// var token ={
//     data,
//     hash:SHA256(JSON.stringify(data)+ 'secretkey').toString()
// };

// var resulthash = SHA256(JSON.stringify(token.data) + 'secretkey').toString();

// if(resulthash === token.hash){
//     console.log('data not changed');
// }else{
//     console.log('Data is changed ,do not trust');
// }