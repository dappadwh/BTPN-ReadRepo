const redis = require('redis');
const client = redis.createClient();

function getValue(key, cb) {
    client.get(key, (err, res) => {
        if (err) cb(err, null);
        return cb(null, res)
    })
}

function setValue(key, value) {
    client.set(key, value)
}

module.exports = { getValue, setValue }