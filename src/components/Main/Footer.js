import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const useStyles = makeStyles({
        root: {
            width: 500,
            backgroundColor: "#00A3ff",
        },
        link: {
            color: "#ffffff"
        }

    });
    const classes = useStyles();
    const [value, setValue] = React.useState('Home');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#ffffff"
            },
            secondary: {
                main: "#00A3ff"
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>

                <BottomNavigationAction label="Home" value="Home"
                    icon={
                        <NavLink to="/" exact className={classes.link}>
                            <HomeIcon fontSize="large" />
                        </NavLink>
                    } />

                <BottomNavigationAction label="Warning" value="Warning"
                    icon={
                        <NavLink to='/warn' className={classes.link}>
                            <AnnouncementIcon fontSize="large" />
                        </NavLink>
                    } />

                <BottomNavigationAction label="Explore" value="Explore"
                    icon={
                        <NavLink to='/explore' className={classes.link}>
                            <SearchIcon fontSize="large" />
                        </NavLink>
                    } />

            </BottomNavigation>
        </ThemeProvider>
    );


};

export default Footer