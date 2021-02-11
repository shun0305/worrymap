import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { db } from '../../../firebase';
import PostItem from './PostItem';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '240px',
        maxWidth: 300,
        overflow: 'auto'
    },
}));

const PostView = () => {
    const classes = useStyles();
    const [results, setResults] = useState([]);

    function getResult() {
        db.orderBy('date', 'desc').onSnapshot((querySnapshot) => {
            const dataArray = []
            querySnapshot.forEach((doc) => {
                dataArray.push(doc.data());
            });
            setResults(dataArray)

        });
    }
    useEffect(() => {
        getResult();
    }, []
    )

    return (
        <div className={classes.root}>
            {results.map(result => (
                <PostItem
                    button
                    key={result.id}
                    username={result.username}
                    place={result.place}
                    title={result.title}
                />
            ))}
        </div>
    );
}

export default PostView