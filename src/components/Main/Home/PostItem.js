import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },

    circle: {
        borderRadius: "50%",
        backgroundColor: "#00A3ff",
        width: "30px",
        height: "30px",
        marginRight: "20px",
    }
}));



const PostItem = ({ key, username, title, place }) => {
    const classes = useStyles();

    return (
        <div className={classes.root} key={key} >

            <List className={classes.root} >
                <ListItem>
                    <p className={classes.circle}></p>
                    <ListItemText primary={place} secondary={title} />
                    by {username}
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>

        </div>
    );
};
export default PostItem