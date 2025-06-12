import React, { useState } from 'react';
import './App.css';

const movies = [
  {
    id: 1,
    title: 'Inception',
    image: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
    description: 'A thief who steals corporate secrets through dream-sharing technology.'
  },
  {
    id: 2,
    title: 'Avengers: Endgame',
    image: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg',
    description: 'The Avengers reunite to reverse the damage done by Thanos.'
  },
  {
    id: 3,
    title: 'The Matrix',
    image: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg',
    description: 'Neo learns about the Matrix and reality.'
  },
];

function App() {
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookingInfo, setBookingInfo] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [bookingId, setBookingId] = useState('');

  const handleBook = () => {
    const id = Math.floor(100000 + Math.random() * 900000);
    setBookingId(id.toString());
    setPage(4);
  };

  return (
    <div className="App">
      {page === 1 && (
        <>
          <h1>🎬 Movie List</h1>
          <div className="grid">
            {movies.map((movie) => (
              <div key={movie.id} className="card" onClick={() => {
                setSelectedMovie(movie);
                setPage(2);
              }}>
                <img src={movie.image} alt={movie.title} />
                <h3>{movie.title}</h3>
              </div>
            ))}
          </div>
        </>
      )}

      {page === 2 && selectedMovie && (
        <div className="details">
          <h2>{selectedMovie.title}</h2>
          <img src={selectedMovie.image} alt={selectedMovie.title} style={{ width: '200px' }} />
          <p>{selectedMovie.description}</p>
          <button onClick={() => setPage(3)}>Book Seat</button>
          <button onClick={() => setPage(1)}>Back</button>
        </div>
      )}

      {page === 3 && (
        <div className="form">
          <h2>Book Seat for {selectedMovie.title}</h2>
          <input
            placeholder="Name"
            value={bookingInfo.name}
            onChange={(e) => setBookingInfo({ ...bookingInfo, name: e.target.value })}
          />
          <input
            placeholder="Email"
            value={bookingInfo.email}
            onChange={(e) => setBookingInfo({ ...bookingInfo, email: e.target.value })}
          />
          <input
            placeholder="Mobile"
            value={bookingInfo.mobile}
            onChange={(e) => setBookingInfo({ ...bookingInfo, mobile: e.target.value })}
          />
          <button onClick={handleBook}>Submit</button>
        </div>
      )}

      {page === 4 && (
        <div className="confirmation">
          <h2>🎟️ Booking Confirmed!</h2>
          <p>Booking ID: <strong>{bookingId}</strong></p>
          <p>Name: {bookingInfo.name}</p>
          <p>Email: {bookingInfo.email}</p>
          <p>Mobile: {bookingInfo.mobile}</p>
          <button onClick={() => setPage(1)}>Back to Movies</button>
        </div>
      )}
    </div>
  );
}

export default App;
