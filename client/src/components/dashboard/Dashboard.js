import React from 'react'
import { useStyles } from './styles';
import axios from 'axios'

function Dashboard() {
    const classes = useStyles();

    const ping = () => {
        axios({
            method: 'post',
            url: "https://mern-heroku-netlify-server.herokuapp.com/ping",
            withCredentials: true,
            data: {
                test: "PING 8!"
            }
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
            <button className={classes.pingButton} onClick={ping}>PING</button>
        </div>
    )
}

export default Dashboard