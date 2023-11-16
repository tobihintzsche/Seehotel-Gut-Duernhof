import Link from "next/link";
import React from "react";

export interface MobileNavigationItemProps {
  navigationItem: any;
  handleClose: () => void;
}

export const MobileNavigationItem: React.FC<MobileNavigationItemProps> = ({
  navigationItem,
  handleClose,
}) => {
  const { href, title } = navigationItem;

  return (
    <Link href={href} legacyBehavior>
      <a
        className="mr-4 hover:text-yellow-900 w-max text-4xl"
        onClick={handleClose}
      >
        {title.toUpperCase()}
      </a>
    </Link>
  );
};
