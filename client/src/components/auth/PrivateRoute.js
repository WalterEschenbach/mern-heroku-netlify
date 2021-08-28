import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import keys from './keys'

import CircularProgress from '@material-ui/core/CircularProgress';


export default function PrivateRoute({ comp: Component, ...rest }) {
    const [authStatus, setAuthStatus] = useState(null)

    useEffect(() => {
        axios({
            method: 'get',
            url: `${keys.domain.dev.server}/ping`,
            withCredentials: true
        })
            .then((response) => {
                if (response?.data === "not logged in") {
                    console.log('no user logged in')
                    setAuthStatus(false)
                    window.sessionStorage.removeItem('user')
                } else {
                    setAuthStatus(true)
                }
            })
            .catch((error) => {
                console.log('Error:', error)
            })
    }, [])

    return (
        <Route {...rest} render={(props) => {
            switch (authStatus) {
                case null: {
                    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", width: "100%", height: "100vh" }}><CircularProgress color="secondary" /></div>
                }
                case true: {
                    return <Component {...props} />;
                }
                case false: {
                    return <Redirect to={{
                        pathname: '/signin',
                        state: {
                            from: props.location
                        }
                    }} />
                }
                default: {
                    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", width: "100%", height: "100vh" }}><CircularProgress color="secondary" /></div>
                }
            }
        }}
        />
    )
}