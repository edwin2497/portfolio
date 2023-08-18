import "./styles.css";
import { ReactElement } from "react";
import { IIconButtonProps } from "components";

export const IconButton = ({
  icon,
  onClick,
}: IIconButtonProps): ReactElement => {
  return (
    <button className="icon-button" onClick={onClick}>
      {icon}
    </button>
  );
};
