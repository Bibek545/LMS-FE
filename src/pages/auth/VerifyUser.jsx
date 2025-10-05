import React, { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { activateNewUserApi } from "../../services/authAPI";
import { FaS } from "react-icons/fa6";
import { useRef } from "react";

const VerifyUser = () => {
  const [isPending, setIsPending] = useState(true);
  const [searchParams] = useSearchParams();  // to grab the sessionId and token from the link
  const [response, setResponse] = useState({});
  const shouldFetchRef = useRef(true)
  const navigate = useNavigate()

  const sessionId = searchParams.get("sessionId");
  const t = searchParams.get("t");
  console.log(sessionId, t);

  useEffect(() => {
    //call api
    if(sessionId && t && shouldFetchRef.current) {
    (async () => {
    const result = await activateNewUserApi({sessionId, t })
    setResponse(result); 
    setIsPending(false); // THIS is to stop the spinner after we get the result
    })();
    shouldFetchRef.current = false;// using this to stop. making two request in the network tab
  } 
  if(response.status === "success") {
    setTimeout(()=> {
      navigate ("/login");
    }, 3000)
  }

  }, [sessionId, t, response.status, navigate]);

  return (
    <div className="py-5 p-5">
      {isPending && (
        <div className="m-auto text-center" style={{ width: "450px" }}>
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
          </div>
          <div>Please do not refresh the browser. Please wait ....</div>
        </div>
      )}

      {response.message && (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message}
        </Alert>
      )}
    </div>
  );
};

export default VerifyUser;
