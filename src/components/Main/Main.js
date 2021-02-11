import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Home from './Home/Home';
import Warn from './Warn/Warn';
import Explore from './Explore/Explore';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        display: 'grid',
        height: '100vh',
        gridTemplateRows: '1fr 100px',
        textAlign: 'center',

    },
    head: {
        backgroundColor: "#00A3ff",
        display: "flex",
        alignItems: "center",
    },
    foot: {
        backgroundColor: "#00A3ff",
        display: "flex",
        justifyContent: "center",
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
        border: "4px solid #00A3ff"
    }

});



const Main = ({ username }) => {
    const classes = useStyles();


    return (

        <Router>
            <div className={classes.root}>
                <Switch>
                    <Route path="/" exact
                        render={(props) => (
                            <Home {...props} username={username} />
                        )} />
                    <Route path="/warn" exact
                        render={(props) => (
                            <Warn {...props} username={username} />
                        )} />
                    <Route path="/explore" exact
                        render={(props) => (
                            <Explore {...props} username={username} />
                        )} />
                </Switch>
                <div className={classes.foot}>
                    <Footer />
                </div>
            </div>
        </Router>

    )
}

export default Main;