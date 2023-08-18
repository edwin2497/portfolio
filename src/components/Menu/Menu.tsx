import "./styles.css";
import { ROUTES } from "const";
import { ReactElement } from "react";
import { MenuIcon, CloseIcon } from "assets";
import { IconButton, IMenuProps, Links } from "components";

export const Menu = ({ open, handleOpen }: IMenuProps): ReactElement => {
  return (
    <div>
      {open && (
        <div className="menu-container">
          <Links routes={ROUTES} onClick={handleOpen} />
        </div>
      )}

      <div>
        <IconButton
          onClick={handleOpen}
          icon={
            open ? (
              <CloseIcon width={35} height={35} fill="#66FCF1" />
            ) : (
              <MenuIcon width={35} height={35} fill="#66FCF1" />
            )
          }
        />
      </div>
    </div>
  );
};
