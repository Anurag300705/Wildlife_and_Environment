// const chalk = require('chalk');
const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('../middlewares/sendMail')
const tryCatch = require('../middlewares/tryCatch')


const register = async (req, res) => {
    try {
        const chalk = await import('chalk');
        const { username, email, password } = req.body


        //check for existing user
        let user = await User.findOne({ "name": username })
        if (user) {
            return res.status(469).json({
                message: "Tor naam ache re",
            })
        }

        // //Password hash
        const saltRounds = 11
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPass = await bcrypt.hash(String(password), salt)


        const newUser = new User({
            name: username,
            email,
            password: hashedPass
        })
        try {
            await newUser.save();
            console.log(chalk.default.blue('User saved'));
            res.status(200).json({
                message: "User save hoye geche",
            })
            // res.redirect('http://localhost:5173');
        } catch (err) {
            console.log("This is an error:", err);
            res.status(500).send('Internal Server Error');
        }
        console.log(chalk.default.green('done'))
        //jwt
        // const otp = Math.floor(Math.random() * 1000000)
        // const activationToken = jwt.sign({
        //     user,
        //     otp,
        // }, process.env.SECRET_KEY, {
        //     expiresIn: "5m",
        // })

        // const data = {
        //     otp
        // }

        // await sendMail(username, "Wildlife otp", data)




        // res.status(201).json({
        //     message: "Otp send to your mail",
        //     activationToken
        // })
    } catch (err) {
        res.status(401).json({
            message: "Gar mereche"
        })
        console.log(err);
    }

}

const login = async (req,res) =>{
    
}

// const verifyUser = async (req, res) => {
//     const { otp, activationToken } = req.body;


//     const verify = jwt.verify(activationToken, process.env.SECRET_KEY)

//     if (!verify) {
//         res.send(400).json({
//             message: "otp is expired"
//         })
//     }

//     if (verify) {
//         if (verify.otp !== otp) {
//             res.send(401).json({
//                 message: "otp is wrong"
//             })
//         }
//     }

//     //creating new user
//     const newUser = new User({
//         name: verify.user.name,
//         password: verify.user.password
//     })

//     res.json({
//         message: "User registered"
//     })

// }

const myProfile = (req, res) => {
    res.send("Hello")
}
module.exports = { register, myProfile }