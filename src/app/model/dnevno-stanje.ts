import { ObracunskiRacun } from './obracunski.racun';

export interface DnevnoStanje {
  id: number;
  datum: Date;
  prethodnoStanje: number;
  prometNaTeret: number;
  prometUKorist: number;
  novoStanje: number;
  obracunskiRacun: ObracunskiRacun;
}
