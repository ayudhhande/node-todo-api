// const {SHA256} = require('crypto-js');
const jws = require('jsonwebtoken');

var data = {
    id: 3,
};

var token = jws.sign(data, 'secretkey');
console.log('token: ',token);

var decoded = jws.verify(token, 'secretkey');
console.log('decoded: ',decoded);

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