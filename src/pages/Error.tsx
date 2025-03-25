import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Container } from "react-bootstrap";

const Error = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = "Página não encontrada";
  } else {
    errorStatus = 404;
    errorStatusText = "Página não encontrada";
  }

  return (
    <Container className="notFound">
      <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p>
      <Link to="/" replace={true}>
        Que tal voltar a pagina inicial?
      </Link>
    </Container>
  );
};

export default Error;
