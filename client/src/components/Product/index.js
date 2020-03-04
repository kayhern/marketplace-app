//schema for product and how it should display on the page; other components should import this

import React from 'react';

class Product extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var name = <span>{this.props.product.name}</span>;
        var seller = <span>{this.props.product.seller}</span>;
        var salePrice = <span>${this.props.product.salePrice}</span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{seller}</td>
                <td>{salePrice}</td>
            </tr>
        );
    }
}
export default Product;