export interface IMovie {
    Title: string;
    Year: number;
    Poster: string;
    Type: string;
    imdbID: string;
}

export interface IMovieDetail extends IMovie  {
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Metascore: string;
    imdbRating: number;
    imdbVotes: number;
}
