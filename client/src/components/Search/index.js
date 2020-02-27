import React from "react";
import "./style.css";

//display search results
function Search() {
    return (
        <div id="searchbar">

            <div className="search-container" id="searchbar">
                <form action="/action_page.php" id="searchbar">
                    <h5>Search for Items to Add to Cart</h5>
                    <input type="text" placeholder="Search.." name="search">
                    </input><button type="submit" id="searchbtn">Submit</button>
                </form>
            </div>
        </div>

    );
};

export default Search;