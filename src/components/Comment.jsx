import React from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';

//! window.devicePixelRatio can be used to adjust for mobile

export default class Comment extends React.Component {
    render() {
        return (
            <Card variant="outlined" style={{ width: "100%" }}>
                <CardHeader
                    avatar={
                        <Avatar alt="user" src="/assets/images/squirrel-01.jpg" />
                    }
                    action={
                        <IconButton>
                            <InsertEmoticonIcon />
                        </IconButton>
                    }
                    title="Mr. Skwrl"
                    subheader="Squirrel"
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { this.props.content }
                    </Typography>
                </CardContent>
            </Card>
        );
    }
};