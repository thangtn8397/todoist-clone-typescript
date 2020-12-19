/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

type BackdropProps = {
  show: boolean;
  clicked: () => void;
};
const Backdrop: React.FC<BackdropProps> = ({
  show,
  clicked,
}: BackdropProps) => {
  return show ? (
    <div
      role="button"
      className="backdrop"
      tabIndex={0}
      onClick={() => {
        return clicked();
      }}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === 'Enter') clicked();
      }}
    />
  ) : null;
};

export default Backdrop;
