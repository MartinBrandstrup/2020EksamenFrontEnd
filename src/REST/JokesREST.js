import React, { useState, useEffect } from "react";
import facade from "./RESTFacade"
import { URL } from "../Settings/Settings"

function GETJokes({ endpoint, isLoggedIn }) {
    const [responseData, setResponseData] = useState("Not logged in");

    /*
    alternative solution.
    disadvantage: calls it every time switching tab in Navbar.
    advantage: runs automatically and renders newest data.
    */

    // useEffect(() => {
    //     facade.getCall(URL, endpoint).then((data) => setResponseData(data));
    // }, []);

    const doFetch = () => {
        facade.getCall(URL, endpoint).then((data) => setResponseData(data));
    }

    const chuckJokes = responseData.chuckNorrisJokes

    return (
        (isLoggedIn ? (
            <div className="fetched">
                <button onClick={doFetch}>Get me some new Jokes</button>
                <h2>First joke: </h2>

                {/* {console.log(responseData.chuckNorrisJokes)}
                <p> {chuckJokes} </p>
                {chuckJokes.forEach(item => {
                    console.log(item)
                })} */}
                {/* {chuckJokes.forEach(element => <p> {element.value} </p>)} */}
                <h2>Second joke: </h2>
                {/* <p>{responseData.dadJokes.joke}</p> */}
            </div>) : (
                <div class="fetched">
                    <p>Please log in</p>
                </div>)))
}

// this function is merely proof-of-concept and has not been tested
function POSTJoke({ endpoint, isLoggedIn, joke }) {
    const [responseData, setResponseData] = useState("Not logged in");
    const doFetch = () => {
        facade.postCall(URL, endpoint, joke).then((data) => setResponseData(data));
    }

    // missing return data
}

/*
remember to add all new components to the export for use in the governing JokesComp.
*/
export { GETJokes, POSTJoke }