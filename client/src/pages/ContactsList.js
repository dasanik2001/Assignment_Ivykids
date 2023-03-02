import { Box, Button, Card, Icon, IconButton, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useUserAuth } from '../contexts/UserAuthContextProvider'
import { getContactsApi } from '../restApis/userApis'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';
const ContactsList = () => {
  const [contactList, setContactlist] = useState([])
  const { user } = useUserAuth()
  const navigate = useNavigate()
  const getallContacts = async () => {
    const t = await getContactsApi(user._id)
    console.log(t)
    setContactlist(t)
  }
  const handleDashboard = () => {
    navigate('/dashboard/default')
  }
  useEffect(() => {
    getallContacts()


  }, [])

  return (
    <div class="ui text container" style={{ marginTop: "20px", }}>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={handleDashboard}>
          Go to Dashboard
        </Button>
        <Button onClick={getallContacts}>
          Refresh
        </Button>

      </div>
      <div>
        <Card elevation={3}>

          <Box>

            <TableHead>
              <TableRow style={{ justifyContent: 'space-around' }}>
                <TableCell align="center" colSpan={2}>
                  #
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Name
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Type
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Contact
                </TableCell>

                <TableCell align="center" colSpan={1}>
                  Edit
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contactList.length > 0 &&
                contactList.map((contact, index) => (
                  <TableRow key={index} hover>
                    <TableCell colSpan={2} align="center" sx={{ px: 0 }}>
                      {index + 1}
                    </TableCell>

                    <TableCell align="center" colSpan={2} sx={{ px: 0 }}>
                      {contact.name}
                    </TableCell>
                    <TableCell align="center" colSpan={2} sx={{ px: 0 }}>
                      {contact.type}
                    </TableCell>
                    <TableCell align="center" colSpan={2} sx={{ px: 0 }}>
                      {contact.contact}
                    </TableCell>


                    <TableCell align="center" colSpan={1}>
                      <EditIcon />
                    </TableCell>

                    <TableCell align="center" colSpan={1}>
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Box>
        </Card>
      </div>
    </div>
  )
}

export default ContactsList
