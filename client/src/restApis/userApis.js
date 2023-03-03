import axios from './axios';
import toast from 'react-hot-toast';

function alertSuccess(msg) {
    toast.success(msg)

}

function alertFailure(msg) {
    toast.error(msg)

}
const jwtLoginApi = async (accessToken) => {
    try {
        const res = await axios.post("/jwt/login", {
            data: accessToken

        })
        console.log(res.data)
        if (res.data.code === 200) {
            accessToken = res.data.data.accessToken;
            console.log("from generalAPi", res.data.data.accessToken)
            window.localStorage.setItem('accessToken', JSON.stringify(accessToken));
            return res.data.data.userData
        }
        else {
            return null
        }

    }
    catch (error) {
        console.log(error)
        // swal({
        //     text: "Error ! " + error,
        //     icon: "error",
        // })
    }



}

const userLoginApi = async (email, password) => {
    const res = await axios.post('/user/login',
        {
            data: {
                'email': email,
                'password': password,
            }
        })

    if (res.data.code === 200) {
        let accessToken = res.data.data._id
        window.localStorage.setItem('accessToken', JSON.stringify(accessToken));
        alertSuccess(res.data.msg)
        return res.data.data

    }
    else {
        alertFailure(res.data.msg)
        return false
    }
}

const userRegisterApi = async (email, password) => {
    const res = await axios.post('/user/register',
        {
            data: {
                'email': email,
                'password': password,
            }
        })

    if (res.data.code === 200) {
        alertSuccess(res.data.msg)
        return res.data.data

    }
    else {
        alertFailure(res.data.msg)
        return false
    }
}

const addContactApi = async (data) => {
    console.log(data)
    const res = await axios.post('/contact/add',
        {
            data: data
        })

    if (res.data.code === 200) {
        alertSuccess(res.data.msg)
        return res.data.data

    }
    else {
        alertFailure(res.data.msg)
        return false
    }
}

const getContactsApi = async (uid) => {
    // console.log(data)
    const res = await axios.get(`/contact/${uid}`)

    if (res.data.code === 200) {
        alertSuccess(res.data.msg)
        return res.data.data

    }
    else {
        alertFailure(res.data.msg)
        return false
    }
}
const updateContactApi = async (data) => {
    console.log(data)
    const res = await axios.post('/contact/update',
        {
            data: data
        })

    if (res.data.code === 200) {
        alertSuccess(res.data.msg)
        return res.data.data

    }
    else {
        alertFailure(res.data.msg)
        return false
    }
}
const deleteContactApi = async (contact, uid) => {
    console.log(contact)
    const res = await axios.post('/contact/delete',
        {
            data: {
                'contact': contact,
                'uid': uid
            }
        })

    if (res.data.code === 200) {
        alertSuccess(res.data.msg)
        return res.data.data

    }
    else {
        alertFailure(res.data.msg)
        return false
    }
}


export { jwtLoginApi, deleteContactApi, updateContactApi, getContactsApi, addContactApi, userLoginApi, userRegisterApi }