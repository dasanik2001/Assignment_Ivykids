import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useUserAuth } from '../contexts/UserAuthContextProvider'
import { addContactApi } from '../restApis/userApis'

const ContactsForm = () => {
  const { user } = useUserAuth()
  const navigate = useNavigate()
  const [number, setNumber] = useState('')
  const [name, setName] = useState()
  const [type, setType] = useState()
  const [email, setEmail] = useState('')
  const handleSubmit = async () => {
    let data = {
      uid: user._id,
      name: name,
      type: type,
      contact: `${type === 'phone' ? number : email}`,

    }
    const t = await addContactApi(data)
    if (t) {
      navigate('/dashboard/default')
    }
  }
  const handleReset = () => {
    setName("");
    setNumber("");
    setType(null);
    setEmail("")
  };
  const handleDashboard = () => {
    navigate('/dashboard/default')
  }
  return (
    <div class="ui text container" style={{ marginTop: "20px", }}>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={handleDashboard}>
          Go to Dashboard
        </Button>


      </div>
      <Paper style={{ padding: '20px' }}>
        <h2> Add New Contact </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1em', padding: '20px' }}>
          <TextField
            onChange={(e) => {
              setName(e.target.value)
            }}
            value={name}
            label={"Enter Name of Person"} //optional
          />


          <FormControl fullWidth>
            <InputLabel id="select-label">Select Contact Type</InputLabel>
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
            label={"Enter Phone Number"} //optional
          />}
          {type === 'email' && <TextField
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
            label={"Enter Email ID"} //optional
          />}


          <Button onClick={handleSubmit} variant="contained">Add</Button>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      </Paper>
    </div>
  )
}

export default ContactsForm
