import React from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import IconButton from '@material-ui/core/IconButton';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

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