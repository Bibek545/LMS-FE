import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

const VerifyUser = () => {
  const [isPending, setIsPending] = useState(true);
  return (
    <div className="py-5">
      {isPending && (
        <div className="m-auto text-center" style={{width: "450px"}}>
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
          </div>
          <div>Please do not refresh the browser. Please wait ....</div>
        </div>
      )}
    </div>
  );
};

export default VerifyUser;
