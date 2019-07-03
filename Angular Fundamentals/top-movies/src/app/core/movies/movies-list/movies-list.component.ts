import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mvdb-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  private _listFilter: string;

  public pageTitle = 'Top 10 iMDB Movies';
  public movies = [{
    "Title": "The Shawshank Redemption",
    "Year": "1994",
    "Rated": "R",
    "Released": "14 Oct 1994",
    "Runtime": "142 min",
    "Genre": "Crime, Drama",
    "Director": "Frank Darabont",
    "Writer": "Stephen King (short story \"Rita Hayworth and Shawshank Redemption\"), Frank Darabont (screenplay)",
    "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 7 Oscars. Another 19 wins & 30 nominations.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
    "Metascore": "80",
    "imdbRating": "9.3",
    "imdbVotes": "1,738,596",
    "imdbID": "tt0111161",
    "Type": "movie",
    "Top250": "1"
  }, {
    "Title": "The Godfather",
    "Year": "1972",
    "Rated": "R",
    "Released": "24 Mar 1972",
    "Runtime": "175 min",
    "Genre": "Crime, Drama",
    "Director": "Francis Ford Coppola",
    "Writer": "Mario Puzo (screenplay), Francis Ford Coppola (screenplay), Mario Puzo (novel)",
    "Actors": "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
    "Plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "Language": "English, Italian, Latin",
    "Country": "USA",
    "Awards": "Won 3 Oscars. Another 23 wins & 27 nominations.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTc0ZDk1YWItZDZiNi00NTdmLWE0MDctNTVhYTRhMDBmZjNjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    "Metascore": "100",
    "imdbRating": "9.2",
    "imdbVotes": "1,186,027",
    "imdbID": "tt0068646",
    "Type": "movie",
    "Top250": "2"
  }, {
    "Title": "The Godfather: Part II",
    "Year": "1974",
    "Rated": "R",
    "Released": "20 Dec 1974",
    "Runtime": "202 min",
    "Genre": "Crime, Drama",
    "Director": "Francis Ford Coppola",
    "Writer": "Francis Ford Coppola (screenplay), Mario Puzo (screenplay), Mario Puzo (novel)",
    "Actors": "Al Pacino, Robert Duvall, Diane Keaton, Robert De Niro",
    "Plot": "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.",
    "Language": "English, Italian, Spanish, Latin, Sicilian",
    "Country": "USA",
    "Awards": "Won 6 Oscars. Another 10 wins & 20 nominations.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTE1MTBiYzYtMDI1OC00ZTUxLTg0ZWQtZjdjMzA0OTM1NGMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    "Metascore": "80",
    "imdbRating": "9.0",
    "imdbVotes": "813,863",
    "imdbID": "tt0071562",
    "Type": "movie",
    "Top250": "3"
  }, {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Crime, Drama",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,713,318",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Top250": "4"
  }, {
    "Title": "12 Angry Men",
    "Year": "1957",
    "Rated": "APPROVED",
    "Released": "01 Apr 1957",
    "Runtime": "96 min",
    "Genre": "Crime, Drama",
    "Director": "Sidney Lumet",
    "Writer": "Reginald Rose (story), Reginald Rose (screenplay)",
    "Actors": "Martin Balsam, John Fiedler, Lee J. Cobb, E.G. Marshall",
    "Plot": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 3 Oscars. Another 16 wins & 8 nominations.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SX300.jpg",
    "Metascore": "N/A",
    "imdbRating": "8.9",
    "imdbVotes": "462,820",
    "imdbID": "tt0050083",
    "Type": "movie",
    "Top250": "5"
  }, {
    "Title": "Schindler's List",
    "Year": "1993",
    "Rated": "R",
    "Released": "04 Feb 1994",
    "Runtime": "195 min",
    "Genre": "Biography, Drama, History",
    "Director": "Steven Spielberg",
    "Writer": "Thomas Keneally (book), Steven Zaillian (screenplay)",
    "Actors": "Liam Neeson, Ben Kingsley, Ralph Fiennes, Caroline Goodall",
    "Plot": "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.",
    "Language": "English, Hebrew, German, Polish",
    "Country": "USA",
    "Awards": "Won 7 Oscars. Another 71 wins & 33 nominations.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzMwMTM4MDU2N15BMl5BanBnXkFtZTgwMzQ0MjMxMDE@._V1_SX300.jpg",
    "Metascore": "93",
    "imdbRating": "8.9",
    "imdbVotes": "890,631",
    "imdbID": "tt0108052",
    "Type": "movie",
    "Top250": "6"
  }, {
    "Title": "Pulp Fiction",
    "Year": "1994",
    "Rated": "R",
    "Released": "14 Oct 1994",
    "Runtime": "154 min",
    "Genre": "Crime, Drama",
    "Director": "Quentin Tarantino",
    "Writer": "Quentin Tarantino (story), Roger Avary (story), Quentin Tarantino",
    "Actors": "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
    "Plot": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "Language": "English, Spanish, French",
    "Country": "USA",
    "Awards": "Won 1 Oscar. Another 60 wins & 65 nominations.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg",
    "Metascore": "94",
    "imdbRating": "8.9",
    "imdbVotes": "1,353,269",
    "imdbID": "tt0110912",
    "Type": "movie",
    "Top250": "7"
  }, {
    "Title": "The Lord of the Rings: The Return of the King",
    "Year": "2003",
    "Rated": "PG-13",
    "Released": "17 Dec 2003",
    "Runtime": "201 min",
    "Genre": "Adventure, Drama, Fantasy",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)",
    "Actors": "Noel Appleby, Ali Astin, Sean Astin, David Aston",
    "Plot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    "Language": "English, Quenya, Old English, Sindarin",
    "Country": "USA, New Zealand",
    "Awards": "Won 11 Oscars. Another 174 wins & 113 nominations.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4MjA1NTAyMV5BMl5BanBnXkFtZTcwNzM1NDQyMQ@@._V1_SX300.jpg",
    "Metascore": "94",
    "imdbRating": "8.9",
    "imdbVotes": "1,247,523",
    "imdbID": "tt0167260",
    "Type": "movie",
    "Top250": "8"
  }, {
    "Title": "The Good, the Bad and the Ugly",
    "Year": "1966",
    "Rated": "APPROVED",
    "Released": "29 Dec 1967",
    "Runtime": "161 min",
    "Genre": "Western",
    "Director": "Sergio Leone",
    "Writer": "Luciano Vincenzoni (story), Sergio Leone (story), Agenore Incrocci (screenplay), Furio Scarpelli (screenplay), Luciano Vincenzoni (screenplay), Sergio Leone (screenplay), Mickey Knox (English version by)",
    "Actors": "Eli Wallach, Clint Eastwood, Lee Van Cleef, Aldo Giuffrè",
    "Plot": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    "Language": "Italian",
    "Country": "Italy, Spain, West Germany, USA",
    "Awards": "1 win & 1 nomination.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SX300.jpg",
    "Metascore": "90",
    "imdbRating": "8.9",
    "imdbVotes": "514,659",
    "imdbID": "tt0060196",
    "Type": "movie",
    "Top250": "9"
  }, {
    "Title": "Fight Club",
    "Year": "1999",
    "Rated": "R",
    "Released": "15 Oct 1999",
    "Runtime": "139 min",
    "Genre": "Drama",
    "Director": "David Fincher",
    "Writer": "Chuck Palahniuk (novel), Jim Uhls (screenplay)",
    "Actors": "Edward Norton, Brad Pitt, Meat Loaf, Zach Grenier",
    "Plot": "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.",
    "Language": "English",
    "Country": "USA, Germany",
    "Awards": "Nominated for 1 Oscar. Another 10 wins & 31 nominations.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGM2NjQxZTAtMmU5My00YTk5LWFmOWMtYjZlYzk4YzMwNjFlXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    "Metascore": "66",
    "imdbRating": "8.8",
    "imdbVotes": "1,384,393",
    "imdbID": "tt0137523",
    "Type": "movie",
    "Top250": "10"
  }];

  public filteredMovies: any[];

  constructor() { 
    this.filteredMovies = this.movies;
  }

  public get listFilter(): string {
    return this._listFilter;
  }

  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }

  
  public ngOnInit() {
  }
  
  private performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.movies.filter((m: any) => m.Title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
