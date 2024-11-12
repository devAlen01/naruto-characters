"use client";
import { ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const LayoutSite = ({ children }: { children: ReactNode }) => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutSite;
