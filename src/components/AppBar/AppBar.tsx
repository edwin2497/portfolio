import { ROUTES } from "const";
import { STYLES } from "./styles";
import { ReactElement } from "react";
import { IconButton, Link } from "components";

export const AppBar = (): ReactElement => {
  return (
    <div style={STYLES.APP_BAR}>
      {ROUTES.map((route) => (
        <Link
          key={route.ID}
          to={route.TO}
          style={STYLES.LINKS}
          name={route.NAME}
        />
      ))}
      
      <IconButton />
    </div>
  );
};
