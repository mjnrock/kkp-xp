import React from "react";

import WebView from "react-native-webview";
import CanvasHTML from "./canvas.html";

const DATA = "Hello from RN";

export default class Kanvas extends React.Component {
    render() {
        return (
            <WebView
                ref={webView => (this.webView = webView)}
                source={ CanvasHTML }
                style={{marginTop: 20}}
                javaScriptEnabled={true}
                javaScriptEnabledAndroid={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scrollEnabled={false}
                onMessage={event => {
                    const { data } = event.nativeEvent;

                    if(data === "LOADED") {
                        const clientResponseCode = `
                            window.postMessage(${JSON.stringify(DATA)}, "*");
                            true;
                        `;
                        if(this.webView) {
                            this.webView.injectJavaScript(clientResponseCode);
                        }
                    }
                }}
            />
        );
    }
}