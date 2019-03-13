import React from "react";
import { Link } from "react-router-dom";

const League = ({ id, name, pcPrice, teams }) => (
    <div className="col-sm-6 col-lg-4" style={{ marginBottom: "30px" }}>
        <div className="card d-flex h-100">
            <img
                className="card-img-top"
                src={`imgs/leagues/${id}.png`}
                alt={`${name} logo`}
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{name}</h5>
                <p>
                    Estimated price on PC: &nbsp;
                    <span className="badge badge-secondary">{pcPrice}</span>
                </p>
                <Link className="btn btn-primary" to={`/${id}`}>
                    Go to teams
                </Link>
            </div>
            <div className="card-footer text-muted">
                {teams.reduce(
                    (prev, currentTeam) =>
                        currentTeam.isDone ? prev + 1 : prev,
                    0
                )}{" "}
                / {teams.length}
            </div>
        </div>
    </div>
);

export default League;
