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


exports.UpdateContact = async (req, res) => {
    try {
        const { data } = req.body
        console.log(data)
        const query = { uid: data.uid, "contact.name": data.name };
        const updateDocument = {
            $set: {
                "contact.$.type": data.type, "contact.$.contact": data.contact,
            }
        };
        const t = await ContactDetails.updateOne(query, updateDocument
        )
        console.log(t)
        res.send({ code: 200, data: true, msg: 'Contact Modified Sucesfully!!' })
    }
    catch (error) {
        res.send({ code: 500, msg: error.msg })
    }
}

exports.deleteContact = async (req, res) => {
    try {
        const { data } = req.body
        console.log(data.contact)
        const query = { uid: data.uid, "contact.name": data.contact.name };
        const updateDocument = { $pull: { contact: { contact: data.contact.contact, } } };
        const t = await ContactDetails.updateOne(query, updateDocument
        )
        console.log(t)
        res.send({ code: 200, data: true, msg: 'Contact Deleted Sucesfully!!' })
    }
    catch (error) {
        res.send({ code: 500, msg: error.msg })
    }
}