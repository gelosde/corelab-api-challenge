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

  updateVeicle = async (veicleInitStatus: any, modificated: any) =>
    await this.ormrepository.update(veicleInitStatus, {
      name: modificated.name,
      description: modificated.description,
      plate: modificated.plate,
      isFavorite: modificated.isFavorite,
      year: modificated.year,
      color: modificated.color,
      price: modificated.price,
      createdAt: modificated.createdAt,
    });

  deleteVeicle = async (id: string) =>
    await this.ormrepository.delete({ id: id });
}

export default veicleRepoitory;
