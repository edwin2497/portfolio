import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IMenuOptionsProps } from "./MenuOptions.model";

export const MenuOptions = ({
  onClick,
  routes,
}: IMenuOptionsProps): ReactElement => {
  return (
    <>
      {routes.map((route) => (
        <Link
          key={route.id}
          to={route.to}
          onClick={onClick}
          style={{
            textDecoration: "none",
            color: "#66FCF1",
            padding: "6px",
          }}
        >
          {route.label}
        </Link>
      ))}
    </>
  );
};
