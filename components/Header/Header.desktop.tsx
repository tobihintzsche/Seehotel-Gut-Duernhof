import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "../../images/Handball_Logo.svg";

import { DesktopNavigation } from "../Navigation/Navigation.desktop";

interface DesktopHeaderProps {}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({}) => {
  return (
    <div className="bg-primary-200 py-2">
      <div className="max-w-screen-2xl mx-auto flex justify-center">
        <div className="flex justify-between w-full lg:mx-10 md:mx-8 sm:mx-6">
          <div>
            <Link href="/" legacyBehavior>
              <a className="inline-flex items-center py-2 "></a>
            </Link>
          </div>

          <div className="items-center inline-flex">
            <DesktopNavigation />
          </div>
        </div>
      </div>
    </div>
  );
};
