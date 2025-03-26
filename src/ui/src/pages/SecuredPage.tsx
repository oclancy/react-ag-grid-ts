import React, { useEffect, useState } from "react";
import { getData } from "../services/api";
import { Textarea } from "@fold-dev/core";

const Secured = () => {
  const [state, setState] = useState({});
  const [text, setText] = useState({});
  useEffect(() => {
    setState(getData());
  }, []);

  return (
    <div>
      <h1 className="text-black text-4xl">Welcome to the Protected Page.</h1>
      <Textarea
        value={text}
        height={100}
        className="f-scrollbar"
        placeholder="Write message..."
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Secured;
