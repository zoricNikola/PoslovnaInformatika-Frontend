import {PoslovnaBanka} from "./poslovna-banka";
import {Klijent} from "./klijent";

export interface TekuciRacun {
  id?: number,
  poslovnaBanka: PoslovnaBanka,
  klijent: Klijent,
}
