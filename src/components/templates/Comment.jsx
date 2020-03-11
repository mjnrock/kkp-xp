import React from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default class Comment extends React.Component {
    render() {
        return (
            <div>
                <Card variant="outlined">
                    <CardContent>
                        { this.props.content }
                    </CardContent>
                </Card>
            </div>
        );
    }
};