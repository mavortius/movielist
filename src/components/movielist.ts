import { bindable } from "aurelia-framework";

import { Movie } from 'moviedb-promise';

export class MovieList {    
  @bindable movies: Movie[];
  @bindable title: string;
}
