import React from "react";
import { GETJokes } from "../../REST/JokesREST"
import {
    jokesEP
} from "../../Settings/Settings";

export default function JokesComp({ isLoggedIn }) {
    return (
        <div>
            {/* endpoint must be named as such (endpoint) in order to import the prop in the relevant component. */}
            <GETJokes
                endpoint={jokesEP}
                isLoggedIn={isLoggedIn}
            />
        </div>
    );
}
