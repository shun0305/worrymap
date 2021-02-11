import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";





const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '25ch',
        display: 'flex',
        flexDirection: 'column',
    },

}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FFCC99"
        },
        secondary: {
            main: "#00A3ff"
        }
    }
});



const InputArea = ({ setPlace, setTitle, setText, place, title, text }) => {
    const classes = useStyles();



    return (
        <ThemeProvider theme={theme}>
            <form className={classes.root}>
                <div>


                    <TextField

                        id="place"
                        label="Place"
                        placeholder="札幌"
                        value={place}
                        multiline
                        color="secondary"
                        onChange={(e) => {
                            setPlace(e.target.value)
                        }}

                    />

                    <TextField
                        id="title"
                        label="Title"
                        value={title}
                        placeholder="凍結"
                        multiline
                        color="secondary"
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}


                    />
                    <TextField
                        id="worry"
                        label=""
                        value={text}
                        placeholder="路面凍結して車が使えない"
                        multiline
                        rows={4}
                        style={{ width: '50ch', marginLeft: "15px", marginTop: "10px" }}
                        color="secondary"
                        onChange={(e) => {
                            setText(e.target.value);
                        }}

                    />
                </div>

            </form>
        </ThemeProvider>
    );
}

export default InputArea