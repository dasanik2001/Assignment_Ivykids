


import { Button, Card, Checkbox, Grid, TextField } from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useUserAuth } from "../contexts/UserAuthContextProvider";
import { userLoginApi } from "../restApis/userApis";
const FlexBox = styled(Box)(() => ({ display: "flex", alignItems: "center" }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: "center" }));

const ContentBox = styled(Box)(() => ({
    height: "85vh",
    padding: "32px",
    position: "relative",
    background: "rgba(0, 0, 0, 0.01)",
}));

const JWTRoot = styled(JustifyBox)(() => ({
    background: "#EBECF0",
    minHeight: "100% !important",
    "& .card": {
        maxWidth: 800,
        minHeight: 400,
        margin: "1rem",
        display: "flex",
        borderRadius: 12,
        alignItems: "center",
    },
}));

const Register = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [loading, setLoading] = useState(false);
    const { userRegister } = useUserAuth();
    const [confPass, setconfPass] = useState('')

    const handleFormSubmit = async (values) => {
        setLoading(true);
        try {
            if (pass === confPass) {
                const temp = await userRegister(email, pass);
                console.log("from user", temp);
                if (temp) navigate("/login");
                else {
                    navigate("/");
                }
            }
            else {
                alert('Password did not match!!')
            }
            // console.log(email, pass);

        } catch (e) {
            console.log("Error in moving", e);
            setLoading(false);
        }
    };

    return (
        <JWTRoot>
            <Card className="card">



                <Grid item sm={6} xs={12}>
                    <ContentBox>
                        <h1> User Register</h1>
                        {/* <form onSubmit={handleFormSubmit}> */}
                        <TextField
                            fullWidth
                            size="small"
                            type="email"
                            name="email"
                            label="Email"
                            variant="outlined"

                            value={email}
                            onChange={(e => {
                                setEmail(e.target.value)
                            })}

                            sx={{ mb: 3 }}
                        />

                        <TextField
                            fullWidth
                            size="small"
                            name="password"
                            type="password"
                            label="Password"
                            variant="outlined"
                            value={pass}
                            onChange={(e => {
                                setPass(e.target.value)
                            })}

                            sx={{ mb: 1.5 }}
                        />

                        <TextField
                            fullWidth
                            size="small"
                            name="password"
                            type="password"
                            label="Confirm Password"
                            variant="outlined"
                            value={confPass}
                            onChange={(e => {
                                setconfPass(e.target.value)
                            })}

                            sx={{ mb: 1.5 }}
                        />



                        <Button
                            type="submit"
                            color="primary"
                            loading={loading}
                            variant="contained"
                            sx={{ my: 2 }}
                            onClick={handleFormSubmit}
                        >
                            Register
                        </Button>





                        {/* </form> */}

                    </ContentBox>
                </Grid>

            </Card>
        </JWTRoot >
    );
};

export default Register;
