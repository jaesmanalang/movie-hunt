import React from 'react';
import URLS from '../utils/urls';
import Movies from '../components/Movies/Movies';

const HomePage = () => {
  return (
    <div className="container">
      <Movies title="Trending" url={URLS.TRENDING} />
      <Movies title="Popular" url={URLS.POPULAR} />
      <Movies title="Top Rated" url={URLS.TOP_RATED} />
    </div>
  );
};

export default HomePage;
