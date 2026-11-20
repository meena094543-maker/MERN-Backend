const Monoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
    FullName:{type: String,require: true},
    EmailAddress:{type: String,require: true},
    MobileNumber:{type: String,require: true},
    Password:{type: String,require: true},
    ConfirmPassword:{type: String,require: true},
    SelectDanceStyle:{type: String,require: true},
    role:{type: String,default: user},
});

module.exports = Mongoose.model("User",UserSchema);