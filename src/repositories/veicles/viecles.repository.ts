import { getRepository, Repository } from "typeorm";
import { veicleTable } from "../../entities/veicles";
import { IveiclesRepo } from "./vaicles.interface";

class veicleRepoitory implements IveiclesRepo {
  private ormrepository: Repository<veicleTable>;

  constructor() {
    this.ormrepository = getRepository(veicleTable);
  }

  saveVeicle = async (veicle: any) => await this.ormrepository.save(veicle);

  getOneVeiclePlate = async (plate: string) =>
    await this.ormrepository.findOne({ plate: plate });

  getOneVeicle = async (veicle: string) =>
    await this.ormrepository.findOne({ id: veicle });

  getallVeicle = async () => await this.ormrepository.find();

  updateVeicle = async (
    veicleInitStatus: string,
    name: string,
    description: string,
    plate: string,
    isFavorite: boolean,
    year: string,
    color: string,
    price: number,
    createdAt: string
  ) =>
    await this.ormrepository.update(veicleInitStatus, {
      name: name,
      description: description,
      plate: plate,
      isFavorite: isFavorite,
      year: year,
      color: color,
      price: price,
      createdAt: createdAt,
    });

  deleteVeicle = async (id: string) =>
    await this.ormrepository.delete({ id: id });
}

export default veicleRepoitory;
