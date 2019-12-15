import React, { Component } from "react";

import WithMoveValidation from "./integrations/WithMoveValidation";
import RandomVsRandomGame from "./integrations/RandomVsRandomGame";

class Demo extends Component {
    render() {
        return (
        <div>
            <div style={boardsContainer}>
            <WithMoveValidation />
            <RandomVsRandomGame />
            </div>
        </div>
        );
    }
    }

    export default Demo;

    const boardsContainer = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100vw",
    marginTop: 30,
    marginBottom: 50
    };
