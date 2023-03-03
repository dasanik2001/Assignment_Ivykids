import React, { useState, useEffect } from "react";
import {
    Box,
    Button,

    Modal,

    TextField,
    Typography,

    styled,
    MenuItem,
    Select,
    InputLabel,
    FormControl,

} from "@mui/material";

import {

    updateContactApi,

} from "../restApis/userApis";
import { useNavigate } from "react-router";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    heightMax: "100%",
    bgcolor: "background.paper",
    boxShadow: 24,
    overFlow: "auto",
    p: 4,
};
const EditModal = ({

    modalState,
    setModalState,
    currentContact,
    getallContacts,
    user }) => {

    const navigate = useNavigate()

    const [number, setNumber] = useState('')
    const [name, setName] = useState()
    const [type, setType] = useState()
    const [email, setEmail] = useState('')
    const handleReset = () => {
        setName("");
        setNumber("");
        setType(null);
        setEmail("")
    };
    const handleUpdate = async () => {
        let data = {
            uid: user._id,
            name: name,
            type: type,
            contact: `${type === 'phone' ? number : email}`,

        }
        const t = await updateContactApi(data)
        if (t) {
            setModalState(false)
            getallContacts()
        }


    };

    useEffect(() => {

        console.log(currentContact);
        setName(currentContact.name);
        setType(currentContact.type)
        { type === 'phone' ? setNumber(currentContact.contact) : setEmail(currentContact.contact) }



    }, []);

    return (
        <div>
            <Modal
                open={modalState}
                onClose={
                    () => {
                        setModalState(false)
                    }

                }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Typography id="modal-modal-title" variant="h6" component="h2" paddingBottom='20px'>
                        Enter Contact Details for {name}
                    </Typography>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            paddingBottom: "20px",
                        }}
                    >



                        <FormControl fullWidth >
                            <InputLabel id="select-label" >Select Contact Type</InputLabel>
                            <Select
                                labelId="elect-label"
                                id="select"
                                value={type}

                                label="Type of Contact"
                                onChange={(e) => {
                                    setType(e.target.value)
                                }}
                            >
                                <MenuItem value={'phone'}>Phone</MenuItem>
                                <MenuItem value={'email'}>Email</MenuItem>
                            </Select>
                        </FormControl>
                        {type === 'phone' && <TextField
                            onChange={(e) => {
                                setNumber(e.target.value)
                            }}
                            value={number}
                            style={{ margin: '20px' }}
                            label={"Enter Phone Number"} //optional
                        />}
                        {type === 'email' && <TextField
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            value={email}
                            style={{ margin: '20px' }}
                            label={"Enter Email ID"} //optional
                        />}




                        <Button onClick={handleUpdate} variant="contained">Update</Button>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                </Box>

            </Modal>
        </div >
    );
};

export default EditModal;
