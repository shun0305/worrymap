import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    signtop: {
        marginTop: "150px",
    },
    header: {
        color: "#00A3ff",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: "#00A3ff",
        backgroundColor: "#ffffff",
    },

    inputarea: {
        backgroundColor: "#ffffff",
    },

    text: {
        color: "#ffffff"
    },

    cover: {
        width: "100%",
        height: "100vh",
        color: "#ffffff",
        backgroundColor: "#00A3ff",
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FFCC99"
        },
        secondary: {
            main: "#ffffff"
        }
    }
});

export default function SignIn({ setUserName, username }) {
    const classes = useStyles();
    const [string, setString] = useState('');//初期値は空白
    const [disabled, setDisabled] = useState(true);//初期値はtrue
    const [isComposed, setIsComposed] = useState(false);

    //文字が入力されたらボタンが活性化
    useEffect(() => {
        const disabled = string === '' //空文字はtrue
        setDisabled(disabled)
    }, [string]);//stringに変化が生じた時、関数実行

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.header}>
                <h2>WELCOME</h2>
            </div>
            <div className={classes.cover} >

                <Container component="main" maxWidth="xs"
                >
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography className={classes.signtop} component="h1" variant="h2">
                            <b>WorryMap</b>
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField className={classes.inputarea}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                color="primary"
                                autoFocus
                                onChange={(e) =>
                                    setString(e.target.value)

                                }//eventで中の文字列の値を取得
                                onKeyDown={(e) => {
                                    if (isComposed) return;
                                    if (e.key === 'Enter') {
                                        setUserName(e.target.value);
                                        e.preventDefault();//Enterキーでリロードを防止

                                    }
                                }}
                                //変換の確定を識別
                                onCompositionStart={() => {
                                    setIsComposed(true)
                                }}
                                onCompositionEnd={() => {
                                    setIsComposed(false)
                                }}
                            />

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                                disabled={disabled}
                                onClick={() => {
                                    setUserName(string);
                                }}
                            >
                                Sign In
                            </Button>
                        </form>
                    </div>
                </Container>
            </div>

        </ThemeProvider>
    );
}