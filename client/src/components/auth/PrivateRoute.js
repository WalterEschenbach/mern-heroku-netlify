import React, { useEffect, useState, useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';

//import UserProvider from '../UserProvider'
//import { Spinner } from 'react-bootstrap'

export default function PrivateRoute({ comp: Component, ...rest }) {
    const [authStatus, setAuthStatus] = useState(null)

    // const data = useContext(UserProvider.context)


    // useEffect(()=>{
    //     if(data?.data) setAuthStatus(true)
    //     else if(data===false) setAuthStatus(false)
    // },[data])

    useEffect(() => {
        setAuthStatus(true)
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
                        pathname: '/signup',
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