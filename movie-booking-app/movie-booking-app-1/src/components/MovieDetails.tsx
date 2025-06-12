import React from 'react';

interface MovieDetailsProps {
    title: string;
    description: string;
    releaseDate: string;
    rating: number;
    posterUrl: string;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ title, description, releaseDate, rating, posterUrl }) => {
    return (
        <div className="movie-details">
            <img src={posterUrl} alt={`${title} poster`} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p><strong>Release Date:</strong> {releaseDate}</p>
            <p><strong>Rating:</strong> {rating}/10</p>
        </div>
    );
};

export default MovieDetails;