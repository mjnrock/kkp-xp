import React from "react";

import Comment from "./Comment";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: "",
            comments: [
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse velit praesentium aperiam ea ratione quasi quia! Cum dicta doloremque id tempora voluptates ratione assumenda, quam accusamus facilis, soluta repudiandae.",
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse velit praesentium aperiam ea ratione quasi quia! Cum dicta doloremque id tempora voluptates ratione assumenda, quam accusamus facilis, soluta repudiandae.",
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum esse velit praesentium aperiam ea ratione quasi quia! Cum dicta doloremque id tempora voluptates ratione assumenda, quam accusamus facilis, soluta repudiandae.",
            ]
        };
    }

    render() {
        return (
            <div>
                <Card variant="outlined">
                    <CardActionArea>
                        {
                            this.props.image ? (
                                <CardMedia
                                    component="img"
                                    image={ this.props.image }
                                    alt="post picture"
                                />
                            ) : null
                        }
                        {
                            this.props.title || this.props.description ? (
                                <CardContent>
                                    {
                                        this.props.title ? (
                                            <Typography gutterBottom variant="h5" component="h2">
                                                { this.props.title }
                                            </Typography>
                                        ) : null
                                    }
                                    {
                                        this.props.description ? (
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                { this.props.description }
                                            </Typography>
                                        ) : null
                                    }
                                </CardContent>
                            ) : null
                        }
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
                            style={{ width: "100%" }}
                            onChange={ e => {
                                this.setState({
                                    ...this.state,
                                    comment: e.target.value
                                });
                            }}
                            onKeyPress={ e => {
                                if(e.which === 13) {
                                    const { comments: posts } = this.state;
            
                                    posts.push(this.state.comment);
        
                                    this.setState({
                                        posts,
                                        comment: ""
                                    });
                                }
                            }}
                        />

                        <IconButton onClick={ e => {
                            const { comments } = this.state;

                            comments.push(this.state.comment);

                            this.setState({
                                comments,
                                comment: ""
                            });
                        }}>
                            <SendIcon />
                        </IconButton>
                    </CardActions>
                </Card>

                <List>
                    {
                        this.state.comments.map((res, i) => (
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