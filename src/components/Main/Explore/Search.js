import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({

    input: {
        marginLeft: theme.spacing(1),
        width: 400,
    },
    iconButton: {
        padding: 10,
    },

}));
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#00A3ff"
        },
        secondary: {
            main: "#ffffff"
        }
    }
});

const Search = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Paper >
                <InputBase
                    className={classes.input}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                    color="primary"
                />
                <IconButton type="submit"
                    className={classes.iconButton}
                    aria-label="search" color="primary">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </ThemeProvider>
    )
};

export default Search