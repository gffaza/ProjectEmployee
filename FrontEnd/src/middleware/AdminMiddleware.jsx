import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminMiddleware({ children }) {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("dataLogin") == null) {
      navigate("/login");
    }
  }, []);

  return <div>{children}</div>;
}
