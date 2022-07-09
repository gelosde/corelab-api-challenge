import { DeleteResult } from "typeorm";

interface Iveicles {
  id?: string;
  name: string;
  description: string;
  plate: string;
  isFavorite: boolean;
  year: string;
  color: string;
  price_min: number;
  price_max: number;
}

interface IveiclesRepo {
  saveVeicle: (veicle: Iveicles) => Promise<Iveicles>;

  deleteVeicle: (veicleId: string) => Promise<DeleteResult>;
}

export { IveiclesRepo, Iveicles };
