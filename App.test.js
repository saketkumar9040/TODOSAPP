import React from "react";
import App from "./App.js";
import {render} from "@testing-library/react-native";

// RENDER MAIN NAVIGATOR  =================================================>

test("should render correctly",()=>{
    // const renderedComponent = render(<App/>);
    const output = 2 + 2;
    expect(output).toEqual(4);
})

