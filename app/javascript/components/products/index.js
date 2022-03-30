import React, { useState, useEffect } from "react";
import axios from "axios"

const ProductIndex = () => {

  const [products, setProducts] = useState([])

  const initialize = () => {
    axios.get("/api/products")
      .then(res => {
        setProducts(res.data.products)
      })
      .catch(res => {
        console.log(res)
      })
  }

  const onDelete = (id) => {
    const headers = {
      'X-CSRF-Token': document.querySelector('[name=csrf-token').content
    }

    axios.delete(`/api/products/${id}`, {
      headers: headers
    })
    .then(res => {
      window.location.href = "/products"
    })
    .catch(res => {
      console.log(res)
    })
  }

  useEffect(() => {
    initialize()
  }, [])

  return (
    <div>
      { products.length > 0 && (
        <ul>
          { products.map((product, index) => (
            <li className="bg-gray-100 hover:bg-gray-200 my-3 p-3" key={ index }>
              <h2>{ product.name }</h2>
              <p>{product.description}</p>
              <i>${ product.price }</i>
              <div className="mt-3">
                <button
                  type="button"
                  className="mr-5"
                  onClick={ () => onDelete( product.id ) }
                >eliminar</button>

                <a href={ `/products/${product.id}` }>
                  editar
                </a>
              </div>
            </li>
          )) }
        </ul>
      ) }

      { products == 0 && (
        <div className="text-xl text-red-500">No hay productos</div>
      ) }

      <a href="/products/create">Crear mas</a>
    </div>
  )
};

export default ProductIndex