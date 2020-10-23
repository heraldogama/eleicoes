import { getRepository } from "typeorm";
import { Urna } from "../entity/Urna";
import { Request, Response } from "express";

export const getUrnas = async (request: Request, response: Response) => {
  const geturna = await getRepository(Urna).find();
  return response.json(geturna);
};

export const insertUrnas = async (request: Request, response: Response) => {
  const saveUrnas = await getRepository(Urna).save(request.body);
  return response.json(saveUrnas);
};
