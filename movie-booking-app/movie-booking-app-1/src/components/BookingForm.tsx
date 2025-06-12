import React, { useState } from 'react';

const BookingForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tickets, setTickets] = useState(1);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Booking Details:', { name, email, tickets });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="tickets">Number of Tickets:</label>
                <input
                    type="number"
                    id="tickets"
                    value={tickets}
                    onChange={(e) => setTickets(Number(e.target.value))}
                    min="1"
                    required
                />
            </div>
            <button type="submit">Book Tickets</button>
        </form>
    );
};

export default BookingForm;