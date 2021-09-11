import { PoslovnaBanka } from './poslovna-banka';
import { DnevnoStanje } from './dnevno-stanje';

export interface StanjeRacuna {
  poslovnaBanka: PoslovnaBanka;
  dnevnoStanje: DnevnoStanje;
}
