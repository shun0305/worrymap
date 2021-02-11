import React from 'react';
import Button from '@material-ui/core/Button';
import ImageIcon from '@material-ui/icons/Image';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";



const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "flex-end",
    },
    button: {
        margin: theme.spacing(1),
        color: '#ffffff',

    },
    font: {
        color: '#ffffff',
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FFA500"
        },
        secondary: {
            main: "#00A3ff"
        }
    }
});

const Picture = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<ImageIcon className={classes.font} />}
                >
                    Image
            </Button>
            </div>
        </ThemeProvider>
    );
}

export default Picture;