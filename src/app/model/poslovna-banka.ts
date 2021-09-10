import { ObracunskiRacun } from "./obracunski.racun";

export interface PoslovnaBanka {
    sifraBanke?: number,
    nazivBanke: string,
    swiftKod: string,
    obracunskiRacun: ObracunskiRacun
}