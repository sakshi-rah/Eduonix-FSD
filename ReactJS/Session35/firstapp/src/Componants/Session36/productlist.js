import { useState } from "react";

//importing JSON Data
import productsData from './product.json'

export function ProductList() {
    const [product] = useState(productsData);

    return (
        <div className="container">
            <h1>Product List</h1>
            <table className="table table-bordered table-hover table-primary fs-4">
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Price</th><th>Description</th><th>Customer View</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((item, index)=>{
                           return(
                            <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>₹{item.price}</td>
                            <td>{item.description}</td>
                            <td>{item.view}</td>
                            </tr>
                           )
                            
                        })
                       
                    }
                </tbody>
            </table>
        </div>
    )

}