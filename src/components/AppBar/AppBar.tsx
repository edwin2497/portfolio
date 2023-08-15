import { STYLES } from "./styles";
import { MenuIcon } from "assets";
import { ReactElement } from "react";
import { useScreenSize } from "hooks";
import { ROUTES, SCREEN_SIZE } from "const";
import { IconButton, Links } from "components";

export const AppBar = (): ReactElement => {
  const { width } = useScreenSize();

  return (
    <div style={STYLES.APP_BAR}>
      {width >= SCREEN_SIZE.TABLET ? (
        <Links routes={ROUTES} style={STYLES.LINKS} />
      ) : (
        <IconButton
          onClick={() => {}}
          icon={<MenuIcon width={35} height={35} fill="#66FCF1" />}
        />
      )}
    </div>
  );
};
