import { ReactElement } from "react";
import { ILinkProps } from "./Link.model";
import { Link as RRDLink } from "react-router-dom";

export const Link = ({
  id,
  to,
  name,
  onClick,
}: ILinkProps): ReactElement => {
  return (
    <RRDLink key={id} to={to} onClick={onClick}>
      {name}
    </RRDLink>
  );
};
