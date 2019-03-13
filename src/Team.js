import React from "react";

const Team = ({ id, name, pcPrice, reward, isDone, onToggle }) => (
    <li className={`list-group-item ${isDone ? "done" : ""}`}>
        <div className="d-sm-flex">
            <div
                className="mx-auto mx-sm-0 mb-3 mb-sm-0"
                style={{ width: "150px", height: "150px" }}
            >
                <img
                    src={`imgs/teams/${id}.png`}
                    alt={`${name} badge`}
                    className="img-fluid d-block"
                />
            </div>

            <div className="text-center text-sm-left pl-sm-4 flex-grow-1 d-lg-flex flex-wrap">
                <div className="my-1 col-lg-6 d-lg-flex justify-content-center align-items-center">
                    <strong>{name}</strong>
                </div>
                <div className="my-1 col-lg-6 d-lg-flex justify-content-center align-items-center">
                    <span className="font-weight-bold">
                        {parseInt(pcPrice).toLocaleString()}
                    </span>{" "}
                    &nbsp;coins
                </div>
                <div className="my-1 col-lg-6 d-lg-flex justify-content-center align-items-center">
                    {reward}
                </div>

                <div className="my-1 col-lg-6 d-lg-flex justify-content-center align-items-center">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id={`check--${id}`}
                            checked={isDone}
                            onChange={() => onToggle(id)}
                        />
                        <label
                            className="custom-control-label"
                            htmlFor={`check--${id}`}
                        >
                            Done
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </li>
);

export default Team;
