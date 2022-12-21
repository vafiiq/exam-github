import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavbarMain";
import Footer from "../../components/Footer";
import SideBar from "../../components/Sidebar";
import { api } from "../../API";
import { UserContext } from "../../Context";
import { UserNameContext } from "../../Context/UserName";
const index = () => {
  const { user, setUser } = useContext(UserContext);
  const { userName, setUserName } = useContext(UserNameContext);
  useEffect(() => {
    api.getUser(userName).then((res) => {
      setUser(res.data);
    });
  }, [userName]);
  return (
    <>
      <Navbar data={user} />
      <div className="container d-flex gap-3  wr">
        <SideBar data={user} />
        <Outlet />
      </div>
    </>
  );
};

export default index;
