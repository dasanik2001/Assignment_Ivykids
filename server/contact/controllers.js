const ContactDetails = require('./contactSchema')

exports.AddContact = async (req, res) => {
    try {
        const { data } = req.body
        console.log(data)
        const t = await ContactDetails.updateOne({ uid: data.uid }, {
            $push: {
                "contact": {
                    name: data.name,
                    type: data.type,
                    contact: data.contact
                }
            }
        })
        console.log(t)
        res.send({ code: 200, data: true, msg: 'Contact Added Sucesfully!!' })
    }
    catch (error) {
        res.send({ code: 500, msg: error.msg })
    }
}

exports.getallContacts = async (req, res) => {

    try {
        const { uid } = req.params
        console.log(uid)
        const t = await ContactDetails.findOne({ uid: uid })
        console.log(t)
        res.send({ code: 200, data: t.contact, msg: 'Data Fetched Succesfully!' })



    } catch (error) {
        res.send({ code: 500, msg: error.msg })
    }


}
