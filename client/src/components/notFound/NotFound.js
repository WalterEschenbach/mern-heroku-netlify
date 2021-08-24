import React from 'react'
import { useStyles } from './styles';

function NotFound() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            404 NotFound
        </div>
    )
}

export default NotFound