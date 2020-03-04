import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import Product from "../../components/Product";
///something like this??? https://www.robinwieruch.de/react-hooks-fetch-data
//possible URL structure: https://api.bestbuy.com/v1/products((search=top))?format=json&apiKey=0j7iapqW9cMtP87GqDaxc2Um

function TopProducts() {
    return (
        <div id="products"><h2>Top Products</h2>
            <br></br>
            <br></br>
            <div className="container">
                <div className="row">
                 
                    <div className="col" id="1">ITEM</div>
                    <div className="col" id="2">ITEM</div>
                    <div className="col" id="3">ITEM</div>
                    <div className="col" id="4">ITEM</div>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    )
};


export default TopProducts;