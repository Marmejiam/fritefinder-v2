import React, { useState, useEffect } from "react";
import { API_URL } from "../constants";
import { Link } from "react-router-dom";
import useApiRequest from "./hooks/useApiRequest";


function BarsList() {
  const [bars, setBars]  = useState([]);
  const [, setError] = useState(null);
  const [, setLoading] = useState(true);
// useEffect execute du code juste après que le composant soit rendu ou apres une mise à jour si il y a un deuxiemme arg dans le tableu
// la fonction loadBars = va faire appel à l'API
// async = le code ne s'execute pas tout ligne après ligne, mais grace a await on peut faire des pauses
// await = attend que la promesse soit resolue pour continuer (await peut etre utilisé que a l'interieur d'une func async)
// si la reponse est ok on la convertie en json et on met à jour l'état de bars
// throw response = si l'état n'est pas ok on va renvoyer l'erreur au cach pour le traiter
// catch ve afficher un message d'erreur
// finally = dans tous les cas si la resp est ok ou pas, on va reset le setloding a false (l'arreter)

  useApiRequest(API_URL, setBars)


  return(
    <div className="container">
      <h1>Liste de bars</h1>
      <Link to="/new">Rajouter un bar</Link>
      {bars.map((bar) => (
        <div key={bar.id} className="bar-container">
          <Link to={`/bars/${bar.id}`}>
            <h2>{bar.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BarsList
