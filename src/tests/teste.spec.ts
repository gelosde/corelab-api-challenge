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
let seecar: any;
describe("tests for routes off veicle tratament", () => {
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
    seecar = saveNewVeicle.body.veicle;
    console.log(seecar);
    expect(saveNewVeicle.status).toBe(201);
  });
});

/** it("this test is to get all veicles info", async () => {
    const getAllVeicles = await request(app).get("/veicle/list");

    expect(getAllVeicles.status).toBe(200);
  });

  it("this test is to get one veicle info", async () => {
    const getOneVeicle = await request(app).get(`/veicle/see/:${seecar.id}`);

    expect(getOneVeicle.status).toBe(302);
  });

  it("this test is to update veicle info", async () => {
    const getOneVeicle = await request(app)
      .patch(`/veicle/update/:${seecar.id}`)
      .send({ price: 333333333.07 });

    expect(getOneVeicle.status).toBe(200);
  });

  it("this test is to create one arquive with all veicles ", async () => {
    const getArquive = await request(app).get(`/veicle/download/:${seecar.id}`);

    expect(getArquive.status).toBe(200);
  });

  it("this test is to delet one arquive", async () => {
    const deleteArquive = await request(app).delete(`/arquive/:${seecar.id}`);

    expect(deleteArquive.status).toBe(200);
  });

  it("this test is to delet one veicle", async () => {
    const deleteArquive = await request(app).delete(`/veicle/:${seecar.id}`);

    expect(deleteArquive.status).toBe(200);
  }); */
