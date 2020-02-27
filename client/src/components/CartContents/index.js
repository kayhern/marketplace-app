import React from "react";
import Total from "../../components/Total";

function CartContents() {
    return (
        <div>
            <h1>Your Cart</h1>
            <h5>Go Back to Home to Add More Items</h5>
            <div>
                Cart Contents will go here

            </div>
            <div>
                CART TOTAL: <Total />
            </div>

        </div>
    )
};

export default CartContents;