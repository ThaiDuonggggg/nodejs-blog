const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Connect Successfully!!');
    } catch (error) {
        console.log('Connect Failure');
    }
};

module.exports = { connect };
