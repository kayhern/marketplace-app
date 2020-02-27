//Plus and Minus button to change quantity in the cart
//include an onClick function for adding and subtracting value
import React from "react";
import axios from "axios";

function PlusButton() {
    const AddQty = (e) => {
        axios.get("URL").then()
        //add value
        console.log("adding value")
    };
    return (
        <div>
            <button onClick={(e) => AddQty(e)} type="button">+</button></div>
    );
};

function MinusButton() {

    const ReduceQty = (e) => {
        axios.get("URL").then();
        //subtract value
        console.log("subtracting value")
    };
    return (
        <div>
            <button onClick={(e) = ReduceQty(e)} type="button">-</button></div>
    )
};

export default PlusButton;