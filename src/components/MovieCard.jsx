import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300'}
        alt={movie.Title}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-xl text-white truncate">{movie.Title}</h3>
        <p className="text-gray-400 text-sm">{movie.Year}</p>
        <Link
          to={`/movie/${movie.imdbID}`}
          className="text-red-600 hover:text-red-700 mt-2 inline-block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
