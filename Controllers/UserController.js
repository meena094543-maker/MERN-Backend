const user = require("../Models/UserModel");

const SignupUser = async (req,res) => {
    try {
        const {FullName,EmailAddress,MobileNumber,Password,ConfirmPassword,SelectDanceStyle} = req.body;

        const newUser = new user ({
        FullName,
        EmailAddress,
        MobileNumber,
        Password,
        SelectDanceStyle
        });
        const savedUser = await newUser.save();
        res.status(201).json({
            message: "User Created Successfully",
            user: savedUser
        });

    } catch (error) {
        res.status(402).json
    }
}


module.exports = {
    SignupUser,

};