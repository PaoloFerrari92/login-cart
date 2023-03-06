import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";



const AuthDetail = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className=" text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
          <Button variant="primary" onClick={handleLogout}>
              {!user ? "Log In" : "Log Out"}
        </Button> 
        
      </div>
    </>
  );
};

export default AuthDetail;
