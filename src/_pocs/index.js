import React from "react";
import ReactDom from "react-dom";
import App from "./App";

import Lux from "@lespantsfancy/lux";

const store = Lux.React.Context.MasterNode;

store.attach("Tester", new Lux.Node.Node());
store.getEntity("Tester").prop("cats", 15);

setTimeout(() => {
    store.getEntity("Tester").prop("cats", 25);
    console.log(store.$());
}, 1500);

ReactDom.render(
	<App />,
	document.getElementById("root")
);