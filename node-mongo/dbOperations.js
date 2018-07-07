var assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
    var coll = db.collection(collection);
    coll.insert(document, (err, res) => {
        assert.equal(err, null);
        console.log('Inserted : ' + res.result.n + " documents into collection : " + collection);
        callback(res);
    })
};


exports.findDocuments = (db, collection, callback) => {
    var coll = db.collection(collection);
    coll.find({}).toArray((err, res) => {
        assert.equal(err, null);
        console.log('Found ' , res);
        callback(res);
    });

};



exports.removeDocument = (db, document, collection, callback) => {
    var coll = db.collection(collection);
    collection.deleteOne(document, (err, res) => {
        assert.equal(err, null);
        console.log('Deleted One : ' + res);
        callback(res)
    })

};


exports.updateDocument = (db, document, update, collection, callback) => {
    var coll = db.collection(collection);
    coll.updateOne(document, { $set: update }, null, (err, res) => {
        assert.equal(err, null);
        console.log('Updated : ' + res);
        callback(res);
    })

};