import "./styles.css";
import { ReactElement } from "react";
import { useScreenSize } from "hooks";
import { ROUTES, SCREEN_SIZE } from "const";
import { Menu, Links, IAppBarProps } from "components";

export const AppBar = ({ open, handleOpen }: IAppBarProps): ReactElement => {
  const { width } = useScreenSize();

  return (
    <div className="app-bar">
      {width >= SCREEN_SIZE.TABLET ? (
        <Links routes={ROUTES} />
      ) : (
        <Menu open={open} handleOpen={handleOpen} />
      )}
    </div>
  );
};
