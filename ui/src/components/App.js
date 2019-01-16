import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";

const App = () => (
    <DataProvider
        endpoint="api/hello/"
        render={data => <div>{data.response}</div>}
    />
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
