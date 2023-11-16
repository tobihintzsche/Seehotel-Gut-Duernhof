import dynamic from "next/dynamic";
import React from "react";

import { HeaderProps } from "./Header/Header";

const DynamicHeader = dynamic<HeaderProps>(
  () => import("./Header/Header").then((m) => m.default),
  {
    ssr: false,
  }
);

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col  justify-between h-screen">
      <div>
        <div className="sticky top-0 z-50">
          <DynamicHeader />
        </div>
        <div className="mx-auto bg-white text-black">{children}</div>
      </div>
    </div>
  );
};
