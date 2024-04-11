import { useEffect } from "react";

const useApiRequest = (url, setState) => {
  const [, setE]
  useEffect (() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(url)
        if (response.ok) {
          const json = await response.json();
          setState(json)
        } else {
          throw response
        }
      } catch(e) {
        setError("something is wrong", e);
      }
    }
    sendRequest()
  }, [url, setState]);
}

export default useApiRequest

// useEffect execute du code juste après que le composant soit rendu ou apres une mise à jour si il y a un deuxiemme arg dans le tableu
// la fonction loadBars = va faire appel à l'API
// async = le code ne s'execute pas tout ligne après ligne, mais grace a await on peut faire des pauses
// await = attend que la promesse soit resolue pour continuer (await peut etre utilisé que a l'interieur d'une func async)
// si la reponse est ok on la convertie en json et on met à jour l'état de bars
// throw response = si l'état n'est pas ok on va renvoyer l'erreur au cach pour le traiter
// catch ve afficher un message d'erreur
// finally = dans tous les cas si la resp est ok ou pas, on va reset le setloding a false (l'arreter)
