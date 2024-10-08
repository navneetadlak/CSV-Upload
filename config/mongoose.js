const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/csvUploads');

mongoose.connect('mongodb://127.0.0.1:27017/csvUploads', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;