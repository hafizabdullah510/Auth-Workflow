import React from "react";
import UserNav from "../components/UserNav.js";
import { useGlobalContext } from "../context.js";
const UserPage = () => {
  const { loggedInUser } = useGlobalContext();

  return (
    <>
      <UserNav />
      <div className="user-cont">
        <div className="user-info-cont">
          <h1>{`Hello There, ${loggedInUser.name.toUpperCase()}`}</h1>
          <p>
            Your ID:{" "}
            <span className="user-span">{`${loggedInUser.userId}`}</span>
          </p>
          <p>
            Your role:
            <span className="user-span">{`${loggedInUser.role}`}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserPage;
