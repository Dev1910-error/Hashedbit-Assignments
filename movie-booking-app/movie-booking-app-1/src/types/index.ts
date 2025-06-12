export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: string;
    rating: number;
    genre: string[];
    posterUrl: string;
}

export interface BookingDetails {
    movieId: number;
    userName: string;
    userEmail: string;
    numberOfTickets: number;
    showTime: string;
}