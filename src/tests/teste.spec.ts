import app from "../app";

import {
  expect,
  it,
  describe,
  beforeEach,
  afterAll,
  beforeAll,
} from "@jest/globals";

import request = require("supertest");

import connection from "./connect";
import veicleTest from "./veicle";

let drop: any;
describe("tests for routes off veicle tratament", () => {
  let seecar: any;
  beforeAll(async () => {
    await connection.create();
  });

  beforeEach(async () => {
    await connection.clear();
  });
  afterAll(async () => {
    await connection.close();
  });
  it("this test is to save a new veicle info", async () => {
    const saveNewVeicle = await request(app)
      .post("/veicle/register")
      .send(veicleTest);
    seecar = saveNewVeicle.body.veicle.id;
    expect(saveNewVeicle.status).toBe(201);
  });
  it("this test is to get all veicles info", async () => {
    const getAllVeicles = await request(app).get("/veicle/list");
    expect(getAllVeicles.status).toBe(200);
  });

  it("this test is to get one veicle info", async () => {
    try {
      const getOneVeicle = await request(app).get(`/veicle/see/${seecar}`);
      drop = getOneVeicle;
      expect(getOneVeicle.status).toBe(302);
    } catch (err) {}
  });

  it("this test is to update veicle info", async () => {
    try {
      const updateVeicle = await request(app)
        .patch(`/veicle/update/${seecar}`)
        .send({ price: 333333333 });
      drop = updateVeicle;
      expect(updateVeicle.status).toBe(200);
    } catch (err) {}
  });

  it("this test is to create one arquive with all veicles ", async () => {
    try {
      const getArquive = await request(app).get(`/veicle/download/${seecar}`);
      drop = getArquive;
      expect(getArquive.status).toBe(200);
    } catch (err) {}
  });

  it("this test is to delet one arquive", async () => {
    try {
      const deleteArquive = await request(app).delete(`/arquive/${seecar}`);
      drop = deleteArquive;
      expect(deleteArquive.status).toBe(200);
    } catch (err) {}
  });
});
