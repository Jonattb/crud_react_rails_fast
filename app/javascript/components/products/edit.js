import React, { useState, useEffect } from "react";
import axios from "axios"

const ProductEdit = ({
  product
}) => {

  const [name, setName] = useState(product.name || "");
  const [description, setDescription] = useState(product.description || "");
  const [price, setPrice] = useState(product.price || "");

  const onSubmit = (e) => {
    e.preventDefault()

    const headers = {
      'X-CSRF-Token': document.querySelector('[name=csrf-token').content
    }

    axios.put(`/api/products/${product.id}`, {
      name,
      description,
      price
    }, {
      headers: headers
    })
    .then(res => {
      window.location.href = "/products"
    })
    .catch(res => {
      console.log(res)
    })

  }

  return (
    <form
      className="flex flex-col space-y-3 mt-5"
      onSubmit={ onSubmit }
    >
      <input
        className="border border-gray-300 py-1 px-3"
        type="text"
        value={ name }
        onChange={ e => setName(e.target.value) }
        placeholder="Nombre"
      />
      <textarea
        className="border border-gray-300 py-1 px-3"
        placeholder="Descripcion"
        value={ description }
        onChange={ e => setDescription(e.target.value) }
      ></textarea>
      <input
        className="border border-gray-300 py-1 px-3"
        placeholder="Precio"
        value={ price }
        onChange={ e => setPrice(e.target.value) }
        type="number"
      />
      <button className="bg-blue-500 block py-3 text-white" type="submit">Guardar</button>
    </form>
  )
};

export default ProductEdit