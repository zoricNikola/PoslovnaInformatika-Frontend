import {Mesto} from "./mesto";
import {Delatnost} from "./delatnost";

export interface Klijent{
  id?: number;
  ime: string;
  prezime: string;
  naziv: string;
  adresa: string;
  pib: number;
  mesto: Mesto;
  delatnost: Delatnost;
}
