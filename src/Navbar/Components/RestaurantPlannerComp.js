import React from "react";
import { POSTFoodItem } from "../../REST/RestaurantREST"
import {
    ingredientsEP
} from "../../Settings/Settings";

export default function RestaurantPlanner({ isLoggedIn }) {
    return (
        <div>
            {/* endpoint must be named as such (endpoint) in order to import the prop in the relevant component. */}
            <POSTFoodItem
                endpoint={ingredientsEP}
                isLoggedIn={isLoggedIn}
            />
        </div>
    );
}
