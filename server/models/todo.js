var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {     //created a model specifying the attribute
    text:{
        type: String,
        required:true,
        trim:true,      //remove the extra whitespace
        minlength:1
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default:null
    },
    _creator:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

module.exports = {Todo};