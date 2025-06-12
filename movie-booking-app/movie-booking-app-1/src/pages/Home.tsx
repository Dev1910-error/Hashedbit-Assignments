import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Movie Booking App</h1>
            <p>Explore and book your favorite movies!</p>
            <Link to="/movies">View Movies</Link>
        </div>
    );
};

export default Home;