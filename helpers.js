var User = require("./models/user");
var Login = require("./models/login");

var bcrypt = require('bcrypt');

//USER-CANDIDATE-COMPANY
exports.createUser = async (data, id) => {
    try {
        
        let user_info = {
            email: data.email,
            password: data.password,
            type: data.type
        }
    
        switch (data.type) {
            case 1:
                user_info.candidate = id;
                break;
            case 2:
                user_info.company = id;
                break;
        }

        let newUser = new User(user_info);
        let user = await newUser.save();

        return {success:true, info: user};

    } catch (error) {
        return {success:false, error};
    }
}

exports.comparePassword = async (pw, hash_pw) => {
    try {

        let isMatch = await bcrypt.compare(pw, hash_pw);
        return isMatch;

    } catch (error) {
        console.log(error);
    }
}

exports.saveLogin = async (id, origin) => {
    try {
        let login_info = {
            user_id: id,
            origin
        };  
        let newLogin = new Login(login_info);
        let login = newLogin.save();
    } catch (error) {
        return error;
    }
}