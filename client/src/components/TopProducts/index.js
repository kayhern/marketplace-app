import React from "react";
import axios from "axios";
import "./style.css";
///something like this??? https://www.robinwieruch.de/react-hooks-fetch-data

function TopProducts() {
    const displayTopProducts = (e) => {
        axios.get("URL").then(console.log)
    };

    return (
        <div id="products">
            <h2>Top Products</h2>

            <div id="productsfromAPI">
                Products Will Display Here
            </div>
        </div>
    )
};

export default TopProducts;