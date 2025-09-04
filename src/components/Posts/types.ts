export type TCardItem = {
  id: number;
  title: string;
  genre: string[];
  satisfied: number;
  actors: string[];
  director: string;
  year: number;
  country: string;
  imdb: number;
  desc: string;
  summary: string;
};

export interface TPost {
  id: number;
  title: string;
  genre: string[];
  satisfied: number;
  actors: string[];
  director: string;
  desc: string;
  year: string;
  country: string;
  imdb: number;
}