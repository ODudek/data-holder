import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username: {
        type: String,
        require
    },
    email: {
        type: String,
        require
    },
    firstName: {
        type: String
    },
    surname: {
        type: String
    },
    address: {
        street: {
            type: String
        },
        suite: {
            type: String
        },
        city: {
            type: String
        },
        zipcode: {
            type: String
        },
    },
    phone: {
        type: Number
    },
    website: {
        type: String
    },
    compoany: {
        name: {
            type: String
        }
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});
