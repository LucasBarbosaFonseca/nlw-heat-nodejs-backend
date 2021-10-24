import { Request, Response } from "express";
import { GetLast3MessagesService } from "../services/GetLast3MessagesService";

class GetLast3MessagesController {
  async handle(request: Request, response: Response) {
    const servise = new GetLast3MessagesService();

    const result = await servise.execute();

    return response.json(result);
  }
}

export { GetLast3MessagesController };