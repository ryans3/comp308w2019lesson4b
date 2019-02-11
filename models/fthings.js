let mongoose = require('mongoose');

// create a model class
let fthingsSchema = mongoose.Schema({
    name: String,
    description: String,
    
},
{
    collection: "favourite_things"
});

module.exports = mongoose.model('test', fthingsSchema);