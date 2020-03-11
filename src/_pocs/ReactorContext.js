import React, { Component } from "react";
import Lux from "@lespantsfancy/lux";

const LuxContext = React.createContext({
    fish: 15
});

export class LuxProvider extends Component {
    render() {
        return (
            <LuxContext.Provider
                // store={ new Lux.Node.MasterNode(this.state) }
                store={{ cat: 15 }}
            >
                { this.props.children }
            </LuxContext.Provider>
        );
    }
};

export const LuxConsumer = LuxContext.Consumer;
export const LuxContextObj = LuxContext;

export default {
    LuxContext,
    LuxContextObj,

    LuxProvider,
    LuxConsumer
};