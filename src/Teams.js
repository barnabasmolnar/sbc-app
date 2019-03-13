import React from "react";
import { Link } from "react-router-dom";
import Team from "./Team";

const Teams = ({ teams, onToggle }) => (
    <div className="container">
        <Link className="btn btn-primary mb-4 w-100" to={process.env.PUBLIC_URL + "/"}>
            Go back to leagues
        </Link>
        <ul className="list-group">
            {teams.map(team => (
                <Team key={team.id} {...team} onToggle={onToggle} />
            ))}
        </ul>
        <Link className="btn btn-primary mt-4 w-100" to={process.env.PUBLIC_URL + "/"}>
            Go back to leagues
        </Link>
    </div>
);

export default Teams;
