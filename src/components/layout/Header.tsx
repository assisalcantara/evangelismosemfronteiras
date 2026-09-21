import React from "react";
import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs">
      <TopBar />
      <Navbar />
    </header>
  );
};
