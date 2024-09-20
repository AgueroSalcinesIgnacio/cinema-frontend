import { apiPost } from "../../../infrastructure/apliClient";
import { HttpResponse } from "../../../infrastructure/dto/HttpResponse";
import { LOGIN_REGISTER } from "../../../infrastructure/utils/ApiUrls";
import { InputUserDTO } from "../dto/InputUserDTO";
import { OutputUserDTO } from "../dto/OutputUserDTO";
import { buildUser } from "../factory/userFactory";
import { IUser } from "../model/IUser";

export const saveUser = async (
  user: InputUserDTO
): Promise<HttpResponse<IUser>> => {
  const response = await apiPost<OutputUserDTO>(LOGIN_REGISTER, user);
  return buildUser(response);
};
