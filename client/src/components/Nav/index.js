import React, { Component } from "react";
import TopProducts from "../TopProducts";
import "./style.css";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">MarketPlace</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" id="home" href="/">| Home |<span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link active" id="cart" href="/cart">| Cart |<span></span></a>

                            <div className="search-container" id="searchbar">
                                <form action="/action_page.php">
                                    <input type="text" placeholder="Search.." name="search">
                                    </input><button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>

                <TopProducts />
            </div>
        );
    }
};

export default Nav;