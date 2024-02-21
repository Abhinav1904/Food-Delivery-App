import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      Error
      <div>{error.status}</div>
    </div>
  );
};

export default Error;
