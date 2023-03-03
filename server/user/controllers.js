const UserDetails = require('./userSchema')
const contactDetails = require('../contact/contactSchema')

exports.UserLogin = async (req, res) => {
    try {
        const { email, password } = req.body.data
        console.log(email)
        const t = await UserDetails.findOne({ email: email })
        console.log(t)

        res.send({ code: 200, data: t, msg: 'User Login Succesfully!!' })
    } catch (error) {
        res.send({ code: 500, msg: error.msg })

    }

}

exports.JwtLogin = async (req, res) => {
    try {
        const { data } = req.body
        console.log(data)
        const t = await UserDetails.findById(data)
        console.log(t)

        res.send({ code: 200, data: { accessToken: t._id, userData: t }, msg: 'User Login Validated!!' })
    } catch (error) {
        res.send({ code: 500, msg: error.msg })

    }

}

exports.UserRegister = async (req, res) => {

    try {
        const { email, password } = req.body.data
        console.log(email, password)
        const t = await new UserDetails({
            email: email,
            password: password
        }).save()
        console.log(t)
        const userid = t._id.toString()
        console.log(userid.toString())
        await new contactDetails({
            uid: userid,
            contact: []
        }).save()

        console.log('done')
        res.send({ code: 200, data: t, msg: 'User Created Succesfully!!' })


        // console.log(t)

        // console.log(c)

    } catch (error) {
        console.log(error)

        res.send({ code: 500, msg: error.msg })

    }



}