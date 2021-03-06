import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import keys from '../auth/keys'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './styles';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                DayDecider
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignIn(props) {
    const classes = useStyles();
    let history = useHistory()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onGetUser = (e) => {
        e.preventDefault()

        axios({
            method: "GET",
            url: `${keys.domain.dev.server}/auth/checkauth`,
            withCredentials: true
        })
            .then((response) => console.log("Response:", response))
            .catch((error) => console.log("error:", error))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        axios({
            method: "POST",
            url: `${keys.domain.dev.server}/auth/signin`,
            withCredentials: true,
            data: {
                username,
                password
            }
        })
            .then((response) => {
                console.log("Response:", response)
                window.sessionStorage.setItem('user', JSON.stringify(response.data))
            })
            .then(() => {
                props.setUser(JSON.parse(window.sessionStorage.getItem('user')))
            }).then(() => {
                history.push('/dashboard')
            })
            .catch((error) => console.log("error:", error))
    }

    const onChangeUsername = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
    }
    const onChangePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={onChangeUsername}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={onChangePassword}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onSubmit}
                    >
                        Sign In
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onGetUser}
                    >
                        Get User
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href={`${keys.domain.dev.client}/signup`} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}