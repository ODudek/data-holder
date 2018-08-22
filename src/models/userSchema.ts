import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    address: {
        city: String,
        street: String,
        zipcode: String,
    },
    birthDay: String,
    company: {
        name: String,
    },
    createdDate: {
        default: Date.now,
        type: Date,
    },
    email: {
        require,
        type: String,
    },
    firstName: String,
    lastName: String,
    phone: String,
    userId: {
        require,
        type: String,
    },
    username: {
        require,
        type: String,
    },
    website: String,
});
