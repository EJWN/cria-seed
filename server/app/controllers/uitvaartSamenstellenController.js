/*jslint node: true */
"use strict";

var mongoose = require('mongoose'),
    uitvaartSamenstellen = mongoose.model('uitvaartSamenstellen');

exports.detail = function (req, res) {
    var conditions, fields;

    conditions = {_id: req.params._id};
    fields = {};

    uitvaartSamenstellen.findOne(conditions, fields).exec(function (err, doc) {
        var retObj = {
            meta: {"action": "detail", 'timestamp': new Date(), filename: __filename},
            doc: doc,
            err: err
        };
        return res.send(retObj);
    });
};
