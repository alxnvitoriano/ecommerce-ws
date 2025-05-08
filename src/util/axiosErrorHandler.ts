import { isAxiosError } from "axios";

const isAxiosErrorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    return error.response?.data.message || error.message;
  } else {
    return "Ocorreu um erro inesperado.";
  }
};

export default isAxiosErrorHandler;
