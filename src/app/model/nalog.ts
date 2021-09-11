export interface Nalog {
  id: number;
  duznik: string;
  poverilac: string;
  racunDuznika: string;
  racunPoverioca: string;
  svrhaPlacanja: string;
  iznos: number;
  sifraValute: string;
  datum: Date;
  hitno: boolean;
  pozivNaBrojZaduzenja?: string;
  pozivNaBrojOdobrenja?: string;
  modelZaduzenja?: number;
  modelOdobrenja?: number;
}
