import { getRepository, Repository } from "typeorm";
import { veicleTable } from "../../entities/veicles";
import { Iveicles, IveiclesRepo } from "./vaicles.interface";

class veicleRepoitory implements IveiclesRepo {
  private ormrepository: Repository<veicleTable>;

  constructor() {
    this.ormrepository = getRepository(veicleTable);
  }

  saveVeicle = async (veicle: Iveicles) =>
    await this.ormrepository.save(veicle);

  getOneVeiclePlate = async (plate: string) =>
    await this.ormrepository.findOne({ plate: plate });

  getOneVeicle = async (veicle: string) =>
    await this.ormrepository.findOne({ id: veicle });

  getallVeicle = async () => await this.ormrepository.find();

  updateVeicle = async (
    veicleInitStatus: string,
    plate: string,
    chassis: string,
    renavam: number,
    model: string,
    brand: string,
    year: string
  ) =>
    await this.ormrepository.update(veicleInitStatus, {
      plate: plate,
      chassis: chassis,
      renavam: renavam,
      model: model,
      brand: brand,
      year: year,
    });

  deleteVeicle = async (id: string) =>
    await this.ormrepository.delete({ id: id });
}

export default veicleRepoitory;
