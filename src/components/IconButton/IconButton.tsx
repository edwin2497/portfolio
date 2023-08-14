import { STYLES } from "./styles";
import { MenuIcon } from "assets";
import { ReactElement } from "react";


export const IconButton = (): ReactElement => {
  return (
    <button style={STYLES.BUTTON}>
      <span style={STYLES.ICON}>{<MenuIcon/>}</span>
    </button>
  );
};
