const db = require('../models');
const mongoose = require('mongoose');



module.exports = {
    getUserName: function (req, res) {
        const objId = mongoose.Types.ObjectId(req.body.id)
        console.log("this is the objectId" + objId)
        // db.User.findOne({ _id: objId })
        db.User.find({ _id: req.body.id })
            .then(data => { console.log(); res.json(data) })
            .catch(err => console.log(err))
    }
}