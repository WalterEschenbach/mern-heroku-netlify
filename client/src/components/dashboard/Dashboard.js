import React from 'react'
import { useStyles } from './styles';
import axios from 'axios'
import keys from '../auth/keys'

import { useAuth } from '../auth/AuthContext'

function Dashboard() {
    const classes = useStyles();
    const currentUser = useAuth();

    console.log(currentUser)

    const ping = () => {
        axios({
            method: 'get',
            url: `${keys.domain.dev.server}/ping`,
            withCredentials: true
        })
            .then((response) => {
                console.log('Response:', response)
            })
            .catch((error) => {
                console.log('Error:', error)
            })
    }

    return (
        <div className={classes.root}>
            <h1>PRIVATE ROUTE</h1>
            <button className={classes.pingButton} onClick={ping}>PING</button>
            <h1>{currentUser?.currentUser?.email}</h1>
        </div>
    )
}

export default Dashboard