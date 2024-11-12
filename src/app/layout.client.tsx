"use client";

import LayoutSite from "@/components/layout/LayoutSite";
import { ReactNode } from "react";

const LayoutClient = ({ children }: { children: ReactNode }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default LayoutClient;
