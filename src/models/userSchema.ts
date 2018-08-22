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
        zipcode: {
            type: String,
        },
    },
    birthDay: {
        type: String,
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
    lastName: {
        type: String,
    },
    phone: {
        type: String,
    },
    userId: {
        require,
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
