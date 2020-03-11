import React from "react";

import Comment from "./Comment";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: "",
            responses: []
        };
    }

    render() {
        return (
            <div>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Skwrl"
                            image="/assets/images/squirrel-01.jpg"
                            title="Skwrl"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Skwrl
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This am skwrl.  Him eats nutz and frootz.  Am a tiny trash panda.
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions>
                        <IconButton>
                            <InsertEmoticonIcon />
                        </IconButton>

                        <TextField
                            placeholder="Add a comment..."
                            inputProps={{ 'aria-label': 'add a comment' }}
                            variant="outlined"
                            value={ this.state.comment }
                            onChange={ e => {
                                this.setState({
                                    ...this.state,
                                    comment: e.target.value
                                });
                            }}
                        />

                        <IconButton type="submit" onClick={ e => {
                            e.preventDefault();

                            const { responses } = this.state;

                            responses.push(this.state.comment);

                            this.setState({
                                responses: responses,
                                comment: ""
                            });
                        }}>
                            <SendIcon />
                        </IconButton>
                    </CardActions>
                </Card>

                <List>
                    {
                        this.state.responses.map((res, i) => (
                            <ListItem key={ i }>
                                <Comment content={ res }/>
                            </ListItem>
                        ))
                    }
                </List>
            </div>
        );
    }
};