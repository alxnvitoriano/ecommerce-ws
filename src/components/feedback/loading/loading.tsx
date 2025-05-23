import { typeLoading } from "@types";

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
    return <div>{error}</div>;
  }
  return <div>{children}</div>;
};

export default Loading;
