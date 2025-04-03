import { typeLoading } from "@customTypes/shared";

type loadingProps = {
  loading: typeLoading;
  error: null | string;
  children: React.ReactNode;
};

const Loading = ({ loading, error, children }: loadingProps) => {
  if (loading === "pending") {
    return <p>Carregando, por favor aguarde...</p>;
  }
  if (loading === "failed") {
    return <div>{error}</div>;
  }
  return <div>{children}</div>;
};

export default Loading;
