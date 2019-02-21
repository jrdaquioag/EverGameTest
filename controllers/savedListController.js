const db = require('../models');

module.exports = {

    test: function (req, res) {
        console.log(req.body);
        db.User.find({ email: req.body.email })  // or username
            .then(user => {
                if (user)
                    db.SavedList.create(req.body)
                        .then(game => res.json(game))
                        .catch(err => res.status(422).json(err));
            })
    },

    populate: function (req, res) {
        db.User.findOne({ email: req.body.email })
            .populate('savedList')
            .exec(function (err, response) {
                if (err) return console.log(err);
                console.log(response);
            }
            )
    },
    addNewGame: function (req, res) {
        console.log(req.body.newItemInfo)
        db.SavedList.create(req.body.newItemInfo)
            .then(list => res.json(list))
            .catch(err => console.log(err))
    },
    getUserGameList: function (req, res) {
        db.SavedList.find({ userId: req.body.id })
            .then(list => res.json(list))
            .catch(err => console.log(err))
    },
    deleteOneGame: function (req, res) {
        db.SavedList.remove({ _id: req.body._id })
            .then(response => res.json(response))
            .catch(err => console.log(err))
    }
}