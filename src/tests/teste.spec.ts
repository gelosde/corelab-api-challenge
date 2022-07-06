import app from "../app";

import {
  expect,
  it,
  describe,
  beforeEach,
  afterAll,
  beforeAll,
} from "@jest/globals";
import request from "supertest";
import connection from "./connect";
describe("tests for routes off veicle tratament", () => {
  beforeAll(async () => {
    await connection.create();
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    await connection.clear();
  });
  // it("this test is to save a new veicle info", async () => {
  //   const saveNewVeicle = await request(app)
  //     .post("/veicle/register")
  //     .send(veicleTest);

  //   expect(saveNewVeicle.status).toBe(201);
  // });

  it("this test is to get all veicles info", async () => {
    const getAllVeicles = await request(app).get("/veicle/list");

    expect(getAllVeicles.status).toBe(200);
  });

  // it("this test is to get one veicle info", async () => {
  //   const getOneVeicle = await request(app).get(`/veicle/see/:${id}`);

  //   expect(getOneVeicle.status).toBe(302);
  // });

  // it("this test is to update veicle info", async () => {
  //   const getOneVeicle = await request(app)
  //     .patch(`/veicle/update/:${id}`)
  //     .send({ renavam: 333333333 });

  //   expect(getOneVeicle.status).toBe(200);
  // });

  // it("this test is to create one arquive with all veicles ", async () => {
  //   const getArquive = await request(app).get(`/veicle/download/:${id}`);

  //   expect(getArquive.status).toBe(200);
  // });

  // it("this test is to delet one arquive", async () => {
  //   const deleteArquive = await request(app).delete(`/arquive/:${id}`);

  //   expect(deleteArquive.status).toBe(200);
  // });

  // it("this test is to delet one veicle", async () => {
  //   const deleteArquive = await request(app).delete(`/veicle/:${id}`);

  //   expect(deleteArquive.status).toBe(200);
  // });
});
