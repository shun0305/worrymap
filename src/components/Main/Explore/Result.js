import React, { useState } from 'react'
import { db } from '../../../firebase';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ResultItem from './ResultItem'

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

const useStyles = makeStyles((theme) => ({

    circle: {
        borderRadius: "50%",
        backgroundColor: "#00A3ff",
        width: "30px",
        height: "30px",
        marginRight: "20px",
    },
    input: {
        marginLeft: theme.spacing(1),
        width: 400,
    },
    iconButton: {
        padding: 10,
    },

}));

const Result = () => {
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState('');
    const classes = useStyles();


    function getResult() {
        db.orderBy('date', 'desc').onSnapshot((querySnapshot) => {
            const dataArray = []
            querySnapshot.forEach((doc) => {
                dataArray.push(doc.data());
            });
            setResults(dataArray)
        });
    }
    const list = results.map(result => {
        return result;
    });

    const listname = list.filter(listitem => {
        return listitem.place.includes(search)
    })




    return (
        <div>
            <ThemeProvider theme={theme}>
                <Paper >
                    <InputBase
                        className={classes.input}
                        placeholder="Search by place"
                        inputProps={{ 'aria-label': 'search' }}
                        color="primary"
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <IconButton
                        // type="submit"
                        className={classes.iconButton}
                        aria-label="search" color="primary"
                        onClick={getResult}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <div className={classes.root}>
                    {listname.map(result => (
                        <ResultItem
                            button
                            key={result.id}
                            username={result.username}
                            place={result.place}
                            text={result.text}
                        />
                    ))}
                </div>
            </ThemeProvider>
        </div>
    );
};

export default Result;