import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { db } from '../../../firebase';
import firebase from 'firebase';
import Geocode from "react-geocode";


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




const ActionArea = ({ username, place, setPlace, title, setTitle, text, setText, onClick }) => {
    const classes = useStyles();

    Geocode.setApiKey("API-KEY");
    Geocode.setLanguage("ja");
    Geocode.setRegion("ja");

    function PushData() {
        Geocode.fromAddress(place).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                db.add({ // dbが送信先 送信データはオブジェクトの形
                    username: username,
                    place: place,
                    lat: lat,
                    lng: lng,
                    title: title,
                    text: text,
                    date: firebase.firestore.FieldValue.serverTimestamp(), // 登録日時
                });
            },
            error => {
                console.error(error);
            }
        );
    }






    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>

                <Button
                    disabled={place === '' && title === '' && text === ''}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={onClick}
                    endIcon={<DeleteIcon className={classes.font}
                    />}>
                    Delete
                </Button>

                <Button
                    disabled={place === '' || title === '' || text === ''}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<SendIcon className={classes.font} />}
                    onClick={() => {
                        PushData();
                        setTitle('');
                        setPlace('');
                        setText('');
                    }}>
                    Post
                </Button>
            </div>
        </ThemeProvider >
    );
}

export default ActionArea;