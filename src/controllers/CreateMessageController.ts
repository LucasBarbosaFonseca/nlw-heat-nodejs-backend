import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body;
    const { user_id } = request;

    const servise = new CreateMessageService();

    const result = await servise.execute(message, user_id);

    return response.json(result);
  }
}

export { CreateMessageController };