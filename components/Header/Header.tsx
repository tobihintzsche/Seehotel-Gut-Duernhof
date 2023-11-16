import React from "react";
import { useDeviceType } from "../Navigation/useDeviceType";

import { DesktopHeader } from "./Header.desktop";
import { MobileHeader } from "./Header.mobile";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const deviceType = useDeviceType();

  const Header = deviceType === "desktop" ? DesktopHeader : MobileHeader;

  return <Header />;
};

export default Header;
