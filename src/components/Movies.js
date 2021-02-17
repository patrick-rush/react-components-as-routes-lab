import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map((movie =>
          <div>{movie.title}
            <ul>
              <li>Playtime: {movie.time}</li>
              <ul>
                {movie.genres.map((genre) => <li>{genre}</li>)}
              </ul>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
