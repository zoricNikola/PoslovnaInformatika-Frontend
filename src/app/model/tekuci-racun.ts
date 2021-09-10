import { PoslovnaBanka } from './poslovna-banka';
import { Klijent } from './klijent';

export interface TekuciRacun {
  brojRacuna: string;
  poslovnaBanka: PoslovnaBanka;
  klijent: Klijent;
}
