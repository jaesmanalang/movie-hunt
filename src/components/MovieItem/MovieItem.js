import React from 'react';
import { useHistory } from 'react-router-dom';
import './MovieItem.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieItem = ({ movie }) => {
  const { title, poster_path, id, name } = movie;
  const history = useHistory();

  return (
    <div className="movie__item">
      <img
        onClick={() => history.push(`/movie/${id}`)}
        src={`${BASE_URL}${poster_path}`}
        title={title ? title : name}
        alt={title}
      />
    </div>
  );
};

export default MovieItem;
