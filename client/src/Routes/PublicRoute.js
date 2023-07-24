import React from 'react'

const PublicRoute = ({children}) => {
    if (localStorage.getItem("token")) {
        
        return <Navigate to="/" />;
      } else {
        console.log("children")
        return children;
      }
}

export default PublicRoute
