/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./titleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { useRef, useState } from "react";
import { useEffect } from "react";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDQzNzhhYTI3YzdlNTUxMGQ4ZTUyNTM2YTAxZWVmOSIsIm5iZiI6MTczMTE0MjcxOC45MzgyMjEsInN1YiI6IjY3MmYyMGNmNTdiMzAxZjNjOTMxODhiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MhUE-CcCIV6gSH3Ced0o95F9IuscpDsAGnzKnmjNN8s",
    },
  };

  const handleWheel = (ev) => {
    ev.preventDefault();
    cardsRef.current.scrollLeft += ev.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-lists" ref={cardsRef}>
        {apiData.map((card, index) => (
          <div className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
              alt="card-img"
            />
            <p>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
