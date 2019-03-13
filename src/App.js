import React, { useState } from "react";
import sbcData from "./sbc.json";
import Leagues from "./Leagues.js";
import { HashRouter as Router, Route } from "react-router-dom";
import Teams from "./Teams";

const matchedTeams = (arr, id) => arr.find(elem => elem.id === id).teams;
const localSbcData = localStorage.getItem("sbcData");

const App = () => {
    const [sbcs, setSbcs] = useState(
        !localSbcData ? sbcData : JSON.parse(localSbcData)
    );

    const toggleIsDone = id => {
        const newState = sbcs.map(league => {
            const newTeams = league.teams.map(team =>
                team.id === id ? { ...team, isDone: !team.isDone } : team
            );
            const newLeague = { ...league, teams: newTeams };
            return newLeague;
        });

        console.log(newState);

        localStorage.setItem("sbcData", JSON.stringify(newState));

        setSbcs(newState);
    };

    return (
        <Router>
            <div className="my-4">
                <Route
                    exact
                    path="/"
                    render={props => <Leagues {...props} leagues={sbcs} />}
                />

                <Route
                    path="/:id"
                    render={props => (
                        <Teams
                            {...props}
                            teams={matchedTeams(sbcs, props.match.params.id)}
                            onToggle={toggleIsDone}
                        />
                    )}
                />
            </div>
        </Router>
    );
};

export default App;
