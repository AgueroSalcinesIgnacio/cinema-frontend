import { HttpResponse } from "../../../infrastructure/dto/HttpResponse";
import { OutputUserDTO } from "../dto/OutputUserDTO";
import { IUser } from "../model/IUser";

export const buildUser = (
  response: HttpResponse<OutputUserDTO>
): HttpResponse<IUser> => {
  const createdDate = new Date(response.data.createdDate);
  return { ...response, data: { ...response.data, createdDate: createdDate } };
};
