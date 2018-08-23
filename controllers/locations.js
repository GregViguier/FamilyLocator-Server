var mongoose = require('mongoose');
var moment = require('moment')

Location = mongoose.model('Location');

exports.saveLocation = function (req, res) {
    const location = new Location(req.params);
    location.save(function (err) {
        if (err)
            res.send(err);
        res.send({ message: 'Location saved' });
    });
};

exports.findLocationsSince = function (req, res) {
    var sinceDate = moment().subtract(req.params.since, 'day').startOf('day').toDate();
    Location.find({ name: req.params.name, date: { $gte: sinceDate } }).select('date lat lng').sort('date').exec(function (err, locations) {
        if (err)
            res.send(err);
        res.json(locations);
    });
};
