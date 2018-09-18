import { autoinject } from "aurelia-framework";

import { Movie } from 'moviedb-promise';

import { MovieApi } from './../api/index';

@autoinject
export class PopularMovies {    
  movies: Movie[]
  
  constructor(private api: MovieApi) { }

  async attached() {
    this.movies = await this.api.popularMovies();
  }
}
