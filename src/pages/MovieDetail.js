import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import URLS from '../utils/urls';
import axios from '../utils/axios';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function getMovieDetail() {
      const res = await axios.get(
        `/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
      );
      setMovie(res.data);
    }

    getMovieDetail();
    return () => abortController.abort();
  }, [id]);
  return (
    <div className="container">
      <div className="movie-detail">
        <h1>{movie?.title || movie?.original_name}</h1>
      </div>
    </div>
  );
};

export default MovieDetail;
