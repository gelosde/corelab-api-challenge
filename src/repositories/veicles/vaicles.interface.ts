import { DeleteResult } from "typeorm";

interface Iveicles {
  id?: string;
  name?: string;
  description?: string;
  plate?: string;
  isFavorite?: boolean;
  year?: number;
  color?: string;
  price?: number;
  createdAt?: Date;
}

interface IveiclesRepo {
  saveVeicle: (veicle: Iveicles) => Promise<Iveicles>;

  deleteVeicle: (veicleId: string) => Promise<DeleteResult>;
}

export { Iveicles, IveiclesRepo };
