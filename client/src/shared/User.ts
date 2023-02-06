import { writable } from "svelte/store";

interface Data {
  day: number;
  month: number;
  year: number;
}

interface User {
  firstName: string;
  lastName: string;
  img: string;
  email: string;
  pass: string;
  since: Data;
  comments: number;
  tutorials: number;
  articles: number;
  meetings: number;
  role: number;
  desc: string;
  favorites: Array<string> | [];
  birthday: Data;
}

export const isUserLoggedIn = writable(false);
export const user: User | {} = writable({});
