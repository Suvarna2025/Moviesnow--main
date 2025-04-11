import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../Services/apiService';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(id)
      .then((data) => {
        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      })
      .catch(() => setError('Failed to fetch movie details.'));
  }, [id]);

  if (error) return <p className="text-red-600 text-center mt-4">{error}</p>;

  return (
    movie && (
      <div className="bg-black text-white min-h-screen p-6">
        <button
          className="bg-red-600 text-white px-6 py-2 rounded-full mb-6 hover:bg-red-700 transition"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <div className="flex justify-center items-center flex-col sm:flex-row">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
            alt={movie.Title}
            className="w-72 sm:w-96 md:w-1/3 rounded-lg shadow-lg"
          />
          <div className="ml-0 sm:ml-8 mt-4 sm:mt-0 max-w-xl">
            <h1 className="text-3xl font-bold mb-4 text-center sm:text-left">{movie.Title}</h1>
            <p className="text-lg font-semibold text-gray-400"><strong>Genre:</strong> {movie.Genre}</p>
            <p className="text-lg text-gray-300 mt-2"><strong>Plot:</strong> {movie.Plot}</p>
            <p className="text-lg font-semibold text-gray-400 mt-4"><strong>Release Year:</strong> {movie.Year}</p>
            <p className="text-lg font-semibold text-gray-400 mt-2"><strong>Cast:</strong> {movie.Actors}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieDetailsPage;
