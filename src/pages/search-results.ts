import { autoinject } from "aurelia-framework";

import { Movie, SearchResults as Results } from "moviedb-promise";

import { MovieApi } from "../api/index";

@autoinject
export class SearchResults {
  searchTerm: string;
  header = "Your search results";
  results: Results;
  isLoading = false;

  constructor(private api: MovieApi) {}

  async activate(args: { term: string }) {
    this.searchTerm = args.term;
    this.isLoading = true;

    this.results = await this.api.search(this.searchTerm);

    this.header =
      this.results.total_results > 0
        ? `Found ${this.results.total_results} movies that matched "${this.searchTerm}"`
        : `Didn't find any results for "${this.searchTerm}"`;

    this.isLoading = false;
  }
}
