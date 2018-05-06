import React, { Component } from 'react';
import Movie from './Movie'

class MoviesList extends Component {

  state = {
    movies: [] 
  }

  async componentDidMount(){
    try {
     const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=46becdf3251e17ce10c5fd25bf8352d2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'); 
     const movies = await res.json();
     this.setState({
       movies: movies.results
     })
    } catch (error) {
      console.log(error);
    } 
  }

  render() {
    return (
        <div>
          {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
    );
  }
  
}

export default MoviesList;


