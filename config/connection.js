const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social_network_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(

    () => { console.log('mongoose has successfully connected') },
    err => { console.log(err) }
);

module.exports = mongoose.connection;

