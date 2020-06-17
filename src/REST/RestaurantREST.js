import React, { useState, useEffect } from "react";
import facade from "./RESTFacade"
import { URL } from "../Settings/Settings"

function POSTFoodItem({ endpoint, isLoggedIn }) {
    let blankFoodItem = { itemName: "", pricePerKG: "", itemAmount: "" };
    const [foodItem, setFoodItem] = useState({ ...blankFoodItem });
    const [responseData, setResponseData] = useState("Not logged in");

    function changeHandler(event) {
        const { id, value } = event.target;
        setFoodItem({ ...foodItem, [id]: value });
    }

    function submitHandler() {
        let body = { itemName: foodItem.itemName, pricePerKG: foodItem.pricePerKG, itemAmount: foodItem.itemAmount };
        facade.postCall(URL, endpoint, body).then((data) => setResponseData(data)
            // .catch((err) => {
            //     setResponseData(err.status);
            // })
        );
    }

    return (
        (isLoggedIn ? (
            <div className="fetched">
                
                <h2>Please enter the ingredient information: </h2>
                <p>
                    Ingredient Name:{" "}
                    <input
                        type="text"
                        placeholder="Name"
                        id="itemName"
                        value={foodItem.itemName}
                        onChange={(event) => changeHandler(event)}
                    />
                </p>
                <p>
                    Ingredient Total Weight:{" "}
                    <input
                        type="text"
                        placeholder="Weight in grams"
                        id="itemAmount"
                        value={foodItem.itemAmount}
                        onChange={(event) => changeHandler(event)}
                    />
                </p>
                <p>
                    Ingredient Price/KG:{" "}
                    <input
                        type="text"
                        placeholder="Price/KG"
                        id="pricePerKG"
                        value={foodItem.pricePerKG}
                        onChange={(event) => changeHandler(event)}
                    />
                </p>
                <button onClick={submitHandler}>Submit ingredient to database</button>
            </div>) : (
                <div class="fetched">
                    <p>Please log in</p>
                </div>)))
}

// function GETFoodItem({ endpoint, isLoggedIn }) {
//     const [responseData, setResponseData] = useState("Not logged in");

//     /*
//         alternative solution.
//         disadvantage: calls it every time switching tab in Navbar.
//         advantage: runs automatically and renders newest data.
//         */

//     // useEffect(() => {
//     //     facade.getCall(URL, endpoint).then((data) => setResponseData(data));
//     // }, []);

//     const doFetch = () => {
//         facade.getCall(URL, endpoint).then((data) => setResponseData(data));
//     }

//     // missing return data
// }

/*
remember to add all new components to the export for use in the governing JokesComp.
*/
export { POSTFoodItem }