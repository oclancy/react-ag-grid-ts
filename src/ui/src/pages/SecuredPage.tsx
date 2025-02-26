import React, { useEffect, useState } from "react";
import { getData } from "../services/api";

const Secured = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    setState(getData());
  }, []);

  return (
    <div>
      <h1 className="text-black text-4xl">Welcome to the Protected Page.</h1>
    </div>
  );
};

export default Secured;
