//Plus and Minus button to change quantity in the cart
//include an onClick function for adding and subtracting value
import React from "react";

function PlusButton() {
    return (
        <div>
            <button type="button">+</button></div>
    );
};

function MinusButton() {
    return (
        <div>
            <button type="button">-</button></div>
    )
}

export default { PlusButton, MinusButton };