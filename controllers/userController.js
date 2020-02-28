var User = require("../models/user");
var Candidate = require("../models/candidate");
var Company = require("../models/company");

var mongoose = require('mongoose');

var jwt = require('jsonwebtoken');
var config = require('../config/database');

var helpers = require("../helpers");

exports.registerUser = async (req, res) => {

    try {

        let data = req.body;
        let info = req.body.info; //Info for candidate or company

        if (!data.password || !info.name) {
            return res.json({ success: false, msg: 'Missing required information.', error_code: 1 });
        }

        let user_exists = await User.exists({ email: data.email });

        if (user_exists)
                return res.json({ success: false, msg: 'Email already exists.', error_code: 3 });

        var newInfo = null;

        switch (data.type) {
            case 1:
                newInfo = new Candidate({
                    name: info.name,
                    address: info.address,
                    city: info.city,
                    desired_job: info.desired_job,
                    cv: info.cv,
                    profile_picture: info.profile_picture,
                    social_media: info.social_media
                });
                break;
            case 2:
                newInfo = new Company({
                    name: info.name,
                    address: info.address,
                    city: info.city,
                    desired_job: info.desired_job,
                    cv: info.cv,
                    profile_picture: info.profile_picture,
                    social_media: info.social_media
                });
                break;
            default:
                throw "Type "+data.type+" doesn't exist";
        }

        let info_created = await newInfo.save();
        let user = await helpers.createUser(data, info_created._id);
        
        if (user.success)
            return res.json({ success: true, msg: 'Successful creating new user.', user: user.info, info: info_created });
        else
            return res.json({ success: false, msg: 'Error creating user.', error_code: 4 });

    } catch (error) {
        return res.json({ success: false, msg: 'Error while creating user', error });
    }
}

exports.loginUser = async (req, res) => {

    try {

        let data = req.body;
        let user = await User.findOne({ email: data.email});
        
        if (user) {

            let isMatch = await helpers.comparePassword(data.password, user.password);
            
            if (isMatch) {
                var token = jwt.sign( {data:user}, config.secret);

                helpers.saveLogin(user._id, data.origin);

                res.json({ success: true, token: 'JWT ' + token });
            } else {
                res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
            }

        } else 
            res.status(401).send({ success: false, msg: 'Authentication failed. User not found.', error_code: 401 });

    } catch (error) {
        throw error;
    }
}

