import React, { useState } from "react";
import { API_URL } from "../constants"
import { useNavigate, Link } from "react-router-dom"

function NewBar() {
  const [ name, setName ] = useState("");
  const [ address, setAddress ] = useState("");
  const [ frites_price, setFritesPrice ] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const barData = { name, address, frites_price}

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(barData)
    });
      if (response.ok) {
        const { id } = await response.json();
        navigate(`/bars`);
      } else {
        console.log("We have an error");
      }
  };

  return(
    <div>
      <h1>Rajouter un nouveau bar</h1>
      <Link to={"/bars"}>Retourner à la liste de bars</Link>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Nom du bar :</label>
          <input
            type="text"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

        <label htmlFor="addressInput">Adress :</label>
          <input
            type="text"
            id="addressInput"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />

        <label htmlFor="fritesPriceInput">Prix des frites :</label>
          <input
            type="number"
            id="fritesPriceInout"
            value={frites_price}
            onChange={(e) => setFritesPrice(e.target.value)}
            />
        <button type="submit">Enregistrer</button>
      </form>
    </div>

  );
}

export default NewBar
