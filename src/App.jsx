import React from "react";
import "./App.css";

import Post from "./components/Post";

export default class App extends React.Component {
    render() {
        return (
            <div>                
                <Post
                    image={ `/assets/images/squirrel-01.jpg` }
                    title={ `SkWrL` }
                    description={ `This is some nonsense about the squirrel.` }
                />
            </div>
        );
    }
};