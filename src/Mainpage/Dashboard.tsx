import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Componentas/Header";
import Footer from "../Componentas/Footer";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-20">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
