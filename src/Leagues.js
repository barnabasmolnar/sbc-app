import React from "react";
import League from "./League";

const Leagues = ({ leagues }) => (
    <div className="container">
        <div className="row">
            {leagues.map(league => (
                <League key={league.id} {...league}  />
            ))}
        </div>
    </div>
);

export default Leagues;
