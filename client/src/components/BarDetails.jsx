import React, { useState, useEffect } from "react"
import { API_URL } from "../constants"
import { useParams, useNavigate, Link } from "react-router-dom"
import ReviewsList from "./ReviewsList";
import useApiRequest from "./hooks/useApiRequest"

function BarDetails() {
  const [ bar, setBar ] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  useApiRequest(`${API_URL}/${id}`, setBar)

  const deleteBar = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      })
      if (response.ok) {
        navigate("/bars")
      } else {
        throw response
      }
    } catch (e) {
      console.log("We have an error", e);
    }
  }

  return(
    <div>
      <Link to="/bars">Revenir à la liste</Link>
      <h2>{bar.name}</h2>
      <p>{bar.address}</p>
      <p>{bar.frites_price}€</p>
      <button onClick={() => deleteBar(bar.id)}>Supprimer</button>
      <ReviewsList />
    </div>
  );
}

export default BarDetails
