import React, { useEffect, useContext } from "react";
import router from "/server/routes/api/products";
import { Link } from "react-router-dom";
import { Favorites } from "../Favorites";

const TopProducts = () => {
    const data = 
    const [dispatch] = useContext();
    //getting top products using two hooks
    const getTopProducts = () => {
        dispatch({ type: router })
    };

    useEffect(() => {
        getTopProducts();
    }, []);

    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Top Products</h1>
                {data.products.map(res => (
                    <Favorites key={data._id}>
                        <Link to={"/products/category" + data._id}>
                            {data.title} by {data.seller}
                        </Link>
                    </Favorites>
                ))}

            </div>
        </div>
    );
}

export default TopProducts;