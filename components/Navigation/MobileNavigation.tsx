import React from "react";

export interface MobileNavigationProps {
  handleClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  handleClose,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h1>MobileNavigation</h1>
    </div>
  );
};
