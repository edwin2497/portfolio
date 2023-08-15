import { STYLES } from "./styles";
import { ReactElement } from "react";
import { IIconButtonProps } from "components";

export const IconButton = ({
  icon,
  onClick,
}: IIconButtonProps): ReactElement => {
  return (
    <button style={STYLES.BUTTON} onClick={onClick}>
      <span>{icon}</span>
    </button>
  );
};
