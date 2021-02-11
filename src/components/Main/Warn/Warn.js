import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputArea from './InputArea';
import ActionArea from './ActionArea';
//import Picture from './Picture';

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateRows: '80px 80px 1fr',
        textAlign: 'center',
    },
    head: {
        backgroundColor: "#00A3ff",
        display: "flex",
        alignItems: "center",
    },

});
const Warn = ({ username }) => {
    const classes = useStyles();
    const inputEl = useRef(null);
    const [place, setPlace] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const resetInputHandler = () => {
        setPlace('');
        setTitle('');
        setText('');
    };

    return (
        <div className={classes.root}>
            <div className={classes.head}>
                <div style={{ marginLeft: "50px" }}><h1 style={{ fontSize: "40px", color: "#ffffff", borderBottom: "solid 5px #FFCC66" }}>Warn</h1></div>
            </div>
            <div>
                <ActionArea
                    inputEl={inputEl}
                    username={username}
                    setPlace={setPlace} place={place}
                    setTitle={setTitle} title={title}
                    setText={setText} text={text}
                    onClick={resetInputHandler}
                />
            </div>

            <div>
                <InputArea
                    inputEl={inputEl}
                    setPlace={setPlace}
                    setTitle={setTitle}
                    setText={setText}
                    place={place}
                    title={title}
                    text={text} />
            </div>
            {/* <div>
                <Picture
                    username={username}
                />
            </div> */}
        </div>
    )
};

export default Warn; 