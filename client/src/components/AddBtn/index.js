//add items to cart button including onClick function
//probably need a hook
import React from "react";
import axios from 'axios';

function AddItem(props) {
    const handleClick = (e) => {
        axios.get('http://localhost:3001/api/products/findAll?q=iphone').then(console.log)
        console.log("Adding Item to Cart");
    };

    return (
        <div>
            <button onClick={(e) => handleClick(e)} type="button" id="add">Add to Cart</button>
        </div>

    );
};

export default AddItem;