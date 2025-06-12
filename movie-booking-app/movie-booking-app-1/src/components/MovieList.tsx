import React, { useEffect, useState } from 'react';

const MovieList: React.FC<{ onSelectMovie: (movie: any) => void }> = ({ onSelectMovie }) => {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('https://api.example.com/movies'); // Replace with your API endpoint
            const data = await response.json();
            setMovies(data);
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id} onClick={() => onSelectMovie(movie)}>
                        {movie.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;