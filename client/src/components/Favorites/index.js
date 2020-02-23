import React from "react";

// This file exports both the List and ListItem components - this is taken from class activity

export function Favorites({ children }) {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    );
}

export function ListItem({ children }) {
    return <li className="list-group-item">{children}</li>;
}