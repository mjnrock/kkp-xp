# WebView
#### Creating the WebView component
Below is a sample file that hosts the `/build` directory's *React Web App*.

```
import React from "react";

import WebView from "react-native-webview";
import CanvasHTML from "./build/index.html";

export default class WebApp extends React.Component {
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
```

#### `yarn build-web`
Once the *React Web App* has been built, **two (2)** major changes are required.  These changes are necessary to run keep the pathing functional in *React Native App*.

1) Go to the `/build/static/js` folder and replace all `/assets` references with `./assets` or `/build/assets`, depending on the desire to use relative or absolute pathing.
   
2) A similar change must be made to `/build/index.html`, changing the `<script src="/static/...">` to `<script src="/build/static/...">`

The salient point is that pathing must be accounted for, in order to keep the *React Web App* confined within the *React Native App* scope.