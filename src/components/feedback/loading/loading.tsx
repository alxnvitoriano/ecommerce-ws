import { typeLoading } from "@customTypes/shared";

type loadingProps = {
  status: typeLoading;
  error: null | string;
  children: React.ReactNode;
};

const Loading = ({ status, error, children }: loadingProps) => {
  if (status === "pending") {
    return <p>Carregando, por favor aguarde...</p>;
  }
  if (status === "failed") {
    return <p>{error}</p>;
  }
  return <>{children}</>;
};

export default Loading;
