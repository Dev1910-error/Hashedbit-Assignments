import React from 'react';
import MovieDetails from '../components/MovieDetails';
import BookingForm from '../components/BookingForm';

const MoviePage: React.FC = () => {
    const [selectedMovie, setSelectedMovie] = React.useState(null);

    // Assume we fetch the movie data based on some criteria (e.g., movie ID from URL)
    React.useEffect(() => {
        // Fetch movie data logic here
        // setSelectedMovie(fetchedMovie);
    }, []);

    return (
        <div>
            {selectedMovie ? (
                <>
                    <MovieDetails movie={selectedMovie} />
                    <BookingForm movie={selectedMovie} />
                </>
            ) : (
                <p>Loading movie details...</p>
            )}
        </div>
    );
};

export default MoviePage;