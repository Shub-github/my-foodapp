// useRouteError is used to present errors in proper way in this hook we get more details related to error
import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error.status, error.statusText);
  return (
    <div>
      <h3>Oops!!</h3>
      <h3>Something went wrong!!</h3>
      <h4>
        {error.status}:{error.statusText}
      </h4>
    </div>
  );
};

export default Error;
