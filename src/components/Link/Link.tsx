import { ReactElement } from "react";
import { LinkProps } from "./Link.model";
import { Link as RRDLink } from "react-router-dom";

export const Link = ({ id, to, style, name }: LinkProps): ReactElement => {
  return (
    <RRDLink key={id} to={to} style={style}>
      {name}
    </RRDLink>
  );
};
