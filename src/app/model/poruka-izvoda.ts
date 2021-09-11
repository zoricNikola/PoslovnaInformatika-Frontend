import { PoslovnaBanka } from './poslovna-banka';
import { Nalog } from './nalog';

export interface PorukaIzvoda {
  id: number;
  datum: Date;
  vrstaPoruke: string;
  ukupanIznos: number;
  sifraValute: string;
  datumValute: Date;
  bankaDuznika: PoslovnaBanka;
  bankaPoverioca: PoslovnaBanka;
  nalozi: Nalog[];
}
