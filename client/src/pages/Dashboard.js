import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUserAuth } from "../contexts/UserAuthContextProvider";

const Dashboard = () => {
    const { logout } = useUserAuth()
    const handleLogout = () => {
        logout()
    }
    return (
        <div class="ui text container" style={{ marginTop: "20px" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <div className="ui two item menu">
                    <NavLink
                        className="item"
                        activeClassName="active"
                        exact
                        to="/contacts/list"
                    >
                        Contacts List
                    </NavLink>
                    <NavLink
                        className="item"
                        activeClassName="active"
                        exact
                        to="/contacts/add"
                    >
                        Add Contact
                    </NavLink>
                </div>
                <div
                    class="ui button "
                    tabindex="0"
                    style={{ marginLeft: "20px", alignItems: "flex-end" }}
                >
                    <Button onClick={handleLogout}> Log Out!!</Button>

                </div>
            </div>
        </div>)
}

export default Dashboard
