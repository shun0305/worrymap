import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

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

const Header = () => {

    return (
        <ThemeProvider theme={theme}>
            <div style={{ marginLeft: "50px" }}><h1 style={{ fontSize: "40px", color: "#ffffff", borderBottom: "solid 5px #ffffff" }}>Home</h1></div>
        </ThemeProvider>
    );
}

export default Header