import React from 'react'

import {products} from "../../constants/data"

const Product = () => {
  return (

    <div>
        <div style ={{ display: "flex", justifyContent: "space-between"}}>
            <h1 style={{fontSize: "30px" , fontFamily: "sans-serif" }}>Best Products</h1>
            <button style={{background: "blue", color: "white", width:70, height: 30, margin: 10, cursor: "pointer"  }}>View All</button>
        </div>

        <div style={{ display : "flex", justifyContent: "space-between"}}>
        {
            products.map(data => (

                <img src = {data.url} alt = "product" style = {{ width: 150 }} />

            ))
        }
        </div>
    </div>
      )
}

export default Product
