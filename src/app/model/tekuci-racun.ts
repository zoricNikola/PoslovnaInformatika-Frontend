import {PoslovnaBanka} from "./poslovna-banka";
import {Klijent} from "./klijent";

export interface TekuciRacun {
  id: string,
  poslovnaBanka: PoslovnaBanka,
  klijent: Klijent,
}