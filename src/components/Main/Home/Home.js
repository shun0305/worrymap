import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PostView from './PostView';
import Map from './Map';


const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateRows: '80px 1fr 50px 1.5fr',
        textAlign: 'center',

    },
    head: {
        backgroundColor: "#00A3ff",
        display: "flex",
        alignItems: "center",

    },
    map: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "20px",
    },
    mapdetail: {
        width: "85%",
        height: "100%",
        borderRadius: "3%",
    },
    view: {
        display: 'flex',
        justifyContent: 'center',
    }

});

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.head}>
                <div style={{ marginLeft: "50px" }}><h1 style={{ fontSize: "40px", color: "#ffffff", borderBottom: "solid 5px #FFCC66" }}>Home</h1></div>
            </div>

            <div className={classes.map}>
                <Map />
            </div>

            <div>
                <h3>Warning List</h3>
            </div>

            <div className={classes.view}>
                <PostView />
            </div>
        </div>

    )
};

export default Home