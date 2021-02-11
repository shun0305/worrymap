import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Result from './Result';

const useStyles = makeStyles(() => ({

    root: {
        display: 'grid',
        // height: '100vh',
        gridTemplateRows: '80px 50px 1fr',
        textAlign: 'center',

    },
    head: {
        height: "80px",
        backgroundColor: "#00A3ff",
        display: "flex",
        alignItems: "center",
    },
    search: {
        display: "flex",
        justifyContent: "center",
        maxWidth: '100%',

    }
}));



const Explore = (username) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.head}>
                <div style={{ marginLeft: "50px" }}><h1 style={{ fontSize: "40px", color: "#ffffff", borderBottom: "solid 5px #FFCC66" }}>Explore</h1></div>
            </div>

            <div className={classes.search}>
                <Result
                    username={username}
                />
            </div>
        </div>
    );
};

export default Explore