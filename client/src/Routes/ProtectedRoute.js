import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCurrentuser } from "../redux/features/auth/authAction";
import API from "../services/Api";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const res= await API.get("/auth/current-user");
      if (res) {
        console.log("protected router data", res);
        dispatch(getCurrentuser(res));
      }
      console.log("inside get user function protected router")
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("use effect is called");
     getUser();
  });

  if (localStorage.getItem("token")) {
    console.log("here is children inside protectedRoute",children);
    return children;
  } else {
    console.log("not children")
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
