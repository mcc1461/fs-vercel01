const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

// const UserModel = mongoose.model('users', UsersSchema);

// module.exports = UserModel;

module.exports = mongoose.model('User', UsersSchema);



