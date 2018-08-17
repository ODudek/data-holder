import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    address: {
        city: {
            type: String,
        },
        street: {
            type: String,
        },
        suite: {
            type: String,
        },
        zipcode: {
            type: String,
        },
    },
    company: {
        name: {
            type: String,
        },
    },
    createdDate: {
        default: Date.now,
        type: Date,
    },
    email: {
        require,
        type: String,
    },
    firstName: {
        type: String,
    },
    phone: {
        type: Number,
    },
    surname: {
        type: String,
    },
    username: {
        require,
        type: String,
    },
    website: {
        type: String,
    },
});
