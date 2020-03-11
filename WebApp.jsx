import React from "react";

import WebView from "react-native-webview";
import CanvasHTML from "./build/index.html";

export default class Kanvas extends React.Component {
    render() {
        return (
            <WebView
                source={ CanvasHTML }
                style={{ marginTop: 20 }}
                javaScriptEnabled={true}
                javaScriptEnabledAndroid={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scrollEnabled={true}
            />
        );
    }
}